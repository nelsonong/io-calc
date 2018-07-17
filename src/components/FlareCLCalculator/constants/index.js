import { MODEL, MODELS, COLOR_MODELS } from './models';
import { FORMAT, DUAL_FORMATS, FORMATS, SLOW_MODE_FORMATS } from './formats';
import { RESOLUTION, RESOLUTIONS, NAN_RESOLUTIONS } from './resolutions';
import { MODE } from './modes';

export const flareCLDefaultState = {
	cameraType: 'flare-cl',					// Camera type
	model: MODEL.Type2M360MCL,              // Camera model
	hwversion: 1,                           // Hardware version
	format: FORMAT.Output2x8,               // Link format (Camera Link)
	formats: FORMATS.CL2_4m,                // Current formats (changes based on model)
	resolutionPreset: RESOLUTION.MAXIMUM,   // Resolution preset
	width: 2048,                            // Resolution - width
	widthStep: 8,                           // Acceptable width multiple
	height: 1088,                           // Resolution - height
	heightStep: 2,                          // Acceptable height multiple
	resolutionTooltip: '',                  // Warning if incorrect resolution multiple
	subSampling: false,                     // Sub-sampling enabled
	slowMode: false,                        // Slow-mode enabled
	frameRate: 70.95,                       // Maximum frame-rate
	dataRate: 150.77,                       // Data-rate (in MB/s)
	error: false,                           // Error occured with an input
	mode: false      			            // Mode (Base or Full if in DVR calculator)
};

export {
	MODEL,
	MODELS,
	COLOR_MODELS,
	FORMAT,
	DUAL_FORMATS,
	FORMATS,
	SLOW_MODE_FORMATS,
	RESOLUTION,
	RESOLUTIONS,
	NAN_RESOLUTIONS,
	MODE
};