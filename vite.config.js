// @ts-check
const reactPlugin = require('vite-plugin-react');

const path = require('path');

const srcPath = path.resolve(__dirname, './src');

function _resolve(track) {
  return path.join(__dirname, track);
}

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  // alias: {
  //   exenv: 'exenv-esm',
  //   'prop-types': 'es-react/prop-types.js'
  // },
  // alias: {
  //   'react-dom': '@hot-loader/react-dom',
  //   '/@/': _resolve('./src'),
  //   '/@components/': _resolve('./src/components'),
  //   '/@styles/': _resolve('./src/styles'),
  //   '/@utils/': _resolve('./src/utils'),
  //   '/@views/': _resolve('./src/views'),
  //   '/@constants/': _resolve('./src/constants'),
  //   '/@config/': _resolve('./src/config'),
  //   '/@store/': _resolve('./src/store'),
  //   '/@api/': _resolve('./src/api'),
  //   '/@assets/': _resolve('./src/assets'),
  //   '/@models/': _resolve('./src/models')
  // },
  // resolvers: [
  //   {
  //     requestToFile: publicPath => {
  //       if (publicPath.match(/^\/@\//)) {
  //         return path.join(srcPath, publicPath.replace(/^\/@\//, ''));
  //       }
  //     },
  //     fileToRequest: filePath => {
  //       if (filePath.startsWith('/src')) {
  //         return `/@/${path.relative(srcPath, filePath)}`;
  //       }
  //     }
  //   }
  // ],
  root: './src',
  plugins: [reactPlugin],
  optimizeDeps: {
    allowNodeBuiltins: [
      'antd-theme-webpack-plugin',
      'vite-react',
      'less',
      'antd-theme-generator',
      'upath',
      'graceful-fs',
      'glob',
      'image-size',
      'mime',
      'native-request',
      'fs.realpath',
      'minimatch',
      'postcss',
      'less-plugin-npm-import',
      'resolve'
    ],
    include: ['lodash']
  }
};

module.exports = config;
