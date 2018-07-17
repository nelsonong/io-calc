import React from 'react';
import styles from './VictoremOutput.css';

const VictoremOutput = ({ frameRate, dataRate, error }) => {
    const outputText = error ? 'N/A' : `${frameRate} FPS / ${dataRate} MB/s`;
    return (
        <fieldset className={styles.root}>
        <legend className={styles.legend}>Output</legend>
            <input type='text' className={styles.input} disabled={true} value={outputText} />
        </fieldset>
    );
}

export default VictoremOutput;