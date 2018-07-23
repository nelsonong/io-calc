import React from 'react';
import { connect } from 'react-redux';
import { deleteCalculator } from '../../actions/managementActions';
import { MdClear } from 'react-icons/lib/md';
import cx from 'classnames';
import styles from './CalculatorTopBar.css';

const CalculatorTopBar = ({
    type,
    inDVR,
    storage,
    handleDelete
}) => {
    const text = (!inDVR || storage) ? `${type} Calculator` : `${type} Camera`;
    const closeButton = cx(styles.closeButton, {
        [styles.storageCloseButton]: storage
    });
    const button = (!inDVR || storage) ? (
        <button type='button' className={closeButton} onClick={handleDelete}>
            ✖
        </button>
    ) : '';

    const root = cx(styles.root, {
        [styles.storageRoot]: storage
    });
    return (
        <div>
            <div className={root}>{text}</div>
            {button}
        </div>
    );
};

const mapStateToProps = (state, {
    type,
    dvrId,
    storage
}) => ({
    type,
    inDVR: !!dvrId,
    storage: !!storage
});

const mapDispatchToProps = (dispatch, {
    cameraId,
    dvrId,
    storage
}) => ({
    handleDelete: () => {
        if (!!dvrId) {
            dispatch(deleteCalculator(dvrId, !!storage))
        } else {
            dispatch(deleteCalculator(cameraId, !!storage))
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorTopBar);