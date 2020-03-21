import node from 'rollup-plugin-node-resolve';

export default [{
    input: 'tmp-js/index-plus.js',
    plugins: [
        node({
            jsnext: true
        })
    ],
    output: {
      file: 'dist/rup-plus.js',
      format: 'cjs'
    }
  }, {
    input: 'tmp-js/index-minus.js',
    output: [
      {
        file: 'dist/rup-minus.js',
        format: 'es'
      }
    ],
    plugins: [
        node({
            jsnext: true
        })
    ]
  }];