const babel = require('@rollup/plugin-babel').default;
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve').default;
const replace = require('@rollup/plugin-replace');
const { uglify } = require('@blaumaus/rollup-plugin-uglify');

const config = (isProd) => ({
  input: 'src/index.js',
  output: {
    file:
      isProd
        ? 'dist/react-leaflet.min.js'
        : 'dist/react-leaflet.js',
    format: 'umd',
    globals: {
      leaflet: 'L',
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    name: 'ReactLeaflet',
  },
  external: ['leaflet', 'react', 'react-dom'],
  plugins: [
    nodeResolve(),
    babel({
      exclude: '**/node_modules/**',
      babelHelpers: 'runtime'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    }),
    commonjs(),
    isProd ? uglify({
      compress: {
        dead_code: true,
      },
    }) : null,
  ],
});

module.exports = [false, true].map(config);
