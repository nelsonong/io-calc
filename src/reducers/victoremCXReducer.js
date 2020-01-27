import {
  MODELS,
  SENSOR,
  FORMATS,
  SUBSAMPLING_BINNING,
  RESOLUTION,
  RESOLUTION_VALUES,
  RESOLUTION_PRESETS,
  MODE,
} from '../components/VictoremCXCalculator/constants';
import * as resolution from '../components/VictoremCXCalculator/utils/resolution';
import calculateFrameRate from '../components/VictoremCXCalculator/utils/calculateFrameRate';
import calculateDataRate from '../components/VictoremCXCalculator/utils/calculateDataRate';
import * as support from '../components/VictoremCXCalculator/utils/support';
import {
  INITIALIZE_VICTOREM_CX_DVR_STATE,
  UPDATE_VICTOREM_CX_MODEL,
  UPDATE_VICTOREM_CX_FORMAT,
  UPDATE_VICTOREM_CX_ADC_BIT_DEPTH,
  UPDATE_VICTOREM_CX_OUTPUT_BIT_DEPTH,
  UPDATE_VICTOREM_CX_RESOLUTION_PRESET,
  UPDATE_VICTOREM_CX_WIDTH,
  UPDATE_VICTOREM_CX_HEIGHT,
  UPDATE_VICTOREM_CX_SUBSAMPLING_BINNING,
  UPDATE_VICTOREM_CX_SENSOR_DRIVE_MODE,
} from '../actions/victoremCXActions';

// Update and validate resolution
const updateResolution = (inputCalculatorState) => {
  let calculatorState = { ...inputCalculatorState };
  const {
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    widthStep,
    heightStep,
    resolutionPreset,
  } = calculatorState;

  // If min/max preset, update values
  switch (resolutionPreset) {
    case RESOLUTION.MINIMUM:
      calculatorState = {
        ...calculatorState,
        width: minWidth,
        height: minHeight,
      };
      break;

    case RESOLUTION.MAXIMUM:
      calculatorState = {
        ...calculatorState,
        width: maxWidth,
        height: maxHeight,
      };
      break;

    default:
      break;
  }

  // Validate input
  const {
    width,
    height,
    cameraMode,
    subSamplingBinning,
  } = calculatorState;
  let resolutionTooltip = '';
  if (subSamplingBinning === SUBSAMPLING_BINNING.NONE && cameraMode !== 1) {
    if (width > maxWidth) {
      resolutionTooltip = `Maximum width is ${maxWidth}px.`;
    }

    if (height > maxHeight) {
      resolutionTooltip = `Maximum height is ${maxHeight}px.`;
    }

    if ((width % widthStep) !== 0) {
      resolutionTooltip = `Width must be a multiple of ${widthStep}.`;
    }

    if ((height % heightStep) !== 0) {
      resolutionTooltip = `Height must be a multiple of ${heightStep}.`;
    }
  }

  const error = resolutionTooltip !== '';
  return {
    ...calculatorState,
    width,
    height,
    resolutionTooltip,
    error,
  };
};

// Update resolution values
const updateResolutionConstraints = (calculatorState) => {
  const { model } = calculatorState;
  const minWidth = resolution.calculateMinWidth(model);
  const maxWidth = resolution.calculateMaxWidth(calculatorState);
  const widthStep = resolution.calculateWidthStep(model);
  const minHeight = resolution.calculateMinHeight();
  const maxHeight = resolution.calculateMaxHeight(calculatorState);
  const heightStep = resolution.calculateHeightStep();
  return {
    ...calculatorState,
    minWidth,
    maxWidth,
    widthStep,
    minHeight,
    maxHeight,
    heightStep,
  };
};

// Update output
const updateOutput = (calculatorState) => {
  const frameRate = calculateFrameRate(calculatorState);
  const dataRate = calculateDataRate({
    ...calculatorState,
    frameRate,
  });
  return {
    ...calculatorState,
    frameRate,
    dataRate,
  };
};

const victoremCXReducer = (state = { order: [] }, action) => {
  const {
    cameraId,
    type,
  } = action;
  const calculators = { ...state };
  let calculatorState = calculators[cameraId];
  switch (type) {
    case INITIALIZE_VICTOREM_CX_DVR_STATE: {
      const { mode } = action;
      const { initialized } = calculatorState;
      if (initialized) {
        return state;
      }

      let { models } = calculatorState;
      if (mode === MODE.DUAL) {
        models = models.filter(model => !model.startsWith('16B') && !model.startsWith('4B'));
      }

      const model = models[0];
      calculatorState = {
        ...calculatorState,
        model,
        models,
        initialized: true,
      };

      // Fall-through
    }

    case UPDATE_VICTOREM_CX_MODEL: {
      const { model } = action.model ? action : calculatorState;

      // Get sensor
      const sensor = SENSOR[model];

      // Get formats
      let formats;
      if (model.startsWith('4B')) {
        formats = FORMATS.CX4B;
      } else if (model.startsWith('16B')) {
        formats = FORMATS.CX16B;
      } else if (model.startsWith('24A')) {
        formats = FORMATS.CX24A;
      } else {
        formats = FORMATS.CXX;
      }

      if (formats === FORMATS.CX24A || formats === FORMATS.CXX) {
        const { mode } = calculatorState;
        if (mode) {
          switch (mode) {
            case MODE.SINGLE:
              formats = formats.filter(format => format.startsWith('1'));
              break;

            case MODE.DUAL:
              formats = formats.filter(format => format.startsWith('2'));
              break;

            default:
              break;
          }
        }
      }

      const format = formats[0];

      // Get camera mode
      let cameraMode;
      if (model.startsWith('24A')) {
        cameraMode = 2;
      } else if (model.startsWith('205')) {
        cameraMode = 1;
      } else {
        cameraMode = 0;
      }

      // Reset subSamplingBinning
      const subSamplingBinning = SUBSAMPLING_BINNING.NONE;

      // Get supported options
      const supports2x2Binning = support.supports2x2Binning(model);
      const supportsSubSampling = support.supportsSubSampling(model);
      const supportsVerticalBinning = support.supportsVerticalBinning(model);
      const supportsHorizontalBinning = support.supportsHorizontalBinning(model);
      const {
        linkSpeed,
        linkCount,
      } = calculatorState;

      const adcBitDepths = support.supportedBitDepths({
        ...calculatorState,
        model,
      });
      const adcBitDepth = adcBitDepths[0];

      // Change resolution back to Maximum preset
      const resolutionPresets = RESOLUTION_PRESETS[model];
      const resolutionPreset = resolutionPresets[0];

      // Update state
      calculatorState = {
        ...calculatorState,
        model,
        sensor,
        format,
        formats,
        adcBitDepth,
        adcBitDepths,
        resolutionPreset,
        resolutionPresets,
        cameraMode,
        supports2x2Binning,
        supportsSubSampling,
        supportsVerticalBinning,
        supportsHorizontalBinning,
        subSamplingBinning,
      };
      calculatorState = updateResolutionConstraints(calculatorState);
      calculatorState = updateResolution(calculatorState);
      calculatorState = updateOutput(calculatorState);
      break;
    }

    case UPDATE_VICTOREM_CX_FORMAT: {
      const { format } = action;
      const {
        model,
        subSamplingBinning,
      } = calculatorState;
      const linkSpeed = Number(format.slice(-1));
      const linkCount = Number(format.slice(0, 1));
      calculatorState = {
        ...calculatorState,
        format,
      };
      calculatorState = updateResolutionConstraints(calculatorState);
      calculatorState = updateResolution(calculatorState);
      calculatorState = updateOutput(calculatorState);
      break;
    }

    case UPDATE_VICTOREM_CX_ADC_BIT_DEPTH: {
      const { adcBitDepth } = action;
      let { outputBitDepth } = calculatorState;
      const prevAdcBitDepth = calculatorState.adcBitDepth;
      if (adcBitDepth < prevAdcBitDepth && outputBitDepth > adcBitDepth) {
        outputBitDepth = adcBitDepth;
      }
      calculatorState = {
        ...calculatorState,
        adcBitDepth,
        outputBitDepth,
      };
      calculatorState = updateResolutionConstraints(calculatorState);
      calculatorState = updateResolution(calculatorState);
      calculatorState = updateOutput(calculatorState);
      break;
    }

    case UPDATE_VICTOREM_CX_OUTPUT_BIT_DEPTH: {
      const { outputBitDepth } = action;
      calculatorState = {
        ...calculatorState,
        outputBitDepth,
      };
      calculatorState = updateResolutionConstraints(calculatorState);
      calculatorState = updateResolution(calculatorState);
      calculatorState = updateOutput(calculatorState);
      break;
    }

    case UPDATE_VICTOREM_CX_RESOLUTION_PRESET: {
      const { resolutionPreset } = action;
      calculatorState = {
        ...calculatorState,
        resolutionPreset,
      };
      switch (resolutionPreset) {
        case RESOLUTION.CUSTOM:
        case RESOLUTION.MINIMUM:
        case RESOLUTION.MAXIMUM:
          break;

        default: {
          const [width, height] = RESOLUTION_VALUES[resolutionPreset];
          calculatorState = {
            ...calculatorState,
            width,
            height,
          };
        }
      }

      calculatorState = updateResolution(calculatorState);
      calculatorState = updateOutput(calculatorState);
      break;
    }

    case UPDATE_VICTOREM_CX_WIDTH: {
      const { width } = action;
      calculatorState = {
        ...calculatorState,
        width,
        resolutionPreset: RESOLUTION.CUSTOM,
      };
      calculatorState = updateResolution(calculatorState);
      calculatorState = updateOutput(calculatorState);
      break;
    }

    case UPDATE_VICTOREM_CX_HEIGHT: {
      const { height } = action;
      calculatorState = {
        ...calculatorState,
        height,
        resolutionPreset: RESOLUTION.CUSTOM,
      };
      calculatorState = updateResolution(calculatorState);
      calculatorState = updateOutput(calculatorState);
      break;
    }

    case UPDATE_VICTOREM_CX_SUBSAMPLING_BINNING: {
      const { subSamplingBinning } = action;
      const {
        model,
        linkSpeed,
        linkCount,
      } = calculatorState;
      calculatorState = {
        ...calculatorState,
        subSamplingBinning,
        resolutionPreset: RESOLUTION.MAXIMUM,
      };
      calculatorState = updateResolutionConstraints(calculatorState);
      calculatorState = updateResolution(calculatorState);
      calculatorState = updateOutput(calculatorState);
      break;
    }

    case UPDATE_VICTOREM_CX_SENSOR_DRIVE_MODE: {
      const { sensorDriveMode } = action;
      calculatorState = {
        ...calculatorState,
        sensorDriveMode,
        resolutionPreset: RESOLUTION.MAXIMUM,
      };
      const adcBitDepths = support.supportedBitDepths(calculatorState);
      const adcBitDepth = adcBitDepths[0];
      calculatorState = {
        ...calculatorState,
        adcBitDepth,
        adcBitDepths,
        resolutionPreset: RESOLUTION.MAXIMUM,
      };
      calculatorState = updateResolutionConstraints(calculatorState);
      calculatorState = updateResolution(calculatorState);
      calculatorState = updateOutput(calculatorState);
      break;
    }

    default:
      return state;
  }

  calculators[cameraId] = calculatorState;
  return calculators;
};

export default victoremCXReducer;
