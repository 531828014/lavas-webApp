/**
 * @file .postcssrc.js
 * @author *__ author __*{% if: *__ email __* %}(*__ email __*){% /if %}
 */

// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: {
        // to edit target browsers: use "browserslist" field in package.json
        'autoprefixer': {}
    },
    module: {
        rules: [
          {
            test: /\.sass$/,
            use: [
            { loader: 'style-loader' },
            {
                loader: 'css-loader',
                options: {
                modules: true
                }
            },
            {loaders: ['sass-loader']}
            ]
          }
        ]
    },
};
