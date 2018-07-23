import { FORMATS, RESOLUTION, MODE } from '../components/FlareCLCalculator/constants';
import * as resolution from '../components/FlareCLCalculator/utils/resolution';
import { calculateFrameRate } from '../components/FlareCLCalculator/utils/calculateFrameRate';
import { calculateDataRate } from '../components/FlareCLCalculator/utils/calculateDataRate';
import {
    INITIALIZE_FLARE_CL_DVR_STATE,
    UPDATE_FLARE_CL_MODEL,
    UPDATE_FLARE_CL_FORMAT,
    UPDATE_FLARE_CL_RESOLUTION_PRESET,
    UPDATE_FLARE_CL_WIDTH,
    UPDATE_FLARE_CL_HEIGHT,
    UPDATE_FLARE_CL_SUB_SAMPLING,
    UPDATE_FLARE_CL_SLOW_MODE
} from '../actions/flareCLActions';

const flareCLReducer = (state = { order: [] }, action) => {
    const {
        cameraId,
        type
    } = action;

    let calculators = { ...state };
    let calculatorState = calculators[cameraId];

    switch (type) {
        case INITIALIZE_FLARE_CL_DVR_STATE: {
            const {
                model,
                mode
            } = calculatorState;
            
            let formats = model.startsWith('12M') ? FORMATS.CL12m : FORMATS.CL2_4m;
            if (!!mode) {
                formats = filterFormats(formats, mode);
            }
    
            calculatorState = {
                ...calculatorState,
                formats
            };
            calculatorState = updateResolutionConstraints(calculatorState);
            calculatorState = updateOutput(calculatorState);
            break;
        }

        case UPDATE_FLARE_CL_MODEL:
            const { model } = action;

            // Get hardware version
            const isVersion2 = model.startsWith('12M');
            const hwversion = isVersion2 ? 2 : 1;

            // Get formats
            let formats = model.startsWith('12M') ? FORMATS.CL12m : FORMATS.CL2_4m;
            const { mode } = calculatorState;
            formats = !!mode ? filterFormats(formats, mode) : formats;

            calculatorState = {
                ...calculatorState,
                model,
                hwversion,
                formats
            };
            calculatorState = updateResolutionConstraints(calculatorState);
            calculatorState = updateOutput(calculatorState);
            break;

        case UPDATE_FLARE_CL_FORMAT:
            const { format } = action;

            calculatorState = {
                ...calculatorState,
                format
            };
            calculatorState = updateResolutionConstraints(calculatorState);
            calculatorState = updateOutput(calculatorState);
            break;

        case UPDATE_FLARE_CL_RESOLUTION_PRESET: {
            const { resolutionPreset } = action;

            calculatorState = {
                ...calculatorState,
                resolutionPreset
            };
            
            switch (resolutionPreset) {
                case RESOLUTION.CUSTOM:
                case RESOLUTION.MINIMUM:
                case RESOLUTION.MAXIMUM:
                    break;

                default:
                    const [ width, height ] = resolutionPreset.split('x');
                    calculatorState = {
                        ...calculatorState,
                        width: Number(width),
                        height: Number(height)
                    };
            }

            calculatorState = updateResolution(calculatorState);
            calculatorState = updateOutput(calculatorState);
            break;
        }

        case UPDATE_FLARE_CL_WIDTH: {
            const { width } = action;

            calculatorState = {
                ...calculatorState,
                width,
                resolutionPreset: RESOLUTION.CUSTOM
            };
            calculatorState = updateResolution(calculatorState);
            calculatorState = updateOutput(calculatorState);
            break;
        }
        
        case UPDATE_FLARE_CL_HEIGHT: {
            const { height } = action;

            calculatorState = {
                ...calculatorState,
                height,
                resolutionPreset: RESOLUTION.CUSTOM
            };
            calculatorState = updateResolution(calculatorState);
            calculatorState = updateOutput(calculatorState);
            break;
        }

        case UPDATE_FLARE_CL_SUB_SAMPLING:
            const { subSampling } = action;

            calculatorState = {
                ...calculatorState,
                subSampling
            };
            calculatorState = updateResolutionConstraints(calculatorState);
            calculatorState = updateOutput(calculatorState);
            break;

        case UPDATE_FLARE_CL_SLOW_MODE:
            const { slowMode } = action;

            calculatorState = {
                ...calculatorState,
                slowMode
            };
            calculatorState = updateResolutionConstraints(calculatorState);
            calculatorState = updateOutput(calculatorState);
            break;
            
        default:
            return state;
    }
    
    calculators[cameraId] = calculatorState;
    return calculators;
};

// Validate and set resolution
const updateResolution = (calculatorState) => {
    const {
        maxWidth,
        maxHeight,
        widthStep,
        heightStep,
        resolutionPreset
    } = calculatorState;

    // If min/max preset, update values
    switch (resolutionPreset) {
        case RESOLUTION.MINIMUM:
            calculatorState = {
                ...calculatorState,
                width: minWidth,
                height: minHeight
            };
            break;

        case RESOLUTION.MAXIMUM:
            calculatorState = {
                ...calculatorState,
                width: maxWidth,
                height: maxHeight
            };
            break;
    }

    // Validate input
    const {
        width,
        height
    } = calculatorState;

    let resolutionTooltip = '';

    if (width > maxWidth)
        resolutionTooltip = `Maximum width is ${maxWidth}px.`;

    if (height > maxHeight)
        resolutionTooltip = `Maximum height is ${maxHeight}px.`;

    if ((width % widthStep) !== 0)
        resolutionTooltip = `Width must be a multiple of ${widthStep}.`;

    if ((height % heightStep) !== 0)
        resolutionTooltip = `Height must be a multiple of ${heightStep}.`;

    const error = resolutionTooltip !== '';
    
    return {
        ...calculatorState,
        width,
        height,
        resolutionTooltip,
        error
    };
}

// Update resolution properties
const updateResolutionConstraints = (calculatorState) => {
    const {
        model,
        format
    } = calculatorState;

    // Calculate updated resolution values
    const minWidth = resolution.calculateMinWidth(model, format);
    const maxWidth = resolution.calculateMaxWidth(model, format);
    const widthStep = resolution.calculateWidthStep(format);
    const minHeight = resolution.calculateMinHeight(model, format);
    const maxHeight = resolution.calculateMaxHeight(model);
    const heightStep = resolution.calculateHeightStep(model);

    return {
        ...calculatorState,
        minWidth,
        maxWidth,
        widthStep,
        minHeight,
        maxHeight,
        heightStep
    };
};

// Update output
const updateOutput = (calculatorState) => {
    const frameRate = calculateFrameRate(calculatorState);
    const dataRate = calculateDataRate({
        ...calculatorState,
        frameRate
    });

    return {
        ...calculatorState,
        frameRate,
        dataRate
    };
};

const filterFormats = (formats, mode) => {
    switch (mode) {
        case MODE.BASE:
            return formats.filter(clFormat => clFormat.startsWith('Base'));
        case MODE.FULL:
            return formats.filter(clFormat => !clFormat.startsWith('Base'));
        case MODE.DUAL_FULL:
            return formats.filter(clFormat => (clFormat.startsWith('80') || clFormat.startsWith('Dual')));
        default:
            throw new Error('Mode not found.');
    }
}

export default flareCLReducer;