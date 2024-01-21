import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    plugins: [
        babel({
            include: ['src/**/*.js'],
			babelHelpers: 'bundled',
        }),
        commonjs(),
        resolve(),
        uglify(),
    ],
    output: {
        name: 'jpeg-quality-estimator',
        sourcemap: 'inline',
        file: 'dist/jpeg-quality-estimator.js',
        format: 'umd',
    },
};