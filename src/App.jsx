import React, { Component } from 'react';

import styles from './App.css.json';

export class App extends Component {
  render() {
    console.log(styles)
    return (
      <div className={styles.container}>App</div>
    )
  }
}
