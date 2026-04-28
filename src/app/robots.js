export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://pixgen-by-marufbillah.vercel.app/sitemap.xml",
  };
}
