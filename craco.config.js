const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#c50000',
              '@body-background': '#141414',
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};