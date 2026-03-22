import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  // Make sure to ignore ESLint/TS errors during export if needed, 
  // but better to fix them.
};

const withMDX = createMDX({
  // options here
});

export default withMDX(nextConfig);
