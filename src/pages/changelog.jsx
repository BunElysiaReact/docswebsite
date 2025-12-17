import "../styles/changelog.css"


export default function Changelog() {
    return (
        <section className="changelog-page">
            <header>
                <h1>BertUI Changelog</h1>
                <p>A history of improvements, bug fixes, and feature additions for the BertUI framework.</p>
            </header>

            <div className="changelog-entry latest">
                <h2>0.3.9 (Latest)</h2>
                
                <div className="features">
                    <h3>✨ New Features</h3>
                    <ul>
                        <li>**CSS Import Support:** Templates now properly support external CSS imports.</li>
                        <li>**External Library Support:** Full support for importing external libraries (loggers, utilities, etc.).</li>
                        <li>**Environment Variables:** Complete <code>.env</code> file support with <code>BERTUI_</code> and <code>PUBLIC_</code> prefixes.</li>
                        <li>**Build Improvements:** Enhanced production build process with better optimization.</li>
                    </ul>
                </div>

                <div className="fixes">
                    <h3>🐛 Bug Fixes</h3>
                    <ul>
                        <li>Fixed CSS import handling in compilation process.</li>
                        <li>Resolved CSS file serving in dev server.</li>
                        <li>Fixed environment variable injection.</li>
                        <li>Improved error handling across the board.</li>
                    </ul>
                </div>

                <div className="notes">
                    <h3>📝 Notes</h3>
                    <p>Versions 0.1.5 - 0.3.8 involved numerous bug fixes and stability improvements as we worked through:</p>
                    <ul>
                        <li>CSS compilation edge cases.</li>
                        <li>Router import resolution.</li>
                        <li>Build process optimization.</li>
                        <li>Dev server stability.</li>
                        <li>HMR reliability.</li>
                    </ul>
                </div>
            </div>
            
            <hr /> 

            <div className="changelog-entry">
                <h2>0.1.4</h2>
                <p>Attempted fix for router compilation errors. Fixed in later versions.</p>
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
                <h2>0.1.1 (2025-12-10) 🗺️ - Page Routing Implemented</h2>
                <div className="features">
                    <h3>✨ New Features</h3>
                    <ul>
                        <li>**Integrated Page Routing:** Full support for client-side routing with React Router DOM.</li>
                        <li>**Dynamic Asset Serving:** Dev server handles deep links and dynamic paths.</li>
                    </ul>
                </div>
                <div className="fixes">
                    <h3>🐛 Bug Fixes & Improvements</h3>
                    <ul>
                        <li>Added file-based routing support.</li>
                    </ul>
                </div>
            </div>

            <div className="changelog-entry initial-release">
                <h2>0.1.0 (2025-12-10) 🚀 - Initial Release (Static)</h2>
                <div className="features">
                    <h3>✨ New Features</h3>
                    <ul>
                        <li>**Zero-Configuration Tooling:** Native JSX/TSX support via Bun.</li>
                        <li>**Integrated Development Server:** HMR via WebSockets.</li>
                        <li>**Optimized Production Build:** Static builds with PostCSS optimization.</li>
                        <li>**Built-in Animation Utilities:** CSS animation classes (temporarily unavailable in current version).</li>
                    </ul>
                </div>
                <div className="setup">
                    <h3>📦 Installation & Setup</h3>
                    <ul>
                        <li>**<code>create-bertui</code>:** Use <code>bunx create-bertui &lt;app-name&gt;</code> for instant setup.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}