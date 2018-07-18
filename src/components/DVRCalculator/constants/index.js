
import { MODEL, MODELS } from './models';
import { CONFIG, CL_CONFIGS, CLPLUS_CONFIGS, CX_CONFIGS, CXPLUS_CONFIGS, SDI_CONFIGS } from './configurations';
import { DRIVES, DRIVE_CAPACITY } from './drives';
import { LINK } from './links';
import { MODE, MODES } from './modes';

export const dvrDefaultState = {
    model: MODEL.CORE2CL,
    link: LINK.CL,
    configuration: CONFIG.CL.BASEx4,
    configurations: CL_CONFIGS,
    cameras: new Map(),
    cameraContainers: [],
    dataRates: [],
    totalDataRate: 0,
    raid: 0,
    driveCapacity: 223.6,
    driveAmount: 1,
    driveAmounts: [ 1, 2, 3, 4, 5, 6 ],
    totalCapacity: 223.6,
    recordingTime: 'N/A'
};

export {
    MODEL,
    MODELS,
    CONFIG,
    CL_CONFIGS,
    CLPLUS_CONFIGS,
    CX_CONFIGS,
    CXPLUS_CONFIGS,
    SDI_CONFIGS,
    DRIVES,
    DRIVE_CAPACITY,
    LINK,
    MODE,
    MODES
};