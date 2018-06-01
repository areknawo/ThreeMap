module.exports = {
    input: './src/index.ts',
    outDir: './build',
    banner: {
        version: '0.0.1 Alpha',
        name: 'Three-Map',
        year: '2018',
        author: 'Areknawo',
        license: 'Mit'
    },
    name: 'ThreeMap',
    moduleName: 'ThreeMap',
    globals: {
        "three": "THREE"
    },
    plugins: [
        require('rollup-plugin-bundle-worker')()
    ],
    uglify: {
        compress: {
            comparisons: false
        }
    },
    format: 'umd-min'
};