import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'VulpineOS — Agent Security Runtime',
  description: 'The first browser engine with AI agent security built into the C++ core. Built on Camoufox (Firefox 146.0.1).',
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1.1rem' }}>
    <span>🦊</span>
    <span>VulpineOS</span>
  </span>
)

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/PopcornDev1/VulpineOS"
  />
)

const footer = (
  <Footer>
    <span>VulpineOS — Built on <a href="https://github.com/AtomoTech/camoufox" style={{ textDecoration: 'underline' }}>Camoufox</a></span>
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" content="#7C3AED" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦊</text></svg>" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/PopcornDev1/vulpineos-docs/tree/main/content"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
