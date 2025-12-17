import { Link } from 'bertui/router';
import '../styles/home.css';

export default function Home() {
    return (
        <div className="home-container">
            <nav className="home-nav">
                <h2 className="home-logo">⚡ BertUI v1.0.3</h2>
                <div className="home-nav-links">
                    <Link to="/" className="nav-link active">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="https://github.com/BunElysiaReact/BERTUI" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</Link>
                    <Link to="/changelog" className="nav-link">Changelog</Link>
                    <Link to="https://discord.gg/kvbXfkJG" target="_blank" rel="noopener noreferrer" className="nav-link">Discord</Link>
                    <Link to="/getstarted" className="nav-link">Get Started</Link>
                </div>
            </nav>

            <main className="home-main">
                <div className="home-hero">
                    <h1 className="home-title">
                        Build Lightning-Fast
                        <br />
                        React Apps
                    </h1>

                    <p className="home-subtitle">
                        File-based routing • Zero config • Production Ready v1.0.0 • Powered by Bun
                    </p>

                    <div className="version-badge">v1.0.0 STABLE</div>
                    
                    <div className="home-cta">
                        <Link to="/getstarted" className="btn btn-primary">
                            Get Started →
                        </Link>
                        <Link to="/about" className="btn btn-secondary">
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* --- TypeScript Note --- */}
                <div className="home-ts-note">
                    <h3 className="ts-note-title">🚧 Current State: JavaScript Focus (v1.0.0)</h3>
                    <p className="ts-note-text">
                        BertUI v1.0.0 is primarily focused on **JavaScript/JSX** files (<code>.js</code>, <code>.jsx</code>). While you can use TypeScript files (<code>.ts</code>, <code>.tsx</code>), please be aware that **IntelliSense and official <code>@types/bertui</code> support are not yet stable**.
                    </p>
                    <p className="ts-note-recommendation">
                        For the best development experience, we recommend using <code>.js</code> and <code>.jsx</code> file extensions for now.
                    </p>
                </div>

                {/* --- Speed Metrics Section with ALL 7 Images --- */}
                <div className="home-proof-of-speed">
                    <h2 className="proof-title">Unprecedented Speed. Zero Hype.</h2>
                    <p className="proof-subtitle">
                        BertUI leverages native Bun features to achieve build times that challenge any competitor.
                        What other library can surpass a **265ms** production build for a multi-page app?
                    </p>
                    
                    {/* First Row: Build Speed Comparison */}
                    <div className="speed-comparison">
                        <div className="comparison-item">
                            <h3>Vite/Next.js Build</h3>
                            <p className="comparison-time">2-5 seconds</p>
                            <img 
                                src="/images/build6 .png" 
                                alt="Traditional build times showing 2-5 seconds" 
                                className="speed-image large"
                            />
                            <p className="comparison-desc">Typical React framework build time</p>
                        </div>
                        
                        <div className="comparison-vs">VS</div>
                        
                        <div className="comparison-item bertui-highlight">
                            <h3>BertUI Build</h3>
                            <p className="comparison-time">265ms</p>
                            <img 
                                src="/images/build7.png" 
                                alt="BertUI build showing 265ms" 
                                className="speed-image large"
                            />
                            <p className="comparison-desc">BertUI's optimized production build</p>
                        </div>
                    </div>
                    
                    {/* All 6 Build Images Gallery */}
                    <div className="build-gallery">
                        <h3>Complete Build Timeline (All 6 Images)</h3>
                        <div className="gallery-grid">
                            <GalleryImage 
                                src="/images/build.png"
                                title="Initial Compilation"
                                desc="38ms for 20 files"
                            />
                            <GalleryImage 
                                src="/images/build2.png"
                                title="Route Discovery"
                                desc="11 routes mapped instantly"
                            />
                            <GalleryImage 
                                src="/images/build3.png"
                                title="CSS Optimization"
                                desc="LightningCSS processing"
                            />
                            <GalleryImage 
                                src="/images/build4.png"
                                title="Asset Pipeline"
                                desc="Image copying & optimization"
                            />
                            <GalleryImage 
                                src="/images/build5.png"
                                title="JavaScript Bundling"
                                desc="Bun.build with tree-shaking"
                            />
                            <GalleryImage 
                                src="/images/build7.png"
                                title="Final Build Complete"
                                desc="265ms total build time"
                            />
                        </div>
                    </div>
                    
                    {/* Missing Image 6 Note */}
                    <div className="missing-image-note">
                        <p><strong>Note:</strong> Image 6 (build6 .png) is shown above in the comparison. The space in the filename is intentional.</p>
                    </div>
                    
                    <div className="speed-challenge-callout">
                        <p>
                            We challenge any modern JS framework to beat a <strong>sustained 265ms build</strong> time!
                        </p>
                    </div>
                </div>

                {/* --- Features Grid --- */}
                <div className="home-features">
                    <FeatureCard
                        icon="⚡"
                        title="38ms Compilation"
                        description="Compiles 20 React files in 38ms - faster than most linters"
                    />
                    <FeatureCard
                        icon="📁"
                        title="Zero Config Routing"
                        description="Create pages/about.jsx and get /about route. No config needed."
                    />
                    <FeatureCard
                        icon="🔧"
                        title="Production Ready"
                        description="v1.0.0 is stable after 35 beta versions. Ready for production."
                    />
                    <FeatureCard
                        icon="🚀"
                        title="100ms Dev Server"
                        description="Dev server starts before you lift your finger off Enter"
                    />
                </div>

                {/* --- Get Started Section --- */}
                <div className="home-start">
                    <h2 className="home-start-title">Ready to build something amazing?</h2>
                    <p className="home-start-subtitle">Get started in seconds with a single command</p>
                    <code className="home-start-code">bunx create-bertui my-app</code>
                    <div className="home-cta-secondary">
                        <Link to="/getstarted" className="btn btn-primary btn-large">
                            View Complete Guide →
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="home-footer">
                <p>Built with ⚡ BertUI v1.0.0 • MIT License • Production Ready</p>
                <p className="footer-note">
                    35 beta versions (v0.1.0-v0.4.6) led to this stable foundation
                </p>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="feature-card">
            <div className="feature-icon">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
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