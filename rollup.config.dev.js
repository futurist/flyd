import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './lib/index.js',
  output: [{
    file: './flyd.js',
    name: 'flyd',
    format: 'umd'
  }, {
    file: './flyd.es.js',
    format: 'es'
  }],
  plugins: [
    resolve(),
    commonjs()
  ]
};