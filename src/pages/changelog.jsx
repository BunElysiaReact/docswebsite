import "../styles/changelog.css"

export default function Changelog() {
    return (
        <section className="changelog-page">
            <header>
                <h1>BertUI Changelog</h1>
                <p>The journey to a stable, production-ready foundation.</p>
            </header>

            {/* -- MAJOR RELEASE CARD -- */}
            <div className="changelog-entry"> v1.0.1 comes with minor css path fixes in build</div>
            <div className="changelog-entry major-release">
                <div className="version-badge">v1.0.0</div>
                <h2>BertUI 1.0: The Stable Foundation</h2>
                <p className="release-subtitle"><strong>Released:</strong> [Today's Date] | <strong>Status:</strong> 🟢 Production Ready</p>

                <div className="announcement">
                    <h3>🏁 The Beta Journey is Complete</h3>
                    <p>
                        Version 1.0 marks the official, stable release of BertUI. The previous 35 beta versions were a focused, intense sprint to eliminate bugs and harden every core feature based on real usage. We've reached the foundation we were building towards.
                    </p>
                    <p>
                        <strong>What this means for you:</strong> The core API is now stable. BertUI follows Semantic Versioning from this point forward, and it is ready for production projects.
                    </p>
                </div>

                <div className="features">
                    <h3>✨ What's New & Solidified</h3>
                    <ul>
                        <li><strong>Stable Core API:</strong> The zero-config workflow, file-based routing, and build pipeline are now guaranteed for compatibility.</li>
                        <li><strong>Production Guarantee:</strong> All critical bugs from the beta phase are resolved. The toolchain is reliable.</li>
                        <li><strong>Commitment to SemVer:</strong> Future updates will be clearly communicated as Major, Minor, or Patch releases.</li>
                    </ul>
                </div>

                <div className="finalized">
                    <h3>✅ Features Locked In</h3>
                    <p>The entire feature set that made the beta fast and unique is now stable:</p>
                    <ul>
                        <li>⚡ **Sub-100ms Dev Server &amp; 38ms Compilation**</li>
                        <li>📁 **Zero-Config File-Based Routing**</li>
                        <li>🖼️ **Reliable Static Asset Pipeline**</li>
                        <li>🔧 **Complete Static Site Generation (SSG)**</li>
                        <li>🎨 **Built-in CSS Processing &amp; Optimization**</li>
                        <li>🚨 **Enhanced Error Overlay &amp; Developer Experience**</li>
                    </ul>
                </div>
                <p className="get-started-call">
                    <strong>New to BertUI?</strong> Start here. This is the stable foundation. <a href="/getstarted">Get Started Guide →</a>
                </p>
            </div>
            {/* -- End of 1.0 Card -- */}

            <hr />

            <div className="beta-history">
                <h3>Beta Phase History (v0.1.0 - v0.4.6)</h3>
                <p>The following log documents the rapid development and improvement phase that led to the stable 1.0 release.</p>
                {/* PASTE THE EXISTING BETA CHANGELOG ENTRIES HERE */}
                              <div className="changelog-entry latest">
                <h2>0.4.7 (Latest Beta) - Build System Overhaul</h2>
                
                <div className="features">
                    <h3>✨ New Features</h3>
                    <ul>
                        <li>**Complete Production Build:** Full static site generation with SEO-optimized HTML.</li>
                        <li>**Multi-Route HTML Generation:** Automatic HTML file creation for all discovered routes.</li>
                        <li>**Reliable Asset Copying:** Fixed image and static file copying from both <code>/src/images/</code> and <code>/public/</code>.</li>
                    </ul>
                </div>

                <div className="fixes">
                    <h3>🐛 Bug Fixes</h3>
                    <ul>
                        <li>Fixed production build hanging on image optimization.</li>
                        <li>Resolved missing HTML file generation in dist folder.</li>
                        <li>Fixed directory structure in production builds.</li>
                        <li>Improved build reliability and error handling.</li>
                    </ul>
                </div>
            </div>

            <div className="changelog-entry">
                <h2>0.4.5 - Asset Pipeline Fix</h2>
                <div className="fixes">
                    <h3>🐛 Bug Fixes</h3>
                    <ul>
                        <li>**Critical Fix:** Static assets now correctly copy to dist folder.</li>
                        <li>Fixed recursive directory copying for images.</li>
                        <li>Improved logging for asset copying process.</li>
                    </ul>
                </div>
            </div>

            <div className="changelog-entry">
                <h2>0.4.2 - Developer Experience</h2>
                <div className="features">
                    <h3>✨ New Features</h3>
                    <ul>
                        <li>**Error Overlay:** Full-screen error overlay for compilation and runtime errors.</li>
                        <li>**Better Stack Traces:** Improved error message formatting.</li>
                    </ul>
                </div>
            </div>

            <div className="changelog-entry">
                <h2>0.4.0 - Core Stability</h2>
                <div className="fixes">
                    <h3>🐛 Bug Fixes</h3>
                    <ul>
                        <li>**Critical Fix:** Automatic React import injection now works correctly.</li>
                        <li>Fixed JSX transpilation without manual React imports.</li>
                        <li>Restored "Zero Config" promise for React development.</li>
                    </ul>
                </div>
            </div>
            
            <hr /> 

            <div className="changelog-entry">
                <h2>0.3.9</h2>
                <div className="features">
                    <h3>✨ New Features</h3>
                    <ul>
                        <li>**CSS Import Support:** Templates now properly support external CSS imports.</li>
                        <li>**External Library Support:** Full support for importing external libraries.</li>
                        <li>**Environment Variables:** Complete <code>.env</code> file support.</li>
                    </ul>
                </div>
                <div className="fixes">
                    <h3>🐛 Bug Fixes</h3>
                    <ul>
                        <li>Fixed CSS import handling.</li>
                        <li>Resolved CSS file serving in dev server.</li>
                        <li>Fixed environment variable injection.</li>
                    </ul>
                </div>
                <div className="notes">
                    <h3>📝 Notes</h3>
                    <p>Versions 0.1.5 - 0.3.8 involved stability improvements:</p>
                    <ul>
                        <li>CSS compilation edge cases.</li>
                        <li>Router import resolution.</li>
                        <li>Build process optimization.</li>
                    </ul>
                </div>
            </div>

            <div className="changelog-entry">
                <h2>0.1.4</h2>
                <p>Attempted fix for router compilation errors.</p>
            </div>

            <div className="changelog-entry">
                <h2>0.1.3</h2>
                <p>Fixed export 'Link' not found error in router.js</p>
            </div>

            <div className="changelog-entry">
                <h2>0.1.2</h2>
                <p>Fixed missing client-exports.js module error</p>
            </div>

            <div className="changelog-entry">
                <h2>0.1.1 (2025-12-10) 🗺️ - Page Routing</h2>
                <div className="features">
                    <h3>✨ New Features</h3>
                    <ul>
                        <li>**Integrated Page Routing:** Client-side routing with React Router DOM.</li>
                        <li>**Dynamic Asset Serving:** Dev server handles deep links.</li>
                    </ul>
                </div>
            </div>

            <div className="changelog-entry initial-release">
                <h2>0.1.0 (2025-12-10) 🚀 - Initial Release</h2>
                <div className="features">
                    <h3>✨ New Features</h3>
                    <ul>
                        <li>**Zero-Configuration Tooling:** Native JSX/TSX support via Bun.</li>
                        <li>**Integrated Development Server:** HMR via WebSockets.</li>
                        <li>**Optimized Production Build:** Static builds with optimization.</li>
                        <li>**Built-in Animation Utilities:** CSS animation classes.</li>
                    </ul>
                </div>
                <div className="setup">
                    <h3>📦 Installation & Setup</h3>
                    <ul>
                        <li>**<code>create-bertui</code>:** Use <code>bunx create-bertui &lt;app-name&gt;</code></li>
                    </ul>
                </div>
            </div>
            </div>
        </section>
    );
}
