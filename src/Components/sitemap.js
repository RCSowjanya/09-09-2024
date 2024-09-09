const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

// Create a new sitemap stream
const sitemap = new SitemapStream({ hostname: "https://cuspsolar.com/" });

// Define your routes and URLs
const pages = [
  { url: "/", changefreq: "monthly", priority: 0.7 },
  { url: "/about", changefreq: "monthly", priority: 0.5 },
  { url: "/contactus", changefreq: "monthly", priority: 0.5 },
  { url: "/joinus", changefreq: "monthly", priority: 0.5 },
  { url: "/getquote", changefreq: "monthly", priority: 0.5 },
  {
    url: "/blog",
    changefreq: "monthly",
    priority: 0.5,
  },
];

// Write the URLs to the sitemap
pages.forEach((page) => sitemap.write(page));
sitemap.end();

// Convert the stream to a promise
streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
});
