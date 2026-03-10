import createMDX from '@next/mdx'

const withMDX = createMDX({})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)