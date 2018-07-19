import React from 'react';
import { connect } from 'react-redux';
import styles from './CustomCXOutput.css';

const CustomCXOutput = ({
    frameRate,
    dataRate,
    error
}) => {
    const outputText = error ? 'N/A' : `${frameRate} FPS / ${dataRate} MB/s`;
    return (
        <fieldset className={styles.root}>
        <legend className={styles.legend}>Output</legend>
            <input type='text' className={styles.input} disabled={true} value={outputText} />
        </fieldset>
    );
};

const mapStateToProps = (state, { id, dvrId }) => {
    const calculatorState = (dvrId !== undefined) ?
        state.storageCalculators.get(dvrId).cameras.get(id) :
        state.frameRateCalculators.get(id);
    const {
        frameRate,
        dataRate,
        error
    } = calculatorState;
    
    return {
        frameRate,
        dataRate,
        error
    };
};

export default connect(mapStateToProps)(CustomCXOutput);