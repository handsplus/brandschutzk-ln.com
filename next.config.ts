import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  async redirects() {
    const mainDomain = "https://xn--brandschutzkln-6pb.com";
    return [
      // www.brandschutzköln.com → brandschutzköln.com (Punycode + Unicode)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--brandschutzkln-6pb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.brandschutzköln.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      // kölnbrandschutz.com (Root + www) → brandschutzköln.com
      // Exakter Punycode (Node.js url): -vpb; manche Systeme nutzen -8eb → beide abdecken
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--klnbrandschutz-vpb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--klnbrandschutz-vpb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--klnbrandschutz-8eb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--klnbrandschutz-8eb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      // k1n-Variante (Ziffer 1 statt Buchstabe l – wie in Vercel angezeigt)
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--k1nbrandschutz-vpb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--k1nbrandschutz-vpb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      // Unicode-Host (falls Browser/Proxy "kölnbrandschutz.com" statt Punycode sendet)
      {
        source: "/:path*",
        has: [{ type: "host", value: "kölnbrandschutz.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kölnbrandschutz.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      // xn--kinbrandschutz-vpb.com (Punycode-Variante) → kanonische Seite
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--kinbrandschutz-vpb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--kinbrandschutz-vpb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      // koelnbrandschutz.online → kanonische Seite
      {
        source: "/:path*",
        has: [{ type: "host", value: "koelnbrandschutz.online" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.koelnbrandschutz.online" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      // brandschutzkoeln.com (ASCII) → kanonische Seite
      {
        source: "/:path*",
        has: [{ type: "host", value: "brandschutzkoeln.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.brandschutzkoeln.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      // xn--brandschutzkin-6pb.com (Vercel-Variante) → kanonische Seite
      {
        source: "/:path*",
        has: [{ type: "host", value: "xn--brandschutzkin-6pb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.xn--brandschutzkin-6pb.com" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
      // brandschutzkoeln.vercel.app → kanonische Seite
      {
        source: "/:path*",
        has: [{ type: "host", value: "brandschutzkoeln.vercel.app" }],
        destination: `${mainDomain}/:path*`,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
