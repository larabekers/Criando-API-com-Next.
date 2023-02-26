/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  headers: async () => {
    return[
      {
      source: '/api/:path*',
      headers:[
        {key:'Access-Control-Allow-Origin', value:'*' }
      ]
    }
  ];
  }
}

module.exports = nextConfig
