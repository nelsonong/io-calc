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
  [MODEL.Type24A164MV]: [1920, 1216],
  [MODEL.Type24A164CV]: [1920, 1216],
  [MODEL.Type205R26MV]: [5376, 3648],
  [MODEL.Type205R26CV]: [5376, 3648],
  [MODEL.Type51B163MV]: [2432, 2056],
  [MODEL.Type51B163CV]: [2432, 2056],
  [MODEL.Type32B216MV]: [2048, 1536],
  [MODEL.Type32B216CV]: [2048, 1536],
  [MODEL.Type32B55CV]: [2048, 1536],
  [MODEL.Type120B68MV]: [4096, 3008],
  [MODEL.Type120B68CV]: [4096, 3008],
  [MODEL.Type89B93MV]: [4096, 2176],
  [MODEL.Type89B93CV]: [4096, 2176],
  [MODEL.Type89B64CV]: [4096, 2176],
  [MODEL.Type16B276MV]: [1456, 1088],
  [MODEL.Type16B276CV]: [1456, 1088],
  [MODEL.Type245D60MV]: [5312, 4608],
  [MODEL.Type245D60CV]: [5312, 4608],
  [MODEL.Type262G41MV]: [5120, 5120],
  [MODEL.Type262G41CV]: [5120, 5120],
  [MODEL.Type90G120MV]: [4224, 2160],
  [MODEL.Type90G120CV]: [4224, 2160],
};

export const RESOLUTION_PRESETS = {
  [MODEL.Type24A164MV]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type24A164CV]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type205R26MV]: [
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
  [MODEL.Type205R26CV]: [
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
  [MODEL.Type51B163MV]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type51B163CV]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type32B216MV]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type32B216CV]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type32B55CV]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.R_2K,
    RESOLUTION.FHD,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type120B68MV]: [
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
  [MODEL.Type120B68CV]: [
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
  [MODEL.Type89B93MV]: [
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
  [MODEL.Type89B93CV]: [
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
  [MODEL.Type89B64CV]: [
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
  [MODEL.Type16B276MV]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type16B276CV]: [
    RESOLUTION.MAXIMUM,
    RESOLUTION.HD,
    RESOLUTION.VGA,
    RESOLUTION.MINIMUM,
    RESOLUTION.CUSTOM,
  ],
  [MODEL.Type245D60MV]: [
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
  [MODEL.Type245D60CV]: [
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
  [MODEL.Type262G41MV]: [
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
  [MODEL.Type262G41CV]: [
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
  [MODEL.Type90G120MV]: [
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
  [MODEL.Type90G120CV]: [
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
