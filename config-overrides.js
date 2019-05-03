const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const red = '#aa1d23';
const navy = '#190b48';
const silver = '#E8E6EC';

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@red-6': red,
      '@blue-6': navy,
      '@primary-color': '@blue-6',
      '@processing-color': '@primary-color',
      '@link-color': '@red-6'
    },
  }),
);