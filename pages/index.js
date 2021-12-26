import React, { useState, useEffect } from 'react';
import Swatch from './components/Swatch';
import colorParsers from '../common/color-parsers';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [colors, setColors] = useState();

  // fetch colors from api
  const fetchColors = () => {
    fetch(`./api/colors`).then((res) => {
      res.json().then((data) => {
        setColors(data);
      })
    }).catch((err) => console.log(err))
  }

  // fetch initially
  useEffect(() => {
    fetchColors();
  }, [])

  // generate new colors on button click
  const handler = () => {
    fetchColors();
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <h3>Colors Generator</h3>
      </div>
      <main className={styles.main}>
        {colors && colors.map(({ type, values }, index) => {
          const parser = colorParsers[type];
          return <Swatch key={`color_${index}`} color={parser(values)} />
        })}
      </main>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handler}>Generate</button>
      </div>
    </div>
  )
}
