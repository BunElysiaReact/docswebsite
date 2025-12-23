// ============================================
// changelog.jsx - SERVER ISLAND
// ============================================
// 🏝️ PURE STATIC CONTENT - PERFECT FOR SEO

// (In separate file: changelog.jsx)
import "../styles/changelog.css";

export const render = "server";

export const meta = {
  title: "Changelog - BertUI",
  description: "The complete history of BertUI from beta to production-ready framework with Server Islands",
  keywords: "bertui, changelog, updates, release notes, server islands"
};

export default function Changelog() {
  return (
    <section className="changelog-page">
      <header>
        <h1>BertUI Changelog</h1>
        <p>The journey to a stable, production-ready foundation with Server Islands.</p>
      </header>

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
          <p>
            <strong>The magic:</strong> Add one line to any page and BertUI generates static HTML 
            at build time. No react-dom/server, no complex SSR, just pure HTML for perfect SEO.
          </p>
        </div>

        <div className="features">
          <h3>🏝️ Server Islands</h3>
          <p>
            Add <code>export const render = "server";</code> to any page and get:
          </p>
          <ul>
            <li><strong>Instant HTML:</strong> Static content generated at build time</li>
            <li><strong>Perfect SEO:</strong> Search engines see all content immediately</li>
            <li><strong>Zero JavaScript:</strong> No JS needed for content pages</li>
            <li><strong>Per-Page Choice:</strong> Use Server Islands for marketing, client-only for apps</li>
            <li><strong>No Configuration:</strong> Just one line per page</li>
          </ul>

          <div style={{ 
            background: 'rgba(0,0,0,0.05)', 
            padding: '1.5rem', 
            borderRadius: '8px',
            marginTop: '1rem',
            fontFamily: 'monospace'
          }}>
            <pre>{`// Landing page with Server Island
export const render = "server";

export default function Home() {
  return <div>Instant SEO!</div>;
}`}</pre>
          </div>
        </div>

        <div className="finalized">
          <h3>✨ What Makes This Special</h3>
          <ul>
            <li>🚀 <strong>Not "Fast Vite":</strong> Vite can't do server rendering at all</li>
            <li>⚡ <strong>Not "Simple Next.js":</strong> No complex setup, no forced SSR</li>
            <li>🎯 <strong>Unique Architecture:</strong> Optional SSG with zero config</li>
            <li>🏝️ <strong>Per-Page Control:</strong> Choose what gets pre-rendered</li>
          </ul>
        </div>

        <p className="get-started-call">
          <strong>Ready to try Server Islands?</strong> 
          <a href="/server-islands">Read the complete guide →</a>
        </p>
      </div>

      <hr />

      {/* -- PREVIOUS RELEASES -- */}
      <div className="changelog-entry">
        <h2>v1.0.3 - Small Fix</h2>
        <p>Minor bug fixes and stability improvements.</p>
      </div>

      <div className="changelog-entry">
        <h2>v1.0.2 - CSS Consolidation</h2>
        <p>
          All CSS files are now merged into a single <code>bertui.min.css</code> file. 
          Multiple CSS file support will be added in a future release.
        </p>
      </div>

      <div className="changelog-entry">
        <h2>v1.0.1 - CSS Path Fixes</h2>
        <p>Fixed CSS file paths in production builds.</p>
      </div>

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
          <p>
            <strong>What this means:</strong> The core API is now stable. BertUI follows 
            Semantic Versioning from this point forward.
          </p>
        </div>

        <div className="features">
          <h3>✨ What's New & Solidified</h3>
          <ul>
            <li><strong>Stable Core API:</strong> Zero-config workflow guaranteed for compatibility</li>
            <li><strong>Production Guarantee:</strong> All critical bugs resolved</li>
            <li><strong>Commitment to SemVer:</strong> Clear versioning going forward</li>
          </ul>
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

      {/* -- IMPORTANT NOTICE -- */}
      <div className="changelog-entry" style={{ 
        background: 'rgba(255, 243, 205, 0.3)', 
        border: '2px solid #f59e0b',
        padding: '1.5rem'
      }}>
        <h3>📝 Important Notice: JavaScript-First Philosophy</h3>
        <p>
          <strong>BertUI is JavaScript-first and will remain that way.</strong> We love the 
          simplicity, flexibility, and accessibility of JavaScript. While we fully support 
          <code>.jsx</code> files with complete JSX syntax, we <strong>do not plan to add 
          TypeScript (<code>.tsx</code>) support</strong>.
        </p>
        <p>
          <strong>Why?</strong> We believe in keeping tools simple and focused. TypeScript 
          adds complexity that goes against BertUI's core philosophy of "zero config, just code." 
          JavaScript is powerful, universal, and requires no compilation step.
        </p>
        <p>
          If you need TypeScript, we recommend Next.js or Remix - they're excellent frameworks 
          with first-class TypeScript support. BertUI is for developers who value simplicity 
          and speed over type safety.
        </p>
        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          🎯 <strong>BertUI's mission:</strong> The fastest React development with zero complexity. 
          TypeScript would compromise that mission.
        </p>
      </div>

      <hr />

      <div className="beta-history">
        <h3>Beta Phase History (v0.1.0 - v0.4.6)</h3>
        <p>
          The following log documents the rapid development phase that led to the stable 
          1.0 release and enabled the Server Islands feature in 1.1.
        </p>

        <div className="changelog-entry latest">
          <h2>0.4.7 (Latest Beta) - Build System Overhaul</h2>
          
          <div className="features">
            <h3>✨ New Features</h3>
            <ul>
              <li>Complete Production Build: Full static site generation with SEO-optimized HTML</li>
              <li>Multi-Route HTML Generation: Automatic HTML file creation for all routes</li>
              <li>Reliable Asset Copying: Fixed image and static file copying</li>
            </ul>
          </div>

          <div className="fixes">
            <h3>🐛 Bug Fixes</h3>
            <ul>
              <li>Fixed production build hanging on image optimization</li>
              <li>Resolved missing HTML file generation in dist folder</li>
              <li>Fixed directory structure in production builds</li>
            </ul>
          </div>
        </div>

        <div className="changelog-entry">
          <h2>0.4.5 - Asset Pipeline Fix</h2>
          <div className="fixes">
            <h3>🐛 Bug Fixes</h3>
            <ul>
              <li>Static assets now correctly copy to dist folder</li>
              <li>Fixed recursive directory copying for images</li>
            </ul>
          </div>
        </div>

        <div className="changelog-entry">
          <h2>0.4.2 - Developer Experience</h2>
          <div className="features">
            <h3>✨ New Features</h3>
            <ul>
              <li>Full-screen error overlay for compilation and runtime errors</li>
              <li>Better stack traces and error formatting</li>
            </ul>
          </div>
        </div>

        <div className="changelog-entry">
          <h2>0.4.0 - Core Stability</h2>
          <div className="fixes">
            <h3>🐛 Bug Fixes</h3>
            <ul>
              <li>Automatic React import injection now works correctly</li>
              <li>Fixed JSX transpilation without manual React imports</li>
            </ul>
          </div>
        </div>

        <div className="changelog-entry">
          <h2>0.3.9</h2>
          <div className="features">
            <h3>✨ New Features</h3>
            <ul>
              <li>CSS Import Support: Templates support external CSS imports</li>
              <li>External Library Support: Full support for importing external libraries</li>
              <li>Environment Variables: Complete .env file support</li>
            </ul>
          </div>
        </div>

        <div className="changelog-entry">
          <h2>0.1.1 - Page Routing</h2>
          <div className="features">
            <h3>✨ New Features</h3>
            <ul>
              <li>Integrated Page Routing: Client-side routing with React Router DOM</li>
              <li>Dynamic Asset Serving: Dev server handles deep links</li>
            </ul>
          </div>
        </div>

        <div className="changelog-entry initial-release">
          <h2>0.1.0 - Initial Release</h2>
          <div className="features">
            <h3>✨ New Features</h3>
            <ul>
              <li>Zero-Configuration Tooling: Native JSX support via Bun</li>
              <li>Integrated Development Server: HMR via WebSockets</li>
              <li>Optimized Production Build: Static builds with optimization</li>
            </ul>
          </div>
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