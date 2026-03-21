import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  images: { unoptimized: true },
  async rewrites() {
    return {
      afterFiles: [
        // foxbridge.vulpineos.com → /foxbridge pages
        // afterFiles runs AFTER static file matching, so /_next/* assets serve normally
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'foxbridge.vulpineos.com' }],
          destination: '/foxbridge/:path*',
        },
      ],
    }
  },
})
