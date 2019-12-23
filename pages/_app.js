import React from 'react'
import App from 'next/app'
import store from "../store/store"
import { Provider } from "mobx-react"
import "../styles/styles.css"

class MyApp extends App {
  // The following _app.js overrides NextJS default _app.js
  // The overwrite is used to provide the store to the whole application
  
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