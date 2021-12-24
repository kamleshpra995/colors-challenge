import React from 'react';
import styles from './Swatch.module.css'

export default ({ color }) => {
    return (
        <div className={styles.swatch} style={{ backgroundColor: color }} />
    )
}