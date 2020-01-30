export const MODEL = {
  Type24A164MV: '24A164MV',
  Type24A164CV: '24A164CV',
  Type32B55CV: '32B55CV',
  Type32B216MV: '32B216MV',
  Type32B216CV: '32B216CV',
  Type51B163MV: '51B163MV',
  Type51B163CV: '51B163CV',
  Type89B64CV: '89B64CV',
  Type89B93MV: '89B93MV',
  Type89B93CV: '89B93CV',
  Type120B68MV: '120B68MV',
  Type120B68CV: '120B68CV',
  Type205R26MV: '205R26MV',
  Type205R26CV: '205R26CV',
  // Type262G41MV: '262G41MV',
  // Type262G41CV: '262G41CV',
};

export const MODELS = {
  ALL: Object.values(MODEL),
  TYPE_174: [
    MODEL.Type24A164MV,
    MODEL.Type24A164CV,
  ],
  TYPE_265: [
    MODEL.Type32B55CV,
  ],
  TYPE_252: [
    MODEL.Type32B216MV,
    MODEL.Type32B216CV,
  ],
  TYPE_250: [
    MODEL.Type51B163MV,
    MODEL.Type51B163CV,
  ],
  TYPE_305: [
    MODEL.Type89B64CV,
  ],
  TYPE_255: [
    MODEL.Type89B93MV,
    MODEL.Type89B93CV,
  ],
  TYPE_253: [
    MODEL.Type120B68MV,
    MODEL.Type120B68CV,
  ],
  TYPE_505: [
    MODEL.Type262G41MV,
    MODEL.Type262G41CV,
  ],
  TYPE_183: [
    MODEL.Type205R26MV,
    MODEL.Type205R26CV,
  ],
  TYPE_MONO: [
    MODEL.Type24A164MV,
    MODEL.Type32B216MV,
    MODEL.Type51B163MV,
    MODEL.Type89B93MV,
    MODEL.Type120B68MV,
    MODEL.Type262G41MV,
    MODEL.Type205R26MCX,
  ],
  TYPE_COLOR: [
    MODEL.Type24A164CV,
    MODEL.Type32B55CV,
    MODEL.Type32B216CV,
    MODEL.Type51B163CV,
    MODEL.Type89B64CV,
    MODEL.Type89B93CV,
    MODEL.Type120B68CV,
    MODEL.Type262G41CV,
    MODEL.Type205R26CCX,
  ],
};
