// ============================================
// server-islands.jsx - SERVER ISLAND GUIDE
// ============================================
// 🏝️ PURE STATIC CONTENT - PERFECT FOR SEO

import "../styles/server-islands.css";

export const render = "server";

export const meta = {
  title: "Server Islands - The Complete Guide | BertUI",
  description: "Learn how BertUI Server Islands give you instant SEO and perfect performance with zero configuration. The revolutionary feature that changes everything.",
  keywords: "bertui, server islands, ssg, static site generation, seo, performance, react, zero config"
};

export default function ServerIslands() {
  return (
    <div className="server-islands-guide">
      {/* Hero Section */}
      <header className="si-hero">
        <div className="si-hero-badge">🏝️ Revolutionary Feature</div>
        <h1 className="si-hero-title">Server Islands</h1>
        <p className="si-hero-subtitle">
          The game-changing feature that gives you instant SEO and perfect performance 
          without sacrificing React's developer experience.
        </p>
        <div className="si-hero-stats">
          <div className="si-stat">
            <div className="si-stat-value">0ms</div>
            <div className="si-stat-label">Time to First Byte</div>
          </div>
          <div className="si-stat">
            <div className="si-stat-value">100%</div>
            <div className="si-stat-label">SEO Score</div>
          </div>
          <div className="si-stat">
            <div className="si-stat-value">1 Line</div>
            <div className="si-stat-label">To Enable</div>
          </div>
        </div>
      </header>

      {/* What Are Server Islands */}
      <section className="si-section">
        <h2 className="si-section-title">🤔 What Are Server Islands?</h2>
        <div className="si-content-box si-primary">
          <p className="si-lead">
            Server Islands are BertUI's unique approach to Static Site Generation (SSG). 
            They let you generate static HTML at build time with a single line of code.
          </p>
          <p>
            Unlike traditional SSR or SSG frameworks, Server Islands are <strong>opt-in per page</strong>. 
            You choose which pages get pre-rendered, and which stay client-only. No complex configuration, 
            no build-time dependencies, no server infrastructure needed.
          </p>
        </div>
      </section>

      {/* The Magic: One Line */}
      <section className="si-section">
        <h2 className="si-section-title">✨ The Magic: Just One Line</h2>
        <div className="si-code-example">
          <div className="si-code-header">
            <span className="si-code-filename">📄 src/pages/about.jsx</span>
            <span className="si-code-badge">Server Island ✅</span>
          </div>
          <pre className="si-code-block">{`// Add this one line at the top
export const render = "server";

export const meta = {
  title: "About Us",
  description: "Learn about our company"
};

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This content is pre-rendered as pure HTML!</p>
    </div>
  );
}`}</pre>
        </div>
        <div className="si-result-box">
          <strong>Result:</strong> BertUI generates static HTML at build time. Search engines 
          see all content immediately. Zero JavaScript needed for content rendering.
        </div>
      </section>

      {/* Why Server Islands Matter */}
      <section className="si-section">
        <h2 className="si-section-title">🎯 Why Server Islands Matter</h2>
        <div className="si-comparison-grid">
          <div className="si-comparison-item si-bad">
            <h3>❌ Client-Only (Default React)</h3>
            <ul>
              <li>Empty HTML until JS loads</li>
              <li>Poor SEO (crawlers see blank page)</li>
              <li>Slow Time to First Contentful Paint</li>
              <li>Bad for landing pages and blogs</li>
            </ul>
          </div>
          <div className="si-comparison-item si-good">
            <h3>✅ Server Islands (BertUI)</h3>
            <ul>
              <li>Full HTML served instantly</li>
              <li>Perfect SEO (crawlers see everything)</li>
              <li>Instant Time to First Contentful Paint</li>
              <li>Perfect for landing pages and blogs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="si-section">
        <h2 className="si-section-title">⚙️ How Server Islands Work</h2>
        <div className="si-process-flow">
          <div className="si-process-step">
            <div className="si-process-number">1</div>
            <h3>Build Time</h3>
            <p>BertUI detects <code>export const render = "server"</code></p>
          </div>
          <div className="si-process-arrow">→</div>
          <div className="si-process-step">
            <div className="si-process-number">2</div>
            <h3>Extraction</h3>
            <p>Extracts JSX and converts to pure HTML</p>
          </div>
          <div className="si-process-arrow">→</div>
          <div className="si-process-step">
            <div className="si-process-number">3</div>
            <h3>Generation</h3>
            <p>Generates HTML file with pre-rendered content</p>
          </div>
          <div className="si-process-arrow">→</div>
          <div className="si-process-step">
            <div className="si-process-number">4</div>
            <h3>Deploy</h3>
            <p>Deploy static HTML to any host</p>
          </div>
        </div>
      </section>

      {/* The Rules */}
      <section className="si-section">
        <h2 className="si-section-title">📋 Server Island Rules</h2>
        <div className="si-content-box si-warning">
          <p className="si-lead">
            Server Islands must be <strong>pure static HTML</strong>. Think of them as 
            "HTML templates with JSX syntax" rather than "React components."
          </p>
        </div>
        
        <div className="si-rules-grid">
          <div className="si-rule si-allowed">
            <h3>✅ Allowed</h3>
            <ul>
              <li>Pure JSX markup</li>
              <li>Static text and content</li>
              <li>CSS classes and inline styles</li>
              <li>Regular <code>&lt;a&gt;</code> tags for navigation</li>
              <li>Images and media</li>
              <li>Helper components (also static)</li>
            </ul>
          </div>
          
          <div className="si-rule si-forbidden">
            <h3>❌ Not Allowed</h3>
            <ul>
              <li>React hooks (useState, useEffect, etc.)</li>
              <li>Event handlers (onClick, onChange, etc.)</li>
              <li>Link component from bertui/router</li>
              <li>Browser APIs (window, document, fetch)</li>
              <li>Dynamic imports</li>
              <li>Async/await functions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="si-section">
        <h2 className="si-section-title">💡 Perfect Use Cases</h2>
        
        <div className="si-use-case">
          <h3>🏠 Landing Pages</h3>
          <p>
            Your homepage, product pages, and marketing pages should be Server Islands. 
            They need perfect SEO and instant loading.
          </p>
          <div className="si-code-example si-small">
            <pre className="si-code-block">{`export const render = "server";

export default function Home() {
  return (
    <div className="landing">
      <h1>Welcome to Our Product</h1>
      <p>The best solution for your needs</p>
      <a href="/signup" className="cta-button">Get Started</a>
    </div>
  );
}`}</pre>
          </div>
        </div>

        <div className="si-use-case">
          <h3>📝 Blog Posts</h3>
          <p>
            Blog content, documentation, and articles are perfect for Server Islands. 
            Pure content with zero interactivity needed.
          </p>
          <div className="si-code-example si-small">
            <pre className="si-code-block">{`export const render = "server";

export default function BlogPost() {
  return (
    <article>
      <h1>10 Tips for Better Code</h1>
      <p>Published on December 23, 2025</p>
      <div className="content">
        <p>Here are our top tips...</p>
      </div>
    </article>
  );
}`}</pre>
          </div>
        </div>

        <div className="si-use-case">
          <h3>ℹ️ About/Contact Pages</h3>
          <p>
            Static informational pages are ideal Server Islands. No state, no interactivity, 
            just content.
          </p>
          <div className="si-code-example si-small">
            <pre className="si-code-block">{`export const render = "server";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Email: hello@example.com</p>
      <p>Phone: (555) 123-4567</p>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </section>

      {/* When NOT to Use */}
      <section className="si-section">
        <h2 className="si-section-title">🚫 When NOT to Use Server Islands</h2>
        <div className="si-content-box si-danger">
          <p className="si-lead">
            Don't use Server Islands for interactive pages. Keep these as client-only (default).
          </p>
        </div>
        
        <div className="si-bad-examples">
          <div className="si-bad-example">
            <h3>❌ Dashboards</h3>
            <p>
              User dashboards need state management, real-time updates, and interactivity. 
              Keep them client-only (don't add the render export).
            </p>
          </div>
          
          <div className="si-bad-example">
            <h3>❌ Forms</h3>
            <p>
              Forms with validation, state, and submission handlers need React hooks. 
              These should stay client-only.
            </p>
          </div>
          
          <div className="si-bad-example">
            <h3>❌ Apps with User State</h3>
            <p>
              Any page that needs to remember user actions, fetch data, or respond to clicks 
              should be client-only.
            </p>
          </div>
        </div>
      </section>

      {/* Mixed Architecture */}
      <section className="si-section">
        <h2 className="si-section-title">🏗️ The Power of Mixed Architecture</h2>
        <div className="si-content-box si-success">
          <p className="si-lead">
            The genius of Server Islands is that you can mix them with client-only pages 
            in the same project. Choose the right tool for each page.
          </p>
        </div>
        
        <div className="si-architecture-example">
          <h3>Example Project Structure:</h3>
          <div className="si-file-tree">
            <div className="si-file">
              <span className="si-file-icon">🏝️</span>
              <code>src/pages/index.jsx</code>
              <span className="si-file-badge si-server">Server Island</span>
            </div>
            <div className="si-file">
              <span className="si-file-icon">🏝️</span>
              <code>src/pages/about.jsx</code>
              <span className="si-file-badge si-server">Server Island</span>
            </div>
            <div className="si-file">
              <span className="si-file-icon">🏝️</span>
              <code>src/pages/blog.jsx</code>
              <span className="si-file-badge si-server">Server Island</span>
            </div>
            <div className="si-file">
              <span className="si-file-icon">⚡</span>
              <code>src/pages/dashboard.jsx</code>
              <span className="si-file-badge si-client">Client-Only</span>
            </div>
            <div className="si-file">
              <span className="si-file-icon">⚡</span>
              <code>src/pages/app.jsx</code>
              <span className="si-file-badge si-client">Client-Only</span>
            </div>
          </div>
          <p className="si-architecture-note">
            ✅ Marketing pages get instant SEO with Server Islands<br />
            ✅ Interactive pages get full React power as client-only
          </p>
        </div>
      </section>

      {/* Helper Components */}
      <section className="si-section">
        <h2 className="si-section-title">🧩 Using Helper Components</h2>
        <p>
          You can create reusable helper components inside Server Islands. They just need 
          to follow the same rules (no hooks, no events).
        </p>
        
        <div className="si-code-example">
          <pre className="si-code-block">{`export const render = "server";

// ✅ Helper component - also pure static
function FeatureCard({ title, description, icon }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <div className="features-page">
      <h1>Our Features</h1>
      <div className="features-grid">
        <FeatureCard 
          icon="🚀"
          title="Lightning Fast"
          description="Sub-100ms development server"
        />
        <FeatureCard 
          icon="🏝️"
          title="Server Islands"
          description="Optional SSG with one line"
        />
        <FeatureCard 
          icon="⚡"
          title="Zero Config"
          description="Just code and deploy"
        />
      </div>
    </div>
  );
}`}</pre>
        </div>
      </section>

      {/* Navigation in Server Islands */}
      <section className="si-section">
        <h2 className="si-section-title">🔗 Navigation in Server Islands</h2>
        <div className="si-content-box si-info">
          <p>
            Server Islands use regular <code>&lt;a&gt;</code> tags for navigation, 
            not the <code>Link</code> component.
          </p>
        </div>
        
        <div className="si-nav-comparison">
          <div className="si-nav-item si-wrong">
            <h4>❌ Wrong (Link component)</h4>
            <pre className="si-code-block">{`import { Link } from 'bertui/router';

export const render = "server";

export default function Page() {
  return (
    <Link to="/about">About</Link>
  );
}`}</pre>
            <p className="si-nav-note">This will cause a build error!</p>
          </div>
          
          <div className="si-nav-item si-right">
            <h4>✅ Correct (regular anchor tags)</h4>
            <pre className="si-code-block">{`export const render = "server";

export default function Page() {
  return (
    <a href="/about">About</a>
  );
}`}</pre>
            <p className="si-nav-note">Perfect! Works in static HTML.</p>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="si-section">
        <h2 className="si-section-title">🔨 Build Process</h2>
        <p>Building with Server Islands is exactly the same as a normal build:</p>
        
        <div className="si-code-example si-terminal">
          <div className="si-code-header">
            <span className="si-code-filename">Terminal</span>
          </div>
          <pre className="si-code-block">{`$ bun run build

╔════════════════════════════════════╗
║  BUILDING WITH SERVER ISLANDS 🏝️  ║
╚════════════════════════════════════╝

Step 1: Compiling and detecting Server Islands...
🏝️  Server Island: /
🏝️  Server Island: /about
🏝️  Server Island: /blog

╔═══════════════════════════════╗
║  SERVER ISLANDS DETECTED 🏝️  ║
╚═══════════════════════════════╝

Step 5: Generating HTML with Server Islands...
🏝️  Extracting static content: /
   Extracted 2847 chars of static HTML
✅ Server Island rendered: /
✅ Server Island: / (instant content!)

BUILD SUMMARY
📄 Total routes: 8
🏝️  Server Islands (SSG): 3
⚡ Client-only: 5

✅ Server Islands enabled - INSTANT content delivery!
╔══════════════════════╗
║  READY TO DEPLOY 🚀  ║
╚══════════════════════╝`}</pre>
        </div>
      </section>

      {/* Debugging */}
      <section className="si-section">
        <h2 className="si-section-title">🐛 Debugging Server Islands</h2>
        <p>
          To verify your Server Island is working, view the page source in your browser:
        </p>
        
        <div className="si-debug-steps">
          <div className="si-debug-step">
            <div className="si-debug-number">1</div>
            <div className="si-debug-content">
              <h4>Deploy your build</h4>
              <p>Run <code>bun run build</code> and deploy the <code>dist/</code> folder</p>
            </div>
          </div>
          
          <div className="si-debug-step">
            <div className="si-debug-number">2</div>
            <div className="si-debug-content">
              <h4>View page source</h4>
              <p>Right-click → "View Page Source" in your browser</p>
            </div>
          </div>
          
          <div className="si-debug-step">
            <div className="si-debug-number">3</div>
            <div className="si-debug-content">
              <h4>Look for content in root div</h4>
              <p>If you see your content inside <code>&lt;div id="root"&gt;</code>, it worked!</p>
            </div>
          </div>
        </div>
        
        <div className="si-content-box si-success">
          <h4>✅ Success looks like:</h4>
          <pre className="si-code-block">{`<!-- 🏝️ Server Island: Static content rendered at build time -->
<div id="root">
  <section class="changelog-page">
    <header>
      <h1>BertUI Changelog</h1>
      <p>The journey to a stable foundation...</p>
    </header>
    <!-- All your content is here! -->
  </section>
</div>`}</pre>
        </div>
        
        <div className="si-content-box si-danger">
          <h4>❌ Failure looks like:</h4>
          <pre className="si-code-block">{`<div id="root"></div>
<!-- Empty! Content will load via JavaScript -->`}</pre>
        </div>
      </section>

      {/* Performance Impact */}
      <section className="si-section">
        <h2 className="si-section-title">📊 Performance Impact</h2>
        <div className="si-perf-grid">
          <div className="si-perf-metric">
            <div className="si-perf-value">100%</div>
            <div className="si-perf-label">Lighthouse SEO Score</div>
            <div className="si-perf-desc">Perfect crawlability</div>
          </div>
          
          <div className="si-perf-metric">
            <div className="si-perf-value">0ms</div>
            <div className="si-perf-label">Time to First Byte</div>
            <div className="si-perf-desc">Instant HTML delivery</div>
          </div>
          
          <div className="si-perf-metric">
            <div className="si-perf-value">~50ms</div>
            <div className="si-perf-label">First Contentful Paint</div>
            <div className="si-perf-desc">Users see content immediately</div>
          </div>
          
          <div className="si-perf-metric">
            <div className="si-perf-value">0 KB</div>
            <div className="si-perf-label">Extra JavaScript</div>
            <div className="si-perf-desc">No hydration overhead</div>
          </div>
        </div>
      </section>

      {/* Comparison with Other Frameworks */}
      <section className="si-section">
        <h2 className="si-section-title">⚖️ BertUI vs Other Frameworks</h2>
        
        <div className="si-framework-comparison">
          <div className="si-framework">
            <h3>Next.js</h3>
            <ul>
              <li>❌ Complex configuration required</li>
              <li>❌ Forces SSR/SSG decisions upfront</li>
              <li>❌ Heavy runtime overhead</li>
              <li>❌ Requires server infrastructure</li>
              <li>✅ Full-featured framework</li>
            </ul>
          </div>
          
          <div className="si-framework">
            <h3>Vite</h3>
            <ul>
              <li>❌ No SSG/SSR capabilities at all</li>
              <li>❌ Client-only rendering</li>
              <li>❌ Poor SEO out of the box</li>
              <li>✅ Fast development server</li>
              <li>✅ Simple configuration</li>
            </ul>
          </div>
          
          <div className="si-framework si-highlight">
            <h3>BertUI Server Islands</h3>
            <ul>
              <li>✅ One line to enable per page</li>
              <li>✅ Optional SSG - your choice</li>
              <li>✅ Zero runtime overhead</li>
              <li>✅ No server needed - static deploy</li>
              <li>✅ Mix SSG and client-only freely</li>
              <li>✅ Fast development server</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="si-section">
        <h2 className="si-section-title">🚀 Getting Started</h2>
        <div className="si-steps">
          <div className="si-step-card">
            <div className="si-step-number">1</div>
            <h3>Choose Your Pages</h3>
            <p>
              Identify which pages should be Server Islands (landing pages, blogs, docs) 
              and which should stay client-only (dashboards, apps, forms).
            </p>
          </div>
          
          <div className="si-step-card">
            <div className="si-step-number">2</div>
            <h3>Add the Export</h3>
            <p>
              Add <code>export const render = "server";</code> to the top of each 
              Server Island page.
            </p>
          </div>
          
          <div className="si-step-card">
            <div className="si-step-number">3</div>
            <h3>Remove Interactivity</h3>
            <p>
              Remove any hooks, event handlers, or dynamic imports from Server Islands. 
              Convert <code>Link</code> to <code>&lt;a&gt;</code> tags.
            </p>
          </div>
          
          <div className="si-step-card">
            <div className="si-step-number">4</div>
            <h3>Build and Deploy</h3>
            <p>
              Run <code>bun run build</code> and deploy the <code>dist/</code> folder 
              to any static host. Done!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="si-section">
        <h2 className="si-section-title">❓ Frequently Asked Questions</h2>
        
        <div className="si-faq">
          <div className="si-faq-item">
            <h3>Can I use Server Islands with dynamic routes?</h3>
            <p>
              Not yet. Server Islands currently only work with static routes. Dynamic routes 
              like <code>[slug].jsx</code> will be supported in a future release.
            </p>
          </div>
          
          <div className="si-faq-item">
            <h3>Do Server Islands require a server at runtime?</h3>
            <p>
              No! That's the beauty of it. Server Islands generate static HTML at build time. 
              You deploy pure HTML files to any static host (Vercel, Netlify, Cloudflare Pages, etc.).
            </p>
          </div>
          
          <div className="si-faq-item">
            <h3>Can I hydrate a Server Island to add interactivity later?</h3>
            <p>
              Not in the current version. Server Islands are fully static. If you need interactivity, 
              keep the page client-only (don't add the render export).
            </p>
          </div>
          
          <div className="si-faq-item">
            <h3>What happens if I use hooks in a Server Island?</h3>
            <p>
              BertUI will detect the hooks during build and log an error. The page will fall back 
              to client-only mode automatically.
            </p>
          </div>
          
          <div className="si-faq-item">
            <h3>Can I fetch data at build time for Server Islands?</h3>
            <p>
              Not yet. The current version requires all content to be static. Data fetching at 
              build time is planned for a future release.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="si-cta-section">
        <div className="si-cta-box">
          <h2>Ready to Try Server Islands?</h2>
          <p>
            Add one line to your landing page and experience instant SEO and 
            perfect performance. It's that simple.
          </p>
          <div className="si-cta-buttons">
            <a href="/getstarted" className="si-cta-button si-primary">
              Get Started Guide →
            </a>
            <a href="/changelog" className="si-cta-button si-secondary">
              View Changelog
            </a>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
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
    </div>
  );
}