import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["tsx", "mdx", "ts", "js", "jsx"],
  // Optionally, add any other Next.js config below
};

export default withMDX()(nextConfig);
