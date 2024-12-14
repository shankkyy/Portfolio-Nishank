const fs = require("fs");
const path = require("path");

const routes = [
  { path: "/home", priority: 1.0, changefreq: "daily" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/projects", priority: 0.8, changefreq: "monthly" },
  { path: "/contact", priority: 0.5, changefreq: "monthly" },
];

const hostname = "https://portfolio-nishank.vercel.app";

function generateSitemap() {
  const urls = routes
    .map(
      (route) => `
    <url>
      <loc>${hostname}${route.path}</loc>
      <priority>${route.priority}</priority>
      <changefreq>${route.changefreq}</changefreq>
    </url>`
    )
    .join("\n");

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  // Write the sitemap to the public folder
  const publicPath = path.join(__dirname, "public", "sitemap.xml");
  fs.writeFileSync(publicPath, sitemapContent.trim());
  console.log("Sitemap has been generated at: public/sitemap.xml");
}

generateSitemap();
