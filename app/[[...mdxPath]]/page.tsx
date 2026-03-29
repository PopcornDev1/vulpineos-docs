import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: any) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  const title = metadata?.title || 'VulpineOS'
  const description = metadata?.description || 'AI Browser Agent Operating System'
  const ogUrl = `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`
  return {
    ...metadata,
    openGraph: {
      title,
      description,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl],
    },
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props: any) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(params.mdxPath)
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
