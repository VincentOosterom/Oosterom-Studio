import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { landingPages } from "../src/pages/LandingPage/landingPagesData.js";
import { blogPosts } from "../data/blogPosts.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
const DOMAIN = "https://www.oosteromstudio.nl";

// ── Vaste pagina's ─────────────────────────────────────────────────────────

const STATIC_PAGES = [
    { loc: "/", changefreq: "weekly", priority: "1.0" },
    { loc: "/diensten", changefreq: "monthly", priority: "0.9" },
    { loc: "/diensten/webdesign", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/webdevelopment", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/mobile-apps", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/saas", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/branding", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/ai-agents", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/software-op-maat", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/klantportaal", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/webshops", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/avg-proof-website", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/seo-performance", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/onderhoud-support", changefreq: "monthly", priority: "0.8" },
    { loc: "/diensten/hosting-infrastructuur", changefreq: "monthly", priority: "0.8" },
    { loc: "/portfolio", changefreq: "monthly", priority: "0.8" },
    { loc: "/over-ons", changefreq: "monthly", priority: "0.7" },
    { loc: "/contact", changefreq: "monthly", priority: "0.7" },
    { loc: "/oosterom-os", changefreq: "monthly", priority: "0.7" },
    { loc: "/faq", changefreq: "monthly", priority: "0.6" },
    { loc: "/kennisbank", changefreq: "weekly", priority: "0.8" },
];

// ── Kennisbank-artikelen — automatisch uit blogPosts.js ─────────────────────
const BLOG_PAGES = blogPosts.map((post) => ({
    loc: `/kennisbank/${post.slug}`,
    changefreq: "monthly",
    priority: "0.7",
}));

// ── Landingspagina's — automatisch uit landingPagesData.js ─────────────────
const LANDING_PAGES = landingPages.map((page) => ({
    loc: `/l/${page.slug}`,
    changefreq: "monthly",
    priority: "0.6",
}));

// ── XML bouwen ───────────────────────────────────────────────────────────
const allPages = [...STATIC_PAGES, ...BLOG_PAGES, ...LANDING_PAGES];

const urlEntries = allPages
    .map(
        (page) => `    <url>
        <loc>${DOMAIN}${page.loc}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`
    )
    .join("\n\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urlEntries}

</urlset>
`;

const outputPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outputPath, xml, "utf-8");

console.log(`✅ Sitemap gegenereerd met ${allPages.length} pagina's (${BLOG_PAGES.length} kennisbank-artikelen, ${LANDING_PAGES.length} landingspagina's) → public/sitemap.xml`);