import React from 'react'
import App from 'next/app'
import store from "../store/store"
import { Provider } from "mobx-react"
import "../styles/styles.css"

class MyApp extends App {
  // Custom _app.js used to wrap my whole application in the MobX <Provider>
  
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
  }
}

export default MyApp