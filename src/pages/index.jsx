import { Link } from 'bertui/router';
import '../styles/home.css';

export default function Home() {
    // NOTE: Temporarily imported React manually to bypass the bug discovered earlier.
    // import React from 'react';

    return (
        <div className="home-container">
            <nav className="home-nav">
                <h2 className="home-logo">⚡ BertUI</h2>
                <div className="home-nav-links">
                    <Link to="/" className="nav-link active">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="https://github.com/BunElysiaReact/BERTUI" target="_blank" rel="noopener noreferrer" className="nav-link">Github</Link>
                    <Link to="/changelog" className="nav-link">Changelog</Link>
                    <Link to="https://discord.gg/kvbXfkJG" target="_blank" rel="noopener noreferrer" className="nav-link">Discord</Link>
                    <Link to="/bugsincurrentversion" className="nav-link">Reported Bugs</Link>
                    <Link to="/questions" className="nav-link">Community Questions</Link>
                    <Link to="/deployment" className="nav-link">Deployment Tutorial</Link>

                </div>
            </nav>

            <main className="home-main">
                <h1 className="home-title">
                    Build Lightning-Fast
                    <br />
                    React Apps
                </h1>

                <p className="home-subtitle">
                    File-based routing • Zero config • Blazing fast HMR • Powered by Bun
                </p>

                {/* --- TypeScript Limitation Note (Formatted) --- */}
                <div className="home-ts-note">
                    <h3 className="ts-note-title">🚧 Current State: JavaScript Focus (v1.0.0)</h3>
                    <p className="ts-note-text">
                        BertUI v1.0.0 is primarily focused on **JavaScript/JSX** files (<code>.js</code>, <code>.jsx</code>). While you can use TypeScript files (<code>.ts</code>, <code>.tsx</code>), please be aware that **IntelliSense and official <code>@types/bertui</code> support are not yet stable**.
                    </p>
                    <p className="ts-note-recommendation">
                        For the best development experience, we recommend using <code>.js</code> and <code>.jsx</code> file extensions for now.
                    </p>
                    <Link to="/faq" className="btn btn-secondary btn-small">
                        More questions will be answered in the FAQ section →
                    </Link>
                </div>
                {/* ------------------------------------------- */}

                <div className="home-cta">
                    <Link to="/getstarted" className="btn btn-primary">
                        Get Started →
                    </Link>
                    <Link to="/about" className="btn btn-secondary">
                        Learn More
                    </Link>
                    <Link to="/faq" className="btn btn-secondary">
                        FAQ
                    </Link>
                </div>

                <div className="home-features">
                    <FeatureCard
                        icon="⚡"
                        title="Lightning Fast"
                        description="Built on Bun for incredible speed. Instant dev server startup and blazing fast HMR."
                    />
                    <FeatureCard
                        icon="📁"
                        title="File-Based Routing"
                        description="Create pages/about.jsx and get /about route. Dynamic routes with [param] syntax."
                    />
                    <FeatureCard
                        icon="🎨"
                        title="Zero Config"
                        description="No webpack, no babel, no config files. Just write React and ship."
                    />
                    <FeatureCard
                        icon="🔥"
                        title="Hot Module Replacement"
                        description="See your changes instantly without losing component state."
                    />
                </div>

                {/* --- Image Integration for Proof of Speed --- */}
                <div className="home-proof-of-speed">
                    <h2 className="proof-title">Unprecedented Speed. Zero Hype.</h2>
                    <p className="proof-subtitle">
                        BertUI leverages native Bun features to achieve build times that challenge any competitor.
                        What other library can surpass a **265ms** production build for a multi-page app?
                    </p>
                    
                    <div className="speed-metrics-grid">
                        <MetricDisplay 
                            title="Initial Build Time" 
                            time="2 Seconds" 
                            description="The first full-run build is fast." 
                            imageSource="../images/build4.png"
                        />
                        <MetricDisplay 
                            title="Optimized Build Time" 
                            time="265ms" 
                            description="Subsequent production builds are nearly instantaneous." 
                            imageSource="/images/build7.png" 
                        />
                    </div>
                    
                    <div className="speed-challenge-callout">
                        <p>
                            We challenge any modern JS framework to beat a **sustained 265ms build** time!
                        </p>
                    </div>
                </div>
                {/* ------------------------------------------- */}

                <div className="home-start">
                    <h2 className="home-start-title">Ready to build something amazing?</h2>
                    <p className="home-start-subtitle">Get started in seconds with a single command</p>
                    <code className="home-start-code">bunx create-bertui my-app</code>
                </div>
            </main>

            <footer className="home-footer">
                <p>Built with ⚡ BertUI • MIT License</p>
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

// New Helper Component for Speed Metrics
function MetricDisplay({ title, time, description, imageSource }) {
    return (
        <div className="metric-card">
            <h4 className="metric-title">{title}</h4>
            <div className="metric-time">{time}</div>
            <p className="metric-desc">{description}</p>
            <img src={imageSource} alt={`Terminal screenshot showing ${title} of ${time}`} className="metric-image" loading="lazy" />
        </div>
    );
}