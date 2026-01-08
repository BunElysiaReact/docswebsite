// bertui.config.js - TEST CONFIGURATION
export default {
  siteName: "BERTUI-Fastest react framework library",
  baseUrl: "https://myawesomeblog.com",
  
  meta: {
    title: "Home-look at what bertui can do",
    description: "Bertui fast simle in a new league",
    author: "Pease Ernest"
  },
  
  robots: {
    disallow: ['/admin', '/api', '/drafts'],
    crawlDelay: 1
  },
  

};
// ====================================
// 📝 CONFIGURATION NOTES
// ====================================

// ✅ REQUIRED FIELDS:
// - siteName: Used in sitemap
// - baseUrl: MUST be your production URL for proper sitemap generation

// ✅ OPTIONAL FIELDS:
// - Everything else has sensible defaults

// ====================================
// 🎯 USE CASES
// ====================================

// 1️⃣ SIMPLE BLOG:
// export default {
//   siteName: "My Blog",
//   baseUrl: "https://myblog.com",
//   meta: {
//     title: "My Blog",
//     description: "Thoughts and ideas"
//   }
// };

// 2️⃣ E-COMMERCE SITE:
// export default {
//   siteName: "My Shop",
//   baseUrl: "https://myshop.com",
//   robots: {
//     disallow: ["/admin", "/checkout"] // Block sensitive pages
//   }
// };

// 3️⃣ DOCUMENTATION SITE:
// export default {
//   siteName: "MyFramework Docs",
//   baseUrl: "https://docs.myframework.com",
//   meta: {
//     title: "MyFramework Documentation",
//     themeColor: "#0ea5e9" // Match brand color
//   }
// };

// ====================================
// 🔗 RESOURCES
// ====================================
// Documentation: https://bertui-docswebsite.vercel.app/
// GitHub: https://github.com/BunElysiaReact/BERTUI
// Discord: https://discord.gg/kvbXfkJG