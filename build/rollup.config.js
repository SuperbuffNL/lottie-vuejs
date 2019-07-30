import commonjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import pkg from '../package.json';

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    external: ['axios', 'lottie-web'],
    output: [
        { file: pkg.main,   format: 'umd',  exports: 'named', name: 'LottieAnimation', globals: { 'lottie-web':'lottie-web', 'axios':'axios'} },
        { file: pkg.module, format: 'es',   exports: 'named', name: 'LottieAnimation', globals: { 'lottie-web':'lottie-web', 'axios':'axios'} },
        { file: pkg.unpkg,  format: 'iife', exports: 'named', name: 'LottieAnimation', globals: { 'lottie-web':'lottie-web', 'axios':'axios'} }
    ],
    plugins: [
        commonjs(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble({ transforms: { asyncAwait: false } }), // Transpile to ES5
    ],
};