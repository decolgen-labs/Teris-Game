/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: { emotion: true },
    reactStrictMode: true,
    webpack(config) {
        config.externals.push({
            'utf-8-validate': 'commonjs utf-8-validate',
            'bufferutil': 'commonjs bufferutil',
        })
            ,
            config.module.rules.push(
                {
                    test: /\.svg$/i,
                    use: [
                        {
                            loader: "babel-loader",
                        },
                        {
                            loader: "react-svg-loader",
                            options: {
                                jsx: false, // true outputs JSX tags
                                svgo: {
                                    plugins: [
                                        { removeViewBox: false },
                                    ],
                                },
                            }
                        },

                    ]
                }
            );
        return config;
    },
    env: {
        PUBLIC_NEXT_API: process.env.PUBLIC_NEXT_API,
        PUBLIC_NEXT_TETRIS: process.env.PUBLIC_NEXT_TETRIS
    }
};

export default nextConfig;
