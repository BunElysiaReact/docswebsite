import { Link } from 'bertui/router';
import '../styles/getting-started.css';
import React from 'react';
export default function GettingStarted() {
  return (
    <div className="getting-started-container">
      {/* Navigation */}
      <nav className="gs-nav">
        <Link to="/" className="gs-logo">
          ⚡ BertUI
        </Link>
        <Link to="/" className="gs-nav-back">
          ← Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <main className="gs-main">
        {/* Hero Section */}
        <div className="gs-hero">
          <h1 className="gs-hero-title">
            Getting Started with BertUI
          </h1>
          <p className="gs-hero-subtitle">
            Everything you need to know to build lightning-fast React apps
          </p>
        </div>

        {/* Quick Start */}
        <Section 
          icon="🚀"
          title="1. Installation"
          id="installation"
        >
          <p className="gs-text">
            Getting started with BertUI is incredibly simple. You need <strong>Bun</strong> installed on your system first. 
            If you don't have it, install it from <a href="https://bun.sh" target="_blank" rel="noopener noreferrer" className="gs-link">bun.sh</a>.
          </p>
          
          <CodeBlock>
{`# Create a new BertUI app
bunx create-bertui my-app

# Navigate to your project
cd my-app

# Start the dev server
bun run dev`}
          </CodeBlock>

          <p className="gs-text">
            That's it! Your app is now running at <code className="gs-inline-code">http://localhost:3000</code> 🎉
          </p>

          <div className="gs-callout">
            <strong>⚡ Lightning Fast:</strong> The entire process takes less than 10 seconds!
          </div>
        </Section>

        {/* Project Structure */}
        <Section 
          icon="📁"
          title="2. Project Structure"
          id="structure"
        >
          <p className="gs-text">
            When you create a BertUI app, you get a complete, production-ready structure:
          </p>

          <CodeBlock>
{`my-app/
├── src/
│   ├── pages/          # 📄 Your routes (the magic happens here!)
│   │   ├── index.jsx   # Home page → /
│   │   ├── about.jsx   # About page → /about
│   │   └── blog/
│   │       ├── index.jsx      # Blog list → /blog
│   │       └── [slug].jsx     # Dynamic route → /blog/:slug
│   ├── components/     # 🧩 Reusable components
│   └── styles/         # 🎨 CSS files
│       ├── global.css
│       ├── home.css
│       └── about.css
├── public/             # Static assets (images, etc.)
├── .env.example        # Environment variables template
├── bertui.config.js    # App configuration
└── package.json`}
          </CodeBlock>

          <div className="gs-info-box">
            <h4 className="gs-info-title">💡 Key Folders:</h4>
            <ul className="gs-info-list">
              <li><strong>src/pages/</strong> - Every file here becomes a route automatically</li>
              <li><strong>src/components/</strong> - Shared components across your app</li>
              <li><strong>src/styles/</strong> - CSS files (import them directly in components!)</li>
              <li><strong>public/</strong> - Static files served at root (favicon, images, etc.)</li>
            </ul>
          </div>
        </Section>

        {/* React Components */}
        <Section 
          icon="⚛️"
          title="3. React Components (No Imports Needed!)"
          id="components"
        >
          <p className="gs-text">
            BertUI uses React components, but here's the amazing part: <strong>you don't need to import React!</strong>
          </p>

          <CodeBlock>
{`// ✅ This works perfectly in BertUI!
// No "import React from 'react'" needed!

export default function MyComponent() {
  return (
    <div>
      <h1>Hello, BertUI!</h1>
      <p>No React import required!</p>
    </div>
  );
}`}
          </CodeBlock>

          <div className="gs-callout">
            <strong>🎯 Why?</strong> BertUI automatically injects React imports during compilation. 
            One less thing to worry about!
          </div>

          <h4 className="gs-section-subtitle">
            Basic React Component Structure:
          </h4>

          <CodeBlock>
{`export default function ComponentName() {
  // Your component logic here
  
  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}`}
          </CodeBlock>

          <p className="gs-text">
            That's it! If you know React, you know BertUI. No new syntax, no magic - just React.
          </p>
        </Section>

        {/* File-Based Routing */}
        <Section 
          icon="🗺️"
          title="4. File-Based Routing (The Magic!)"
          id="routing"
        >
          <p className="gs-text">
            This is where BertUI shines. <strong>Every file in <code className="gs-inline-code">src/pages/</code> 
            automatically becomes a route.</strong> No configuration needed!
          </p>

          <h4 className="gs-section-subtitle">Static Routes:</h4>

          <div className="gs-table">
            <div className="gs-table-header">
              <div>File Path</div>
              <div>URL Route</div>
            </div>
            <div className="gs-table-row">
              <div><code>src/pages/index.jsx</code></div>
              <div><code>/</code> (home page)</div>
            </div>
            <div className="gs-table-row">
              <div><code>src/pages/about.jsx</code></div>
              <div><code>/about</code></div>
            </div>
            <div className="gs-table-row">
              <div><code>src/pages/contact.jsx</code></div>
              <div><code>/contact</code></div>
            </div>
            <div className="gs-table-row">
              <div><code>src/pages/blog/index.jsx</code></div>
              <div><code>/blog</code></div>
            </div>
          </div>

          <h4 className="gs-section-subtitle">Dynamic Routes:</h4>

          <p className="gs-text">
            Use <code className="gs-inline-code">[param]</code> syntax for dynamic segments:
          </p>

          <div className="gs-table">
            <div className="gs-table-header">
              <div>File Path</div>
              <div>URL Route</div>
            </div>
            <div className="gs-table-row">
              <div><code>src/pages/blog/[slug].jsx</code></div>
              <div><code>/blog/:slug</code></div>
            </div>
            <div className="gs-table-row">
              <div><code>src/pages/user/[id].jsx</code></div>
              <div><code>/user/:id</code></div>
            </div>
            <div className="gs-table-row">
              <div><code>src/pages/shop/[category]/[item].jsx</code></div>
              <div><code>/shop/:category/:item</code></div>
            </div>
          </div>

          <h4 className="gs-section-subtitle">Accessing Route Parameters:</h4>

          <CodeBlock>
{`// src/pages/blog/[slug].jsx
export default function BlogPost({ params }) {
  // Access the slug parameter
  const { slug } = params;
  
  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Reading post with slug: {slug}</p>
    </div>
  );
}`}
          </CodeBlock>

          <div className="gs-callout">
            <strong>🔥 Pro Tip:</strong> Dynamic routes automatically receive a <code className="gs-inline-code">params</code> prop 
            containing all URL parameters!
          </div>
        </Section>

        {/* Navigation */}
        <Section 
          icon="🧭"
          title="5. Navigation (The Only New Thing to Learn!)"
          id="navigation"
        >
          <p className="gs-text">
            This is literally the <strong>only new thing</strong> you need to learn. Use the <code className="gs-inline-code">Link</code> component 
            from <code className="gs-inline-code">bertui/router</code> for navigation:
          </p>

          <CodeBlock>
{`import { Link } from 'bertui/router';

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}`}
          </CodeBlock>

          <h4 className="gs-section-subtitle">Why Link instead of &lt;a&gt;?</h4>

          <p className="gs-text">
            The <code className="gs-inline-code">Link</code> component enables client-side navigation 
            (no page reloads!) for a smooth, app-like experience.
          </p>

          <h4 className="gs-section-subtitle">Programmatic Navigation:</h4>

          <CodeBlock>
{`import { useRouter } from 'bertui/router';

export default function LoginButton() {
  const { navigate } = useRouter();
  
  const handleLogin = () => {
    // Do login logic...
    // Then navigate
    navigate('/dashboard');
  };
  
  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}`}
          </CodeBlock>
        </Section>

        {/* CSS Styling */}
        <Section 
          icon="🎨"
          title="6. Styling with CSS"
          id="styling"
        >
          <p className="gs-text">
            BertUI v0.3.7+ has <strong>full CSS import support</strong>! Just import CSS files directly 
            in your components:
          </p>

          <CodeBlock>
{`// src/pages/home.jsx
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome!</h1>
    </div>
  );
}`}
          </CodeBlock>

          <CodeBlock>
{`/* src/styles/home.css */
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.home-title {
  font-size: 3rem;
  color: #667eea;
  text-align: center;
}`}
          </CodeBlock>

          <div className="gs-info-box">
            <h4 className="gs-info-title">📝 Styling Best Practices:</h4>
            <ul className="gs-info-list">
              <li>Put global styles in <code className="gs-inline-code">src/styles/global.css</code></li>
              <li>Create component-specific CSS files (e.g., <code className="gs-inline-code">home.css</code>, <code className="gs-inline-code">about.css</code>)</li>
              <li>Import CSS at the top of your component files</li>
              <li>Use descriptive class names to avoid conflicts</li>
            </ul>
          </div>
        </Section>

        {/* Environment Variables */}
        <Section 
          icon="🔐"
          title="7. Environment Variables"
          id="env-variables"
        >
          <p className="gs-text">
            BertUI supports environment variables for configuration. Create a <code className="gs-inline-code">.env</code> file 
            in your project root:
          </p>

          <CodeBlock>
{`# .env file
# Only variables with BERTUI_ or PUBLIC_ prefix are exposed

PUBLIC_APP_NAME=My Awesome App
PUBLIC_API_URL=https://api.myapp.com
BERTUI_USERNAME=John Doe

# ⚠️ Never put secrets in PUBLIC_ variables!
SECRET_API_KEY=keep_this_secret`}
          </CodeBlock>

          <h4 className="gs-section-subtitle">Using Environment Variables:</h4>

          <CodeBlock>
{`// Access in your components
export default function App() {
  const appName = process.env.PUBLIC_APP_NAME || 'My App';
  const apiUrl = process.env.PUBLIC_API_URL;
  
  return (
    <div>
      <h1>{appName}</h1>
      <p>API: {apiUrl}</p>
    </div>
  );
}`}
          </CodeBlock>

          <div className="gs-callout gs-warning">
            <strong>⚠️ Important:</strong> Only variables prefixed with <code className="gs-inline-code">PUBLIC_</code> or <code className="gs-inline-code">BERTUI_</code> are 
            available in the browser. Never put sensitive secrets in these!
          </div>
        </Section>

        {/* Configuration */}
        <Section 
          icon="⚙️"
          title="8. Configuration (bertui.config.js)"
          id="configuration"
        >
          <p className="gs-text">
            Customize your app with <code className="gs-inline-code">bertui.config.js</code> in your project root:
          </p>

          <CodeBlock>
{`// bertui.config.js
export default {
  meta: {
    title: "My BertUI App",
    description: "An amazing app built with BertUI",
    keywords: "react, bun, fast",
    author: "Your Name",
    themeColor: "#667eea",
    lang: "en",
    
    // Open Graph (for social sharing)
    ogTitle: "My BertUI App",
    ogDescription: "Check out my awesome app!",
    ogImage: "/og-image.png"
  },
  
  appShell: {
    loading: true,
    loadingText: "Loading...",
    backgroundColor: "#ffffff"
  }
};`}
          </CodeBlock>

          <div className="gs-info-box">
            <h4 className="gs-info-title">🏷️ Per-Page Meta Tags:</h4>
            <p className="gs-text">You can also add meta tags per page:</p>
            <CodeBlock>
{`// src/pages/about.jsx
export const meta = {
  title: "About Us - My App",
  description: "Learn about our team",
  keywords: "about, team"
};

export default function About() {
  return <div>About content...</div>;
}`}
            </CodeBlock>
            <p className="gs-text gs-note">
              <strong>Note:</strong> Meta tags only work in production builds (<code className="gs-inline-code">bun run build</code>), 
              not in dev server.
            </p>
          </div>
        </Section>

        {/* Adding Dependencies */}
        <Section 
          icon="📦"
          title="9. Adding npm Packages"
          id="dependencies"
        >
          <p className="gs-text">
            BertUI supports the <strong>entire npm ecosystem</strong>. Install any package you need:
          </p>

          <CodeBlock>
{`# Install any npm package
bun add axios
bun add @tanstack/react-query
bun add ernest-logger
bun add lodash`}
          </CodeBlock>

          <h4 className="gs-section-subtitle">Using Installed Packages:</h4>

          <CodeBlock>
{`// Example with fetch (built-in)
export default function DataComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  
  return <div>{JSON.stringify(data)}</div>;
}`}
          </CodeBlock>

          <div className="gs-callout">
            <strong>🎯 Works with everything:</strong> React Query, Zustand, Axios, Lodash, 
            UI libraries - if it works with React, it works with BertUI!
          </div>
        </Section>

        {/* Building for Production */}
        <Section 
          icon="🏗️"
          title="10. Building for Production"
          id="production"
        >
          <p className="gs-text">
            When you're ready to deploy, build your app:
          </p>

          <CodeBlock>
{`# Build for production
bun run build

# Preview the build locally
bun run preview`}
          </CodeBlock>

          <p className="gs-text">
            This creates an optimized <code className="gs-inline-code">dist/</code> folder with:
          </p>

          <ul className="gs-list">
            <li>✅ Minified JavaScript bundles</li>
            <li>✅ Optimized CSS files</li>
            <li>✅ SEO-friendly HTML for each route</li>
            <li>✅ Code splitting per route</li>
            <li>✅ Tree-shaken dependencies</li>
          </ul>

          <h4 className="gs-section-subtitle">Deploy Anywhere:</h4>

          <div className="gs-deploy-grid">
            <div className="gs-deploy-card">
              <h5>Vercel</h5>
              <CodeBlock>bunx vercel</CodeBlock>
            </div>
            <div className="gs-deploy-card">
              <h5>Netlify</h5>
              <CodeBlock>bunx netlify deploy</CodeBlock>
            </div>
            <div className="gs-deploy-card">
              <h5>Static Hosting</h5>
              <p className="gs-text gs-small">Upload <code className="gs-inline-code">dist/</code> to any host</p>
            </div>
          </div>
        </Section>

        {/* Template Breakdown */}
        <Section 
          icon="📝"
          title="11. Understanding the Default Template"
          id="template"
        >
          <p className="gs-text">
            The template you get with <code className="gs-inline-code">bunx create-bertui</code> is fully functional. 
            Let's break down what you can edit:
          </p>

          <h4 className="gs-section-subtitle">Files You'll Edit Most:</h4>

          <div className="gs-file-list">
            <FileItem 
              file="src/pages/index.jsx"
              description="Your home page - edit this to change the landing page"
            />
            <FileItem 
              file="src/pages/about.jsx"
              description="About page - customize with your info"
            />
            <FileItem 
              file="src/pages/blog/"
              description="Blog section - add more blog posts or delete if not needed"
            />
            <FileItem 
              file="src/styles/*.css"
              description="All styling - change colors, fonts, layouts here"
            />
            <FileItem 
              file="bertui.config.js"
              description="App metadata - title, description, social sharing info"
            />
            <FileItem 
              file=".env"
              description="Environment variables - API keys, configuration"
            />
            <FileItem 
              file="public/"
              description="Static assets - replace favicon, add images"
            />
          </div>

          <h4 className="gs-section-subtitle">What You Can Delete:</h4>

          <ul className="gs-list">
            <li>The entire <code className="gs-inline-code">blog/</code> folder if you don't need a blog</li>
            <li>Any pages you don't want (about, contact, etc.)</li>
            <li>CSS files for pages you delete</li>
            <li>Sample components in <code className="gs-inline-code">components/</code></li>
          </ul>

          <div className="gs-callout">
            <strong>💡 Start Fresh:</strong> Delete all sample pages and start with just <code className="gs-inline-code">index.jsx</code>. 
            Build your app from there!
          </div>
        </Section>

        {/* How It Works Under the Hood */}
        <Section 
          icon="🔧"
          title="12. How BertUI Works (Under the Hood)"
          id="how-it-works"
        >
          <p className="gs-text">
            Understanding how BertUI works helps you use it better:
          </p>

          <div className="gs-workflow">
            <WorkflowStep 
              number="1"
              title="File Discovery"
              description="BertUI scans src/pages/ and discovers all your routes automatically"
            />
            <WorkflowStep 
              number="2"
              title="Route Generation"
              description="Generates a router.js file that maps files to routes"
            />
            <WorkflowStep 
              number="3"
              title="Compilation"
              description="Transpiles JSX/TSX to JavaScript using Bun's native transpiler"
            />
            <WorkflowStep 
              number="4"
              title="Dev Server"
              description="Elysia (Bun-native) server serves your app with instant HMR"
            />
            <WorkflowStep 
              number="5"
              title="Production Build"
              description="Bun.build bundles everything with code splitting and tree-shaking"
            />
          </div>

          <div className="gs-info-box">
            <h4 className="gs-info-title">🚀 Why It's So Fast:</h4>
            <ul className="gs-info-list">
              <li><strong>Bun Runtime:</strong> Written in Zig, 3x faster than Node.js</li>
              <li><strong>Native Transpiler:</strong> No Babel overhead</li>
              <li><strong>Lightning CSS:</strong> Rust-based CSS processor</li>
              <li><strong>Elysia Server:</strong> Bun-native HTTP server</li>
              <li><strong>No Plugins:</strong> Everything is native, nothing to configure</li>
            </ul>
          </div>
        </Section>

        {/* Common Patterns */}
        <Section 
          icon="🎯"
          title="13. Common Patterns & Best Practices"
          id="patterns"
        >
          <h4 className="gs-section-subtitle">1. Shared Layout Component:</h4>

          <CodeBlock>
{`// src/components/Layout.jsx
import { Link } from 'bertui/router';
import '../styles/layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
      
      <main>{children}</main>
      
      <footer>
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
}

// Use in pages:
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
}`}
          </CodeBlock>

          <h4 className="gs-section-subtitle">2. Data Fetching:</h4>

          <CodeBlock>
{`import { useState, useEffect } from 'react';

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(\`/api/posts/\${params.slug}\`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      });
  }, [params.slug]);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}`}
          </CodeBlock>

          <h4 className="gs-section-subtitle">3. 404 Handling:</h4>

          <CodeBlock>
{`// BertUI automatically shows a 404 page for unmatched routes
// But you can customize it:

// src/pages/404.jsx (optional)
export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}`}
          </CodeBlock>
        </Section>

        {/* Troubleshooting */}
        <Section 
          icon="🐛"
          title="14. Troubleshooting"
          id="troubleshooting"
        >
          <div className="gs-troubleshoot">
            <TroubleshootItem 
              problem="Port 3000 already in use"
              solution="Use a different port: bun run dev --port 8080"
            />
            <TroubleshootItem 
              problem="CSS not loading"
              solution="Make sure you're importing CSS at the top of your component file"
            />
            <TroubleshootItem 
              problem="Environment variables not working"
              solution="1. Use BERTUI_ or PUBLIC_ prefix, 2. Restart dev server after changes"
            />
            <TroubleshootItem 
              problem="Component not updating"
              solution="Check for JavaScript errors in browser console, HMR might have failed"
            />
            <TroubleshootItem 
              problem="Build failing"
              solution="Check for TypeScript errors if using .tsx files, ensure all imports are correct"
            />
          </div>
        </Section>

        {/* Next Steps */}
        <div className="gs-next-steps">
          <h2>🎉 You're Ready to Build!</h2>
          <p>You now know everything you need to create amazing apps with BertUI.</p>
          
          <div className="gs-cta-grid">
            <Link to="/" className="gs-cta-button gs-primary">
              ← Back to Home
            </Link>
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
      </main>

      {/* Footer */}
      <footer className="gs-footer">
        <p>Built with ⚡ BertUI • MIT License</p>
      </footer>
    </div>
  );
}

// Helper Components
function Section({ icon, title, id, children }) {
  return (
    <section className="gs-section" id={id}>
      <h2 className="gs-section-title">
        <span className="gs-section-icon">{icon}</span>
        {title}
      </h2>
      <div className="gs-section-content">
        {children}
      </div>
    </section>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="gs-code-block">
      <code>{children}</code>
    </pre>
  );
}

function FileItem({ file, description }) {
  return (
    <div className="gs-file-item">
      <code className="gs-file-name">{file}</code>
      <p className="gs-file-desc">{description}</p>
    </div>
  );
}

function WorkflowStep({ number, title, description }) {
  return (
    <div className="gs-workflow-step">
      <div className="gs-workflow-number">{number}</div>
      <div className="gs-workflow-content">
        <h5 className="gs-workflow-title">{title}</h5>
        <p className="gs-workflow-desc">{description}</p>
      </div>
    </div>
  );
}

function TroubleshootItem({ problem, solution }) {
  return (
    <div className="gs-troubleshoot-item">
      <div className="gs-problem">
        <strong>Problem:</strong> {problem}
      </div>
      <div className="gs-solution">
        <strong>Solution:</strong> {solution}
      </div>
    </div>
  );
}