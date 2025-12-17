import { Link } from 'bertui/router';
import "../styles/bugs-in-current-version.css"

export default function BugsInCurrentVersion() {
    return (
        <div className="bug-report-container">
            <header className="bug-header">
                <h1 className="bug-title">Bugs Resolved in v0.4.7 (Beta)</h1>
                <p className="bug-intro">
                    The BertUI team has resolved all critical issues from the previous beta. The framework is now more stable and production-ready.
                </p>
                <p className="bug-note">
                    All major bugs reported in v0.3.9 have been fixed. See the <Link to="/changelog" className="bug-link">Changelog</Link> for full details.
                </p>
            </header>

            <section className="bug-list-section">
                <h2 className="bug-list-heading">Resolved Issues</h2>
                <ul className="bug-list">
                    <li className="bug-item bug-resolved">
                        <span className="bug-icon">✅</span>
                        <div className="bug-details">
                            <h3 className="bug-name">React Import Failure (FIXED)</h3>
                            <p className="bug-description">
                                <strong>Status: Resolved in v0.4.0</strong> - The automatic `import React from 'react';` injection now works correctly. JSX can be used without manual React imports, restoring the "Zero Config" promise.
                            </p>
                            <code className="bug-fix-target">Fixed in Compiler/Builder/DevServer configuration files.</code>
                        </div>
                    </li>
                    <li className="bug-item bug-resolved">
                        <span className="bug-icon">✅</span>
                        <div className="bug-details">
                            <h3 className="bug-name">Static Asset Copying Issue (FIXED)</h3>
                            <p className="bug-description">
                                <strong>Status: Resolved in v0.4.5</strong> - Static assets from `/src/images/` and `/public/` are now correctly copied to the `dist/` folder during build. Images load properly in both dev and production.
                            </p>
                            <code className="bug-fix-target">Fixed asset pipeline with reliable file copying.</code>
                        </div>
                    </li>
                    <li className="bug-item bug-resolved">
                        <span className="bug-icon">✅</span>
                        <div className="bug-details">
                            <h3 className="bug-name">Error Overlay Screen (FIXED)</h3>
                            <p className="bug-description">
                                <strong>Status: Resolved in v0.4.2</strong> - Added full-screen error overlay for compilation and runtime errors. Better developer experience with detailed error messages.
                            </p>
                            <code className="bug-fix-target">Implemented error overlay with stack traces and file references.</code>
                        </div>
                    </li>
                    <li className="bug-item bug-resolved">
                        <span className="bug-icon">✅</span>
                        <div className="bug-details">
                            <h3 className="bug-name">Production HTML Generation (FIXED)</h3>
                            <p className="bug-description">
                                <strong>Status: Resolved in v0.4.7</strong> - Build process now correctly generates SEO-optimized HTML files for all routes, including proper meta tags and asset linking.
                            </p>
                            <code className="bug-fix-target">Fixed HTML generation and route discovery.</code>
                        </div>
                    </li>
                </ul>
            </section>

            <section className="current-issues">
                <h2 className="current-issues-heading">Current Minor Issues</h2>
                <ul className="bug-list">
                    <li className="bug-item bug-low">
                        <span className="bug-icon">⚡</span>
                        <div className="bug-details">
                            <h3 className="bug-name">WASM Image Optimization (Temporarily Disabled)</h3>
                            <p className="bug-description">
                                <strong>Status: Workaround in place</strong> - WASM-based image optimization caused build hangs. Simple file copying is used instead for reliability.
                            </p>
                            <p className="bug-workaround">
                                **Status:** Will be reimplemented as an optional feature in a future release.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}