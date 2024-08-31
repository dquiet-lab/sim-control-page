/** @type {import('next').NextConfig} */

let nextConfig;
if (process.env.NODE_ENV === "development") {
  nextConfig = {};
} else {
  nextConfig = {
    output: "export",
    basePath: "/sim-control-page",
    assetPrefix: "/sim-control-page",
  };
}

export default nextConfig;
