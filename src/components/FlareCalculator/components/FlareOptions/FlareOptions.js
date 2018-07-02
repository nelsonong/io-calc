import React, { Component } from 'react';
import { FLARE_LINK, FLARE_SLOW_MODE_FORMATS } from '../../constants';
import './FlareOptions.css';

class FlareOptions extends Component {
    subSamplingDisabled = () => {
        const currentModel = this.props.model;
        return (currentModel.startsWith('12M') || currentModel.startsWith('48M'));
    }

    slowModeDisabled = () => {
        const link = this.props.link;
        const model = this.props.model;
        const format = this.props.format;

        return (link !== FLARE_LINK.CL || model.startsWith('12M') || !FLARE_SLOW_MODE_FORMATS.includes(format));
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const checked = e.target.checked;

        this.props.updateState({ [name]: checked });
    }

    render = () => {
        return (
            <fieldset>
            <legend>Options</legend>
                <input type="checkbox" name='subSampling' disabled={this.subSamplingDisabled()} onChange={this.handleInputChange}/>
                <div className='options-label'>Enable sub-sampling</div>
                <br />
                <input type="checkbox" name='slowMode' disabled={this.slowModeDisabled()} onChange={this.handleInputChange}/>
                <div className='options-label'>Enabled reduced line rate mode</div>
            </fieldset>
        );
    }
}

export default FlareOptions;