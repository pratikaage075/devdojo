import createMDX from '@next/mdx'

const withMDX = createMDX({})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: { unoptimized: true },
}

export default withMDX(nextConfig)