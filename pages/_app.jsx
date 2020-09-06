import React from 'react';
import App from 'next/app';
import Layout from '../src/container/layout/Layout';
import '../src/style/globals.less';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const getLayout = Component.getLayout || ((Com, p) => <Layout><Com {...p} /></Layout>);
    return getLayout(Component, pageProps);
  }
}

export default MyApp;
