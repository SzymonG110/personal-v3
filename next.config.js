/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [
            `${__dirname}/src/styles`,
            `${__dirname}/src/components`
        ],
    }
}

module.exports = nextConfig
