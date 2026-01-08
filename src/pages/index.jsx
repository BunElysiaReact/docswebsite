import React, { useState, useEffect } from 'react';
import { Link } from 'bertui/router';
import './styles/home.css';
import './styles/global.css';

// Import some bertui-icons for demonstration
const iconComponents = {
  ArrowRight: () => '→',
  Activity: () => '📈',
  User: () => '👤',
  Star: () => '⭐',
  Heart: () => '❤️',
  Bell: () => '🔔',
  Zig: () => '⚡',
  Cpp: () => '⚙️',
  WebGL: () => '🎨',
  Typescript: () => '📘',
  Robot: () => '🤖',
  Sitemap: () => '🗺️'
};

export default function Home() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: "Compilation", value: "38ms", subtext: "20 files", icon: "⚡" },
    { label: "Build Time", value: "265ms", subtext: "Production ready", icon: "🏗️" },
    { label: "Dev Server", value: "494ms", subtext: "Startup time", icon: "🚀" },
    { label: "HMR", value: "<50ms", subtext: "Instant updates", icon: "🔥" },
    { label: "Icon Render", value: "1.5ms", subtext: "Zig-powered", icon: "⚡" }
  ];

  const features = [
    {
      icon: "🏝️",
      title: "Server Islands",
      description: "One-line SSG: export const render = 'server' for perfect SEO"
    },
    {
      icon: "🤖",
      title: "Auto SEO Files",
      description: "Auto-generated robots.txt & sitemap.xml with zero config"
    },
    {
      icon: "📘",
      title: "Full TypeScript",
      description: "Complete .d.ts definitions for all BertUI APIs"
    },
    {
      icon: "⚡",
      title: "Zig-Powered Icons",
      description: "bertui-icons: 10x faster with text overlays"
    }
  ];

  const ecosystem = [
    {
      name: "bertui-icons",
      description: "Zig-powered icons, 10x faster than lucide-react",
      status: "✅ Available",
      icon: "⚡",
      features: ["Text overlays", "1.5ms renders", "Zero bundle bloat"],
      link: "/icons"
    },
    {
      name: "bertui-axios",
      description: "C++ HTTP client with Bun FFI (5-10x faster)",
      status: "Q1 2025",
      icon: "⚙️",
      features: ["C++ compiled", "Axios-compatible", "Built-in caching"],
      link: "#"
    },
    {
      name: "bertui-animation",
      description: "GPU-accelerated animations at 60fps",
      status: "Q2 2025",
      icon: "🎨",
      features: ["WebGL-powered", "Physics engine", "GPU rendering"],
      link: "#"
    }
  ];

  const buildGallery = [
    { src: "../images/build.png", title: "Initial Compilation", desc: "38ms for 20 files" },
    { src: "../images/build2.png", title: "Route Discovery", desc: "Auto file-based routing" },
    { src: "../images/build3.png", title: "CSS Optimization", desc: "LightningCSS processing" },
    { src: "../images/build7.png", title: "SEO Generation", desc: "robots.txt & sitemap.xml" }
  ];

  return (
    <div className="home-container">
      {/* Enhanced Navigation */}
      <nav className="home-nav">
        <div className="home-logo-container">
          <span className="logo-icon">⚡</span>
          <h2 className="home-logo">BertUI v1.1.1</h2>
          <span className="version-badge">The Complete SEO Powerhouse</span>
        </div>
        <div className="home-nav-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/icons" className="nav-link">Icons Demo</Link>
          <Link to="/server-islands" className="nav-link">Server Islands</Link>
          <Link to="https://github.com/BunElysiaReact/BERTUI" target="_blank" className="nav-link">GitHub</Link>
          <Link to="/getstarted" className="nav-link nav-link-cta">Get Started</Link>
        </div>
      </nav>

      <main className="home-main">
        {/* Hero Section */}
        <section className="home-hero">
          <div className="hero-badges">
            <div className="hero-badge">
              <span className="badge-icon">🎉</span>
              <span>v1.1.1 STABLE</span>
            </div>
            <div className="hero-badge">
              <span className="badge-icon">🏝️</span>
              <span>Server Islands</span>
            </div>
            <div className="hero-badge">
              <span className="badge-icon">⚡</span>
              <span>Zig-Powered</span>
            </div>
          </div>

          <h1 className="home-title">
            Build Lightning-Fast
            <br />
            <span className="title-gradient">React Apps</span>
            <br />
            <span className="title-sub">with Perfect SEO</span>
          </h1>

          <p className="home-subtitle">
            265ms builds • Zero config • Auto-generated sitemaps
            <br />
            Full TypeScript support • Server Islands • Zig-powered ecosystem
          </p>

          <div className="home-cta">
            <Link to="/getstarted" className="btn btn-primary btn-large">
              <span>Get Started</span>
              <span className="btn-icon">→</span>
            </Link>
            <Link to="/icons" className="btn btn-secondary btn-large">
              <span>⚡ Try bertui-icons</span>
            </Link>
          </div>

          {/* Quick Start */}
          <div className="quick-start">
            <div className="quick-start-label">Quick Start</div>
            <code className="quick-start-code">bunx create-bertui my-app</code>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="stats-banner">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-value">265ms</div>
              <div className="stat-label">Build Time</div>
            </div>
            <div className="stat">
              <div className="stat-value">494ms</div>
              <div className="stat-label">Dev Server</div>
            </div>
            <div className="stat">
              <div className="stat-value">1.5ms</div>
              <div className="stat-label">Icon Render</div>
            </div>
            <div className="stat">
              <div className="stat-value">🤖</div>
              <div className="stat-label">Auto SEO</div>
            </div>
          </div>
        </section>

        {/* Animated Metrics */}
        <section className="metrics-section">
          <h2 className="section-title">Performance Metrics</h2>
          <p className="section-subtitle">Numbers that redefine fast development</p>
          
          <div className="metrics-grid">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`metric-card ${activeMetric === idx ? 'active' : ''}`}
              >
                <div className="metric-icon">{metric.icon}</div>
                <div className="metric-content">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-subtext">{metric.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BertUI Ecosystem */}
        <section className="ecosystem-section">
          <div className="section-header">
            <h2 className="section-title">The BertUI Speed Stack</h2>
            <p className="section-subtitle">
              We don't just use tools — we rewrite them in the fastest languages possible
            </p>
          </div>

          <div className="ecosystem-cards">
            {ecosystem.map((item, idx) => (
              <div key={idx} className="ecosystem-card">
                <div className="ecosystem-card-header">
                  <div className="ecosystem-icon">{item.icon}</div>
                  <div className="ecosystem-status">{item.status}</div>
                </div>
                <h3 className="ecosystem-name">{item.name}</h3>
                <p className="ecosystem-description">{item.description}</p>
                <div className="ecosystem-features">
                  {item.features.map((feature, fIdx) => (
                    <span key={fIdx} className="ecosystem-feature">
                      ✅ {feature}
                    </span>
                  ))}
                </div>
                {item.link !== '#' && (
                  <Link to={item.link} className="ecosystem-link">
                    Try Now →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="ecosystem-note">
            <p>
              <strong>Why BertUI-exclusive packages?</strong> Perfect integration, 
              zero compatibility issues, and 10-100x performance gains over JavaScript implementations.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <h2 className="section-title">Everything You Need</h2>
          <p className="section-subtitle">Zero configuration. Maximum performance.</p>

          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TypeScript Announcement */}
        <section className="typescript-section">
          <div className="typescript-card">
            <div className="typescript-header">
              <div className="typescript-icon">📘</div>
              <h3 className="typescript-title">Full TypeScript Support</h3>
            </div>
            <div className="typescript-content">
              <p>
                BertUI v1.1.1 now includes <strong>complete .d.ts type definitions</strong> for the entire API.
                Get IntelliSense and type safety without any setup.
              </p>
              <div className="typescript-features">
                <div className="typescript-feature">
                  <span className="feature-check">✅</span>
                  <span>Complete type definitions for all BertUI functions</span>
                </div>
                <div className="typescript-feature">
                  <span className="feature-check">✅</span>
                  <span>Auto-completion in VS Code and WebStorm</span>
                </div>
                <div className="typescript-feature">
                  <span className="feature-check">✅</span>
                  <span>Type-safe props for all components</span>
                </div>
                <div className="typescript-feature">
                  <span className="feature-check">✅</span>
                  <span>Zero configuration required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Features */}
        <section className="seo-section">
          <div className="section-header">
            <h2 className="section-title">SEO Perfection Complete</h2>
            <p className="section-subtitle">Auto-generated SEO files with zero config</p>
          </div>

          <div className="seo-features">
            <div className="seo-feature">
              <div className="seo-icon">🤖</div>
              <div className="seo-content">
                <h3>Auto-Generated robots.txt</h3>
                <p>SEO-friendly crawler instructions generated automatically at build time.</p>
              </div>
            </div>
            <div className="seo-feature">
              <div className="seo-icon">🗺️</div>
              <div className="seo-content">
                <h3>Auto-Generated sitemap.xml</h3>
                <p>All routes indexed automatically. Perfect for search engines.</p>
              </div>
            </div>
            <div className="seo-feature">
              <div className="seo-icon">🏝️</div>
              <div className="seo-content">
                <h3>Server Islands</h3>
                <p>One line: <code>export const render = "server"</code> for static HTML generation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BertUI Icons Showcase */}
        <section className="icons-section">
          <div className="section-header">
            <h2 className="section-title">⚡ BertUI Icons</h2>
            <p className="section-subtitle">
              The world's fastest icon library. Powered by Zig + Bun FFI.
            </p>
          </div>

          <div className="icons-demo">
            <div className="icons-grid">
              <div className="icon-demo">
                <div className="icon-display">⭐</div>
                <div className="icon-info">
                  <h4>Lucide-Compatible API</h4>
                  <p>Drop-in replacement for lucide-react</p>
                </div>
              </div>
              <div className="icon-demo">
                <div className="icon-display">5</div>
                <div className="icon-info">
                  <h4>Text Overlays</h4>
                  <p>Add dynamic text/numbers inside any icon</p>
                </div>
              </div>
              <div className="icon-demo">
                <div className="icon-display">📦</div>
                <div className="icon-info">
                  <h4>Zero Bundle Bloat</h4>
                  <p>Import unlimited icons without size worries</p>
                </div>
              </div>
              <div className="icon-demo">
                <div className="icon-display">⚡</div>
                <div className="icon-info">
                  <h4>Zig-Powered</h4>
                  <p>10x faster rendering with Bun FFI</p>
                </div>
              </div>
            </div>

            <div className="icons-code">
              <div className="code-header">
                <span className="code-language">JSX</span>
                <span className="code-label">Example Usage</span>
              </div>
              <pre className="code-content">{`import { ArrowRight, Bell } from 'bertui-icons';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <span dangerouslySetInnerHTML={{ __html: ArrowRight() }} />
      
      {/* With text overlay */}
      <span dangerouslySetInnerHTML={{ 
        __html: Bell({ children: '5', color: 'red' }) 
      }} />
    </div>
  );
}`}</pre>
            </div>
          </div>

          <div className="icons-cta">
            <Link to="/icons" className="btn btn-primary">
              <span>Try the Interactive Demo</span>
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </section>

        {/* Build Gallery */}
        <section className="gallery-section">
          <h2 className="section-title">Build Timeline</h2>
          <p className="section-subtitle">Every step optimized for maximum speed</p>

          <div className="gallery-grid">
            {buildGallery.map((item, idx) => (
              <div key={idx} className="gallery-item">
                <div className="gallery-image">
                  <img src={item.src} alt={item.title} loading="lazy" />
                </div>
                <div className="gallery-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build at Lightspeed?</h2>
            <p className="cta-subtitle">
              Join developers building the fastest React apps with perfect SEO
            </p>
            <div className="cta-stats">
              <div className="cta-stat">
                <div className="cta-stat-value">265ms</div>
                <div className="cta-stat-label">Production Build</div>
              </div>
              <div className="cta-stat">
                <div className="cta-stat-value">🏝️</div>
                <div className="cta-stat-label">Server Islands</div>
              </div>
              <div className="cta-stat">
                <div className="cta-stat-value">⚡</div>
                <div className="cta-stat-label">Zig-Powered</div>
              </div>
            </div>
            <div className="cta-buttons">
              <Link to="/getstarted" className="btn btn-primary btn-large">
                <span>Get Started Now</span>
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/icons" className="btn btn-secondary btn-large">
                <span>Try bertui-icons</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-main">
            <p>Built with ⚡ BertUI v1.1.1 🏝️ • MIT License • Production Ready</p>
          </div>
          <div className="footer-links">
            <Link to="https://github.com/BunElysiaReact/BERTUI" target="_blank">GitHub</Link>
            <Link to="/getstarted">Docs</Link>
            <Link to="/icons">Icons</Link>
            <Link to="/server-islands">Server Islands</Link>
            <Link to="https://discord.gg/kvbXfkJG" target="_blank">Discord</Link>
          </div>
        </div>
        <p className="footer-note">
          v1.1.1: The Complete SEO Powerhouse 🤖
        </p>
      </footer>
    </div>
  );
}