const webpack = require("webpack");

const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const withOptimizedImages = require('next-optimized-images');
const withSourceMaps = require('@zeit/next-source-maps');

dotenvLoad();
const withNextEnv = nextEnv({
        staticPrefix: 'CUSTOM_STATIC_',
    }
);

module.exports = withPlugins([[withTypescript],
        [withSass({
            webpack: function (config) {
                config.module.rules.push(
                    {
                        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                        use: {
                            loader: 'url-loader',
                            options: {
                                limit: 100000,
                                name: '[name].[ext]'
                            }
                        }
                    }
                );
                return config;
            }
        })],
        [withNextEnv],
    [withOptimizedImages, {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        svgo: {
            // enable/disable svgo plugins here
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    }]
    ]
);

