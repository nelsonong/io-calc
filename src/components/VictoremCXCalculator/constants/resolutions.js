import { MODEL } from './models';

export const RESOLUTION = {
  MAXIMUM: 'Maximum',
  R_4K: '4K (4096x2160)',
  UHD: 'UHD (3840x2160)',
  R_2K: '2K (2048x1080)',
  FHD: '1080p (1920x1080)',
  HD: '720p (1280x720)',
  VGA: 'VGA (640x480)',
  MINIMUM: 'Minimum',
  CUSTOM: 'Custom',
};

export const RESOLUTION_VALUES = {
  [RESOLUTION.MAXIMUM]: 'Maximum',
  [RESOLUTION.R_4K]: [4096, 2160],
  [RESOLUTION.UHD]: [3840, 2160],
  [RESOLUTION.R_2K]: [2048, 1080],
  [RESOLUTION.FHD]: [1920, 1080],
  [RESOLUTION.HD]: [1280, 720],
  [RESOLUTION.VGA]: [640, 480],
  [RESOLUTION.MINIMUM]: 'Minimum',
  [RESOLUTION.CUSTOM]: 'Custom',
};

export const RESOLUTIONS = Object.values(RESOLUTION);

export const NAN_RESOLUTIONS = [
  RESOLUTION.MINIMUM,
  RESOLUTION.MAXIMUM,
  RESOLUTION.CUSTOM,
];

export const MAX_RESOLUTIONS = {
  [MODEL.Type51B163MCX]: [2464, 2056],
  [MODEL.Type51B163CCX]: [2464, 2056],
  [MODEL.Type32B216MCX]: [2064, 1544],
  [MODEL.Type32B216CCX]: [2064, 1544],
  [MODEL.Type120B68MCX]: [4112, 3008],
  [MODEL.Type120B68CCX]: [4112, 3008],
  [MODEL.Type89B93MCX]: [4112, 2176],
  [MODEL.Type89B93CCX]: [4112, 4112],
  [MODEL.Type16B276MCX]: [1456, 1088],
  [MODEL.Type16B276CCX]: [1456, 1088],
  [MODEL.Type4B523MCX]: [728, 544],
  [MODEL.Type4B523CCX]: [728, 544],
  [MODEL.Type205R26MCX]: [5472, 3672],
  [MODEL.Type205R26CCX]: [5472, 3672],
  [MODEL.Type262G41MCX]: [5120, 5120],
  [MODEL.Type262G41CCX]: [5120, 5120],
};

export const RESOLUTION_PRESETS = {
  [MODEL.Type51B163MCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type51B163CCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type32B216MCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type32B216CCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type120B68MCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_4K,
    RESOLUTION.UHD,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type120B68CCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_4K,
    RESOLUTION.UHD,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type89B93MCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_4K,
    RESOLUTION.UHD,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type89B93CCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_4K,
    RESOLUTION.UHD,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type16B276MCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type16B276CCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type4B523MCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type4B523CCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type205R26MCX]: [
    RESOLUTION.MAXIMUM,
  ],
  [MODEL.Type205R26CCX]: [
    RESOLUTION.MAXIMUM,
  ],
  [MODEL.Type24A164MCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type24A164CCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type262G41MCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_4K,
    RESOLUTION.UHD,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type262G41CCX]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_4K,
    RESOLUTION.UHD,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
};
