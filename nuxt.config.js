const webpack = require('webpack');
const path = require('path');
const BDSCoreDir = {
  root: '../../bds',
  resources: '../../bds/resources/assets',
};
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'exciting.starbucks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Exciting Starbucks Web App' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://cdn.bds.mycelebs.com/exciting_starbucks/connect.js',
        body: true,
      },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
      }),
    ],
    /*
    ** Run ESLint on save
    */

    /* 주석 */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
