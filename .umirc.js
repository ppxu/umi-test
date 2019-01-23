const path = require('path');

export default {
  plugins: [
    ['umi-plugin-react', {
      dva: true,
      antd: true,
      dynamicImport: true,
    }]
  ],
  history: 'hash',
  outputPath: './dist',
  base: '/',
  publicPath: '/',
  minimizer: 'terserjs',
  hash: true,
  theme: './src/theme.ts',
};
