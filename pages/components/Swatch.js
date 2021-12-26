import React from 'react';
import PropTypes from 'prop-types';
import styles from './Swatch.module.css'

const Swatch = ({ color }) => {
    return (
        <div className={styles.swatch} style={{ backgroundColor: color }} />
    )
}

Swatch.propTypes = {
    color: PropTypes.string.isRequired,
}
export default Swatch;