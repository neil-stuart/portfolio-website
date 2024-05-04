/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/github',
          destination: 'https://github.com/neil-stuart',
          permanent: true,
        },

        {
          source: '/linkedin',
          destination: 'https://www.linkedin.com/in/neil-stuart-44705525b/',
          permanent: true,
        }
      ]
    },
  }