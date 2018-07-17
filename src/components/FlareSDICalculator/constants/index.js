export { MODEL, MODELS, COLOR_MODELS } from './models';
export { INTERFACE } from './interfaces';
export { LINK, LINKS } from './links';
export { RESOLUTION } from './resolutions';
export { COLOR } from './colors';
export { MODE } from './modes';
export { SDI_TREE } from './sdi-tree';

export const sdiDefaultState = {
	cameraType: 'flare-sdi',
    model: '',
    models: [],
    link: '',
    links: [],
    sdiInterface: '',
    sdiInterfaces: [],
    width: 0,
    height: 0,
    resolution: '',
    resolutions: [],
    color: '',
    colors: [],
    frameRate: '',
    frameRates: [],
    dataRate: 0,
    mode: false,
    inDVR: false
};