// src/pages/changelog.jsx - UPDATED VERSION
import "../styles/changelog.css";

export const render = "server";

export const meta = {
  title: "Changelog - BertUI",
  description: "The complete history of BertUI from beta to production-ready framework with Server Islands, sitemap, robots.txt, and TypeScript",
  keywords: "bertui, changelog, updates, release notes, server islands, sitemap, robots.txt, typescript"
};

export default function Changelog() {
  return (
    <section className="changelog-page">
      <header>
        <h1>BertUI Changelog</h1>
        <p>The journey to a stable, production-ready foundation with advanced features.</p>
      </header>

      {/* -- LATEST RELEASE: SITEMAP, ROBOTS.TXT & TYPESCRIPT -- */}
      <div className="changelog-entry major-release">
        <div className="version-badge">v1.2.0</div>
        <h2>🌐 BertUI 1.1.1: SEO Suite & TypeScript</h2>
        <p className="release-subtitle">
          <strong>Released:</strong> January 2026 | <strong>Status:</strong> 🟢 Production SEO Ready
        </p>

        <div className="announcement">
          <h3>🎯 Complete SEO Automation</h3>
          <p>
            Version 1.2 introduces <strong>automatic SEO tooling</strong> - sitemap generation, 
            robots.txt creation, and full TypeScript support for enterprise-ready applications.
          </p>
          <p>
            <strong>The magic:</strong> Define your base URL once, and BertUI generates complete 
            SEO infrastructure automatically during build.
          </p>
        </div>

        <div className="features">
          <h3>🗺️ Automatic Sitemap Generation</h3>
          <p>
            Add <code>baseUrl</code> to your config and get a complete sitemap.xml:
          </p>
          <ul>
            <li><strong>Smart Route Discovery:</strong> Automatically finds all static routes</li>
            <li><strong>Meta Extraction:</strong> Pulls titles and descriptions from page files</li>
            <li><strong>Priority Calculation:</strong> Homepage = 1.0, nested pages = 0.6-0.8</li>
            <li><strong>XML Format:</strong> Standards-compliant sitemap.xml</li>
            <li><strong>Automatic Updates:</strong> Updates with every build</li>
          </ul>

          <div style={{ 
            background: 'rgba(0,0,0,0.05)', 
            padding: '1.5rem', 
            borderRadius: '8px',
            marginTop: '1rem',
            fontFamily: 'monospace'
          }}>
            <pre>{`// bertui.config.js
export default {
  baseUrl: "https://your-site.com",
  // That's it! Sitemap auto-generated
}`}</pre>
          </div>
        </div>

        <div className="features">
          <h3>🤖 Smart robots.txt Generation</h3>
          <ul>
            <li><strong>Custom Disallow Rules:</strong> Block admin, API, or private pages</li>
            <li><strong>Crawl Delay Control:</strong> Set custom crawl delays</li>
            <li><strong>Sitemap Reference:</strong> Auto-links to your sitemap.xml</li>
            <li><strong>Config-Driven:</strong> Simple configuration in bertui.config.js</li>
          </ul>

          <div style={{ 
            background: 'rgba(0,0,0,0.05)', 
            padding: '1.5rem', 
            borderRadius: '8px',
            marginTop: '1rem',
            fontFamily: 'monospace'
          }}>
            <pre>{`// Advanced robots.txt config
robots: {
  disallow: ["/admin", "/api", "/dashboard"],
  crawlDelay: 1 // 1 second delay
}`}</pre>
          </div>
        </div>

        <div className="features">
          <h3>📘 Full TypeScript Support</h3>
          <ul>
            <li><strong>.tsx & .ts Files:</strong> Complete support for TypeScript</li>
            <li><strong>Type Definitions:</strong> Comprehensive .d.ts files included</li>
            <li><strong>Config Typing:</strong> Full IntelliSense for bertui.config.js</li>
            <li><strong>Router Typing:</strong> Type-safe routes, params, and navigation</li>
            <li><strong>Migration Ready:</strong> Gradual adoption - mix .jsx and .tsx</li>
          </ul>

          <div style={{ 
            background: 'rgba(0,0,0,0.05)', 
            padding: '1.5rem', 
            borderRadius: '8px',
            marginTop: '1rem',
            fontFamily: 'monospace'
          }}>
            <pre>{`// src/pages/blog/[slug].tsx
import { useRouter } from 'bertui/router';

interface BlogParams {
  slug: string;
}

export default function BlogPost() {
  const { params } = useRouter<BlogParams>();
  return <h1>Post: {params.slug}</h1>;
}`}</pre>
          </div>
        </div>

        <div className="finalized">
          <h3>🚀 Enterprise-Ready Features</h3>
          <ul>
            <li>🔍 <strong>SEO Automation:</strong> Zero-config sitemap & robots.txt</li>
            <li>📁 <strong>Type Safety:</strong> Full TypeScript support with declarations</li>
            <li>⚙️ <strong>Production Config:</strong> Advanced configuration system</li>
            <li>🏝️ <strong>Server Islands:</strong> Now with TypeScript support</li>
            <li>🔄 <strong>Build Pipeline:</strong> Integrated SEO generation</li>
          </ul>
        </div>

        <p className="get-started-call">
          <strong>Ready for production SEO?</strong> 
          <a href="/server-islands">Learn about Server Islands →</a>
        </p>
      </div>

      <hr />

      {/* -- SERVER ISLANDS RELEASE -- */}
      <div className="changelog-entry major-release">
        <div className="version-badge">v1.1.0</div>
        <h2>🏝️ BertUI 1.1: Server Islands Era</h2>
        <p className="release-subtitle">
          <strong>Released:</strong> December 2025 | <strong>Status:</strong> 🟢 Game Changer
        </p>

        <div className="announcement">
          <h3>🎉 The Feature That Changes Everything</h3>
          <p>
            Version 1.1 introduces <strong>Server Islands</strong> - BertUI's unique feature that 
            gives you instant SEO and loading speed without sacrificing React's developer experience.
          </p>
        </div>

        <div className="features">
          <h3>🏝️ Server Islands</h3>
          <ul>
            <li><strong>Instant HTML:</strong> Static content generated at build time</li>
            <li><strong>Perfect SEO:</strong> Search engines see all content immediately</li>
            <li><strong>Zero JavaScript:</strong> No JS needed for content pages</li>
            <li><strong>Per-Page Choice:</strong> Use Server Islands for marketing, client-only for apps</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* -- STABLE FOUNDATION -- */}
      <div className="changelog-entry major-release">
        <div className="version-badge">v1.0.0</div>
        <h2>BertUI 1.0: The Stable Foundation</h2>
        <p className="release-subtitle">
          <strong>Released:</strong> 17/12/2025 | <strong>Status:</strong> 🟢 Production Ready
        </p>

        <div className="announcement">
          <h3>🏁 The Beta Journey is Complete</h3>
          <p>
            Version 1.0 marks the official, stable release of BertUI. The previous 35 beta 
            versions were a focused, intense sprint to eliminate bugs and harden every core 
            feature based on real usage.
          </p>
        </div>

        <div className="finalized">
          <h3>✅ Features Locked In</h3>
          <ul>
            <li>⚡ Sub-100ms Dev Server & 38ms Compilation</li>
            <li>📁 Zero-Config File-Based Routing</li>
            <li>🖼️ Reliable Static Asset Pipeline</li>
            <li>🔧 Complete Static Site Generation (SSG)</li>
            <li>🎨 Built-in CSS Processing & Optimization</li>
            <li>🚨 Enhanced Error Overlay & Developer Experience</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* -- NEW PHILOSOPHY ANNOUNCEMENT -- */}
      <div className="changelog-entry" style={{ 
        background: 'rgba(224, 242, 254, 0.3)', 
        border: '2px solid #0ea5e9',
        padding: '1.5rem'
      }}>
        <h3>🎯 BertUI's Evolution: From JavaScript-First to TypeScript-Ready</h3>
        <p>
          <strong>We've listened to our community!</strong> While BertUI started as a 
          JavaScript-first framework focused on simplicity, we recognize that TypeScript 
          has become essential for production applications.
        </p>
        <p>
          <strong>Our new approach:</strong> <em>JavaScript by default, TypeScript when you need it.</em>
          You can start with simple .jsx files and gradually add TypeScript as your project grows.
        </p>
        <p>
          BertUI now provides <strong>full TypeScript support</strong> with comprehensive type 
          definitions, while maintaining our core philosophy of zero-config simplicity for 
          JavaScript users.
        </p>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          🚀 <strong>BertUI's mission:</strong> The fastest React development with the right 
          tools for every project size. Simple JavaScript for quick prototypes, TypeScript 
          for production applications.
        </p>
      </div>

      <hr />

      {/* -- BETA HISTORY (Condensed) -- */}
      <div className="beta-history">
        <h3>Beta Phase Highlights (v0.1.0 - v0.4.7)</h3>
        
        <div className="changelog-entry latest">
          <h2>0.4.7 - Build System Overhaul</h2>
          <ul>
            <li>Complete Production Build with SEO-optimized HTML</li>
            <li>Multi-Route HTML Generation for all routes</li>
            <li>Reliable Asset Copying system</li>
          </ul>
        </div>

        <div className="changelog-entry">
          <h2>0.4.0 - Core Stability</h2>
          <ul>
            <li>Automatic React import injection</li>
            <li>Fixed JSX transpilation without manual React imports</li>
          </ul>
        </div>

        <div className="changelog-entry">
          <h2>0.3.9 - External Library Support</h2>
          <ul>
            <li>CSS Import Support for external styles</li>
            <li>Full support for importing external libraries</li>
            <li>Complete .env file support</li>
          </ul>
        </div>

        <div className="changelog-entry initial-release">
          <h2>0.1.0 - Initial Release</h2>
          <ul>
            <li>Zero-Configuration Tooling with native JSX support</li>
            <li>Integrated Development Server with HMR</li>
            <li>Optimized Production Build system</li>
          </ul>
        </div>
      </div>

      {/* ✅ Use regular <a> tags for Server Islands */}
      <div className="gs-cta-grid">
        <a href="/" className="gs-cta-button gs-primary">
          ← Back to Home
        </a>
        <a 
          href="https://github.com/BunElysiaReact/BERTUI" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gs-cta-button gs-secondary"
        >
          View on GitHub →
        </a>
      </div>
    </section>
  );
}