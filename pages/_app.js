import React from 'react'
import App from 'next/app'
import store from "../store/store"
import { Provider } from "mobx-react"

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  
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