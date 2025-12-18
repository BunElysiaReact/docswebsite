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
            icon: "🔧",
            title: "Production Ready",
            description: "v1.0.0 is stable after 35 beta versions. Ready for production."
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
                <h2 className="home-logo">⚡ BertUI v1.0.3</h2>
                <div className="home-nav-links">
                    <Link to="/" className="nav-link active">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="https://github.com/BunElysiaReact/BERTUI" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</Link>
                    <Link to="/changelog" className="nav-link">Changelog</Link>
                    <Link to="https://discord.gg/kvbXfkJG" target="_blank" rel="noopener noreferrer" className="nav-link">Discord</Link>
                    <Link to="/getstarted" className="nav-link nav-link-cta">Get Started</Link>
                    <Link to="/deployment" className="nav-link nav-link-cta">Deployment</Link>
                </div>
            </nav>

            <main className="home-main">
                {/* Hero Section with enhanced animations */}
                <div className="home-hero">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>v1.0.0 STABLE - Production Ready</span>
                    </div>

                    <h1 className="home-title hero-title-enhanced">
                        Build Lightning-Fast
                        <br />
                        <span className="title-gradient">React Apps</span>
                    </h1>

                    <p className="home-subtitle hero-subtitle-enhanced">
                        File-based routing • Zero config • 38ms compilation • Powered by Bun
                        <br />
                        <strong>The fastest React framework. Period.</strong>
                    </p>

                    <div className="version-badge-hero">v1.0.0 STABLE</div>

                    <div className="home-cta">
                        <Link to="/getstarted" className="btn btn-primary btn-enhanced">
                            <span>Get Started</span>
                            <span className="btn-arrow">→</span>
                        </Link>
                        <Link to="/about" className="btn btn-secondary btn-enhanced">
                            <span>Learn More</span>
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
                
                {/* --- NEW IMPORTANT NEWS SECTION --- */}
                <section className="important-news-section">
                    <div className="section-header">
                        <h2 className="section-title title-gradient">New in v1.0.3: Build Optimization & SEO</h2>
                        <p className="section-subtitle">A huge step for performance and searchability.</p>
                    </div>
                    
                    <div className="news-grid">
                        <div className="news-card news-card-css">
                            <div className="news-icon">💅</div>
                            <h3 className="news-title">CSS Consolidation & Minification</h3>
                            <p className="news-text">
                                In v1.0.3, all your component CSS is automatically compiled into a **single, minified CSS file** (using LightningCSS). This eliminates repetitive network requests and ensures the smallest possible payload.
                            </p>
                            <div className="news-note">
                                <p><strong>Developer Note:</strong> This pipeline is extremely fast. Feel free to organize your code into as many CSS files as you need (e.g., 50 files)—BertUI handles the optimization instantly. **Just ensure you don't rely on repeated class names for overriding styles** across separate files, as the order of minification is optimized for speed.</p>
                            </div>
                        </div>

                        <div className="news-card news-card-seo">
                            <div className="news-icon">🔎</div>
                            <h3 className="news-title">Static HTML Output for SEO</h3>
                            <p className="news-text">
                                The build process now creates **dedicated <code>.html</code> files for every route** (e.g., <code>/about.html</code>), even though the client-side routing still mounts onto the <code>#root</code> div.
                            </p>
                            <div className="news-note">
                                <p>This is a major step forward for **Search Engine Optimization (SEO)**! To take full advantage, remember to export specific <code>meta</code> tags from your page components. This was covered in the <Link to="/getstarted" className="news-link">Get Started</Link> section.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* --- END NEW SECTION --- */}


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

                {/* TypeScript Note - Enhanced */}
                <section className="ts-note-section">
                    <div className="home-ts-note">
                        <div className="ts-note-icon">⚠️</div>
                        <div className="ts-note-content">
                            <h3 className="ts-note-title">Current State: JavaScript Focus (v1.0.0)</h3>
                            <p className="ts-note-text">
                                BertUI v1.0.0 is primarily focused on <strong>JavaScript/JSX</strong> files (<code>.js</code>, <code>.jsx</code>). While you can use TypeScript files (<code>.ts</code>, <code>.tsx</code>), please be aware that <strong>IntelliSense and official <code>@types/bertui</code> support are not yet stable</strong>.
                            </p>
                            <p className="ts-note-recommendation">
                                For the best development experience, we recommend using <code>.js</code> and <code>.jsx</code> file extensions for now.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA - Enhanced */}
                <section className="home-start cta-final">
                    <div className="cta-glow"></div>
                    <h2 className="home-start-title">Ready to build something amazing?</h2>
                    <p className="home-start-subtitle">Join developers building the fastest React apps on the planet</p>
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
                            <div className="cta-stat-value">0</div>
                            <div className="cta-stat-label">Config Files</div>
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
                        <p>Built with ⚡ BertUI v1.0.3 • MIT License • Production Ready</p>
                    </div>
                    <div className="footer-links">
                        <Link to="https://github.com/BunElysiaReact/BERTUI" target="_blank" rel="noopener noreferrer">GitHub</Link>
                        <Link to="https://discord.gg/kvbXfkJG" target="_blank" rel="noopener noreferrer">Discord</Link>
                        <Link to="/changelog">Changelog</Link>
                        <Link to="/faq">FAQ</Link>
                    </div>
                </div>
                <p className="footer-note">
                    35 beta versions (v0.1.0-v0.4.6) led to this stable foundation
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