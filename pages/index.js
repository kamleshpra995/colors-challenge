import React, { useState, useEffect } from 'react';
import Swatch from './front-end/components/Swatch';
import colorParsers from './front-end/color-parsers';
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
      <main className={styles.main}>
        {colors && colors.map(({ type, values }) => {
          const parser = colorParsers[type];
          return <Swatch color={parser(values)} />
        })}
      </main>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handler}>Generate</button>
      </div>
    </div>
  )
}
