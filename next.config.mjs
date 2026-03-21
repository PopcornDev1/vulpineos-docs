import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  images: { unoptimized: true },
  async rewrites() {
    return {
      beforeFiles: [
        // foxbridge.vulpineos.com → /foxbridge pages
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'foxbridge.vulpineos.com' }],
          destination: '/foxbridge/:path*',
        },
      ],
    }
  },
})
