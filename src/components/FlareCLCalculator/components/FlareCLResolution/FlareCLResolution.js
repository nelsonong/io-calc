import React from 'react';
import { NAN_RESOLUTIONS, RESOLUTIONS } from '../../constants';
import './FlareCLResolution.css';

const FlareCLResolution = ({
    resolutionPreset,
    width,
    height,
    handleChangePreset,
    handleChangeResolution
}) => {
    const resolutionPresetOptions = RESOLUTIONS.map((preset, i) => {
        if (!NAN_RESOLUTIONS.includes(preset)) {
            preset = `${preset[0]}x${preset[1]}`;
        }
        return <option key={i} value={preset}>{preset}</option>;
    });
    return (
        <fieldset>
        <legend>Resolution</legend>
            <div className='resolution-labels'>
                <div className='resolution-label'>Presets:</div>
                <div className='resolution-label'>W x H:</div>
            </div>
            <div className='resolution-controls'>
                <select className='resolution-presets' value={resolutionPreset} onChange={handleChangePreset}>
                    {resolutionPresetOptions}
                </select>
                <br />
                <input type="number" className='resolution-wxh' name='width' value={width} onChange={handleChangeResolution} />
                <input type="number" className='resolution-wxh' name='height' value={height} onChange={handleChangeResolution} />
            </div>
        </fieldset>
    );
};

export default FlareCLResolution;