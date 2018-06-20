import React, { Component } from 'react';
import { cxFormats, clFormats } from './Constants';

class Format extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentModel: '2M360MCL/NCL',
            clFormat: clFormats.cl_2_4m,
            cxFormat: cxFormats.cx_2_4m
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // -------------- Change Handlers --------------
    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        this.props.updateState({ [name]: value });
    }

    // -------------- Render UI --------------
    renderTitle() {
        return this.props.link === 'cl' ? 'Camera Link Format' : 'CoaXPress Format';
    }

    renderFormats() {
        // If model has changed, reload formats
        if (this.props.model !== this.state.currentModel) {
            this.setState({ currentModel: this.props.model });
            if (this.props.link === 'cl') {
                this.reloadCLFormats();
            } else {
                this.reloadCXFormats();
            }
        }

        if (this.props.link === 'cl') {
            return (
                <select name='format' onChange={this.handleInputChange}>
                    {this.renderCLFormats()}
                </select>
            );
        } else if (this.props.link === 'cx') {
            return (
                <div>
                    Bit Depth&nbsp;&nbsp;&nbsp;
                    <select name='bitDepth' onChange={this.handleInputChange}>
                        {this.renderCXBitDepths()}
                    </select>
                    <br />
                    Link Count&nbsp;
                    <select name='linkCount' onChange={this.handleInputChange}>
                        {this.renderCXLinkCounts()}
                    </select>&nbsp;&nbsp;
                    Link Speed&nbsp;
                    <select name='linkSpeed' onChange={this.handleInputChange}>
                        {this.renderCXLinkSpeeds()}
                    </select>
                </div>
            );
        }
    }

    // -------------- CL Format Controls --------------
    reloadCLFormats() {
        if (this.props.model.startsWith('12M')) {
            this.setState({ clFormat: clFormats.cl_12m });
        } else {
            this.setState({ clFormat: clFormats.cl_2_4m });
        }
    }

    renderCLFormats() {
        return this.state.clFormat.formats.map((format, i) => {
            return <option key={i}>{format}</option>;
        });
    }

    // -------------- CX Format Controls --------------
    reloadCXFormats() {
        if (this.props.model.startsWith('48M')) {
            this.setState({ cxFormat: cxFormats.cx_48m });
        } else if (this.props.model.startsWith('12M')) {
            this.setState({ cxFormat: cxFormats.cx_12m });
        } else {
            this.setState({ cxFormat: cxFormats.cx_2_4m });
        }
    }

    renderCXBitDepths() {
        return this.state.cxFormat.bitDepths.map((bitDepth, i) => {
            return <option key={i}>{bitDepth}</option>;
        });
    }

    renderCXLinkCounts() {
        return this.state.cxFormat.linkCounts.map((linkCount, i) => {
            return <option key={i}>{linkCount}</option>;
        });
    }

    renderCXLinkSpeeds() {
        return this.state.cxFormat.linkSpeeds.map((linkSpeed, i) => {
            return <option key={i}>{linkSpeed}</option>;
        });
    }

    render() {
        return (
            <fieldset>
            <legend>{this.renderTitle()}</legend>
                {this.renderFormats()}
            </fieldset>
        );
    }
}

export default Format;