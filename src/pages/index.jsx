import React, { useState, useEffect } from 'react';
import { Link } from 'bertui/router';
import './styles/home.css';
import './styles/global.css';

export default function Home() {
    const [activeMetric, setActiveMetric] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveMetric((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const metrics = [
        { label: "Compilation", value: "38ms", subtext: "20 files", icon: "⚡" },
        { label: "Build Time", value: "265ms", subtext: "Production ready", icon: "🏗️" },
        { label: "Dev Server", value: "16ms", subtext: "Startup time", icon: "🚀" },
        { label: "HMR", value: "<50ms", subtext: "Instant updates", icon: "🔥" }
    ];

    const features = [
        {
            icon: "⚡",
            title: "38ms Compilation",
            description: "Compiles 20 React files in 38ms - faster than most linters"
        },
        {
            icon: "📁",
            title: "Zero Config Routing",
            description: "Create pages/about.jsx and get /about route. No config needed."
        },
        {
            icon: "🏝️",
            title: "Server Islands",
            description: "Optional SSG with one line. Perfect SEO without complexity."
        },
        {
            icon: "🚀",
            title: "100ms Dev Server",
            description: "Dev server starts before you lift your finger off Enter"
        }
    ];

    const buildGallery = [
        { src: "../images/build.png", title: "Initial Compilation", desc: "38ms for 20 files" },
        { src: "../images/build2.png", title: "Route Discovery", desc: "11 routes mapped instantly" },
        { src: "../images/build3.png", title: "CSS Optimization", desc: "LightningCSS processing" },
        { src: "../images/build7.png", title: "Asset Pipeline", desc: "Image copying & optimization" },
        { src: "../images/build7.png", title: "JavaScript Bundling", desc: "Bun.build with tree-shaking" },
        { src: "../images/build7.png", title: "Final Build Complete", desc: "265ms total build time" }
    ];

    return (
        <div className="home-container">
            {/* Enhanced Navigation with glassmorphism effect */}
            <nav className="home-nav">
                <h2 className="home-logo">⚡ BertUI v1.1.0</h2>
                <div className="home-nav-links">
                    <Link to="/" className="nav-link active">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="https://github.com/BunElysiaReact/BERTUI" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</Link>
                    <Link to="/changelog" className="nav-link">Changelog</Link>
                    <Link to="https://discord.gg/kvbXfkJG" target="_blank" rel="noopener noreferrer" className="nav-link">Discord</Link>
                    <Link to="/getstarted" className="nav-link nav-link-cta">Get Started</Link>
                    <Link to="/deployment" className="nav-link nav-link-cta">Deployment</Link>
                    <Link to="/questions" className="nav-link nav-link-cta">Community Questions</Link>
                </div>
            </nav>

            <main className="home-main">
                {/* Hero Section with enhanced animations */}
                <div className="home-hero">
                    <div className="hero-badge hero-badge-new">
                        <img src="../images/logo.png" alt="BertUI Logo" className="badge-logo" />
                        <span>🏝️ v1.1.0 - SERVER ISLANDS ERA</span>
                    </div>

                    <h1 className="home-title hero-title-enhanced">
                        Build Lightning-Fast
                        <br />
                        <span className="title-gradient">React Apps</span>
                        <br />
                        <span className="title-feature">with Perfect SEO</span>
                    </h1>

                    <p className="home-subtitle hero-subtitle-enhanced">
                        File-based routing • Zero config • 38ms compilation • Server Islands
                        <br />
                        <strong>The fastest React framework with optional SSG. Period.</strong>
                    </p>

                    <div className="version-badge-hero version-badge-island">
                        <span className="badge-icon">🏝️</span>
                        <span>v1.1.0 STABLE</span>
                    </div>

                    <div className="home-cta">
                        <Link to="/getstarted" className="btn btn-primary btn-enhanced">
                            <span>Get Started</span>
                            <span className="btn-arrow">→</span>
                        </Link>
                        <Link to="/server-islands" className="btn btn-island btn-enhanced">
                            <span>🏝️ Server Islands</span>
                            <span className="btn-arrow">↗</span>
                        </Link>
                    </div>

                    {/* Quick Start Command */}
                    <div className="quick-start-card">
                        <div className="quick-start-label">Quick Start</div>
                        <code className="home-start-code">bunx create-bertui my-app</code>
                        <div className="quick-start-hint">← Copy and run this command</div>
                    </div>
                </div>

                {/* NEW: Server Islands Announcement */}
                <section className="server-islands-announcement">
                    <div className="announcement-badge">🎉 NEW IN v1.1.0</div>
                    <div className="announcement-content">
                        <div className="announcement-icon">🏝️</div>
                        <div className="announcement-text">
                            <h2>Introducing Server Islands</h2>
                            <p className="announcement-subtitle">
                                The game-changing feature that gives you <strong>instant SEO</strong> and 
                                <strong> perfect performance</strong> without sacrificing React's developer experience.
                            </p>
                            <div className="announcement-features">
                                <div className="announcement-feature">
                                    <span className="feature-check">✅</span>
                                    <span>Add one line: <code>export const render = "server";</code></span>
                                </div>
                                <div className="announcement-feature">
                                    <span className="feature-check">✅</span>
                                    <span>Static HTML generated at build time</span>
                                </div>
                                <div className="announcement-feature">
                                    <span className="feature-check">✅</span>
                                    <span>Perfect for landing pages, blogs, docs</span>
                                </div>
                                <div className="announcement-feature">
                                    <span className="feature-check">✅</span>
                                    <span>Mix with client-only pages freely</span>
                                </div>
                            </div>
                            <div className="announcement-cta">
                                <Link to="/server-islands" className="btn btn-announcement">
                                    Learn About Server Islands →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Animated Metrics Section */}
                <section className="metrics-showcase">
                    <div className="section-header">
                        <h2 className="section-title">Unprecedented Speed</h2>
                        <p className="section-subtitle">Numbers that redefine fast</p>
                    </div>

                    <div className="metrics-grid">
                        {metrics.map((metric, idx) => (
                            <div
                                key={idx}
                                className={`metric-card ${activeMetric === idx ? 'metric-active' : ''}`}
                            >
                                <div className="metric-icon">{metric.icon}</div>
                                <div className="metric-value">{metric.value}</div>
                                <div className="metric-label">{metric.label}</div>
                                <div className="metric-subtext">{metric.subtext}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Speed Comparison - Enhanced */}
                <section className="home-proof-of-speed">
                    <h2 className="proof-title">The Speed Difference</h2>
                    <p className="proof-subtitle">
                        What other library can surpass a <strong>265ms</strong> production build for a multi-page app?
                    </p>

                    <div className="speed-comparison">
                        <div className="comparison-item comparison-traditional">
                            <div className="comparison-icon">🐌</div>
                            <h3>Traditional Frameworks</h3>
                            <p className="comparison-time">2-5 seconds</p>
                            <div className="comparison-bar comparison-bar-slow"></div>
                            <p className="comparison-desc">Vite, Next.js, CRA</p>
                        </div>

                        <div className="comparison-vs">VS</div>

                        <div className="comparison-item bertui-highlight">
                            <div className="comparison-badge">⚡ FASTEST</div>
                            <div className="comparison-icon">⚡</div>
                            <h3>BertUI</h3>
                            <p className="comparison-time">265ms</p>
                            <div className="comparison-bar comparison-bar-fast"></div>
                            <p className="comparison-desc">12x faster build time</p>
                        </div>
                    </div>

                    {/* Build Gallery with all 6 images */}
                    <div className="build-gallery">
                        <h3 className="gallery-title">Complete Build Timeline</h3>
                        <p className="gallery-subtitle">Every step optimized for maximum speed</p>

                        <div className="gallery-grid">
                            {buildGallery.map((img, idx) => (
                                <GalleryImage
                                    key={idx}
                                    src={img.src}
                                    title={img.title}
                                    desc={img.desc}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="speed-challenge-callout">
                        <p>We challenge any modern JS framework to beat a <strong>sustained 265ms build</strong> time!</p>
                    </div>
                </section>
                
                {/* Updated News Section with Server Islands */}
                <section className="important-news-section">
                    <div className="section-header">
                        <h2 className="section-title title-gradient">What's New in v1.1.0</h2>
                        <p className="section-subtitle">Revolutionary features that change everything</p>
                    </div>
                    
                    <div className="news-grid news-grid-three">
                        <div className="news-card news-card-island news-card-featured">
                            <div className="news-badge">🎉 GAME CHANGER</div>
                            <div className="news-icon">🏝️</div>
                            <h3 className="news-title">Server Islands</h3>
                            <p className="news-text">
                                BertUI's <strong>revolutionary feature</strong> that gives you instant SEO and perfect performance 
                                with just one line of code. Add <code>export const render = "server";</code> to any page 
                                and get static HTML at build time.
                            </p>
                            <div className="news-highlight">
                                <p><strong>Why it's special:</strong></p>
                                <ul>
                                    <li>✅ Not "Fast Vite" - Vite has no SSG at all</li>
                                    <li>✅ Not "Simple Next.js" - No complex setup</li>
                                    <li>✅ Unique: Optional SSG per page</li>
                                    <li>✅ Zero configuration required</li>
                                </ul>
                            </div>
                            <Link to="/server-islands" className="news-link-button">
                                Read Complete Guide →
                            </Link>
                        </div>

                        <div className="news-card news-card-css">
                            <div className="news-icon">💅</div>
                            <h3 className="news-title">CSS Consolidation</h3>
                            <p className="news-text">
                                All your CSS automatically compiles into a <strong>single, minified file</strong> using 
                                LightningCSS. Zero network overhead, maximum performance.
                            </p>
                            <div className="news-note">
                                <p><strong>Pro tip:</strong> Organize into 50+ CSS files if you want—BertUI optimizes 
                                instantly.</p>
                            </div>
                        </div>

                        <div className="news-card news-card-seo">
                            <div className="news-icon">🔎</div>
                            <h3 className="news-title">Enhanced SEO</h3>
                            <p className="news-text">
                                Dedicated <code>.html</code> files for every route, with full meta tag support. 
                                Perfect for search engines, even better with Server Islands.
                            </p>
                            <div className="news-note">
                                <p>Export <code>meta</code> from your components for custom SEO. See the 
                                <Link to="/getstarted" className="news-link"> Get Started</Link> guide.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid - Enhanced */}
                <section className="features-section">
                    <div className="section-header">
                        <h2 className="section-title">Everything You Need</h2>
                        <p className="section-subtitle">Zero configuration. Maximum performance.</p>
                    </div>

                    <div className="home-features">
                        {features.map((feature, idx) => (
                            <div key={idx} className="feature-card feature-card-enhanced">
                                <div className="feature-icon-large">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                                <div className="feature-shine"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Server Islands Example */}
                <section className="server-islands-example">
                    <div className="section-header">
                        <h2 className="section-title">See Server Islands in Action</h2>
                        <p className="section-subtitle">One line. Perfect SEO. Zero complexity.</p>
                    </div>

                    <div className="example-container">
                        <div className="example-code">
                            <div className="code-header">
                                <span className="code-filename">📄 src/pages/about.jsx</span>
                                <span className="code-badge">Server Island ✅</span>
                            </div>
                            <pre className="code-content">{`// Just add this one line


export const meta = {
  title: "About Us",
  description: "Learn about our company"
};

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Pre-rendered as static HTML!</p>
    </div>
  );
}`}</pre>
                        </div>

                        <div className="example-results">
                            <div className="result-item result-success">
                                <div className="result-icon">✅</div>
                                <div className="result-text">
                                    <h4>Build Output</h4>
                                    <p>Static HTML generated at build time</p>
                                </div>
                            </div>
                            <div className="result-item result-success">
                                <div className="result-icon">🔍</div>
                                <div className="result-text">
                                    <h4>Search Engines</h4>
                                    <p>See all content immediately</p>
                                </div>
                            </div>
                            <div className="result-item result-success">
                                <div className="result-icon">⚡</div>
                                <div className="result-text">
                                    <h4>Performance</h4>
                                    <p>0ms Time to First Byte</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="example-cta">
                        <Link to="/server-islands" className="btn btn-primary btn-large">
                            Read the Complete Server Islands Guide →
                        </Link>
                    </div>
                </section>

                {/* TypeScript Note - Enhanced */}
                <section className="ts-note-section">
                    <div className="home-ts-note">
                        <div className="ts-note-icon">📝</div>
                        <div className="ts-note-content">
                            <h3 className="ts-note-title">JavaScript-First Philosophy</h3>
                            <p className="ts-note-text">
                                BertUI is <strong>JavaScript-first</strong> and will remain that way. We fully support 
                                <code>.jsx</code> files with complete JSX syntax, but we don't plan to add TypeScript 
                                (<code>.tsx</code>) support.
                            </p>
                            <p className="ts-note-recommendation">
                                We believe in keeping tools simple. TypeScript adds complexity that goes against 
                                BertUI's core philosophy of "zero config, just code."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA - Enhanced */}
                <section className="home-start cta-final">
                    <div className="cta-glow"></div>
                    <h2 className="home-start-title">Ready to build something amazing?</h2>
                    <p className="home-start-subtitle">Join developers building the fastest React apps with perfect SEO</p>
                    <div className="cta-stats">
                        <div className="cta-stat">
                            <div className="cta-stat-value">38ms</div>
                            <div className="cta-stat-label">Compilation</div>
                        </div>
                        <div className="cta-stat">
                            <div className="cta-stat-value">265ms</div>
                            <div className="cta-stat-label">Build Time</div>
                        </div>
                        <div className="cta-stat">
                            <div className="cta-stat-value">🏝️</div>
                            <div className="cta-stat-label">Server Islands</div>
                        </div>
                    </div>
                    <div className="home-cta-secondary">
                        <Link to="/getstarted" className="btn btn-primary btn-large btn-pulse">
                            <span>View Complete Guide</span>
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </section>
            </main>

            {/* Enhanced Footer */}
            <footer className="home-footer">
                <div className="footer-content">
                    <div className="footer-main">
                        <p>Built with ⚡ BertUI v1.1.0 🏝️ • MIT License • Production Ready</p>
                    </div>
                    <div className="footer-links">
                        <Link to="https://github.com/BunElysiaReact/BERTUI" target="_blank" rel="noopener noreferrer">GitHub</Link>
                        <Link to="https://discord.gg/kvbXfkJG" target="_blank" rel="noopener noreferrer">Discord</Link>
                        <Link to="/changelog">Changelog</Link>
                        <Link to="/server-islands">Server Islands</Link>
                        <Link to="/faq">FAQ</Link>
                    </div>
                </div>
                <p className="footer-note">
                    v1.1.0: The Server Islands era begins 🏝️
                </p>
            </footer>
        </div>
    );
}

function GalleryImage({ src, title, desc }) {
    return (
        <div className="gallery-item">
            <img
                src={src}
                alt={title}
                className="gallery-image"
                loading="lazy"
            />
            <div className="gallery-caption">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    );
}