import { Link } from 'bertui/router'; // Assuming you might link to the Changelog or Home

import "../styles/bugs-in-current-version.css"
export default function BugsInCurrentVersion() {
    return (
        <div className="bug-report-container">
            <header className="bug-header">
                <h1 className="bug-title">Bugs in v0.3.9 (Beta)</h1>
                <p className="bug-intro">
                    The BertUI team is committed to delivering a stable product. The following known issues have been reported or found in the current beta version.
                </p>
                <p className="bug-note">
                    All major bugs will be fixed in the next release candidate (v0.4.0) and confirmed in the <Link to="/changelog" className="bug-link">Changelog</Link>.
                </p>
            </header>

            <section className="bug-list-section">
                <h2 className="bug-list-heading">Known Issues</h2>
                <ul className="bug-list">
                    <li className="bug-item bug-critical">
                        <span className="bug-icon">❌</span>
                        <div className="bug-details">
                            <h3 className="bug-name">React Import Failure (Critical)</h3>
                            <p className="bug-description">
                                The automatic `import React from 'react';` injection is failing, leading to `ReferenceError: React is not defined` errors when using JSX without manual import. This impacts the core "Zero Config" promise.
                            </p>
                            <code className="bug-fix-target">Compiler/Builder/DevServer configuration files are being modified.</code>
                        </div>
                    </li>
                    <li className="bug-item bug-medium">
                        <span className="bug-icon">📁</span>
                        <div className="bug-details">
                            <h3 className="bug-name">Static Asset Copying Issue (Images)</h3>
                            <p className="bug-description">
                                Static assets (e.g., images) placed in directories outside of `/public` (e.g., `/src/images`) are not being correctly copied into the final `dist/` folder during the build process, causing broken links.
                            </p>
                            <code className="bug-fix-target">The file processing pipeline for assets will be updated.</code>
                        </div>
                    </li>
                    <li className="bug-item bug-low">
                        <span className="bug-icon">🛠️</span>
                        <div className="bug-details">
                            <h3 className="bug-name">No Error Overlay Screen (DX/Quality of Life)</h3>
                            <p className="bug-description">
                                Unlike modern bundlers, compilation and runtime errors are only displayed in the browser's developer console. There is no user-friendly, full-screen error overlay.
                            </p>
                            <p className="bug-workaround">
                                **Workaround:** Check the **Browser Console (F12)** for all error messages and stack traces. This is a planned feature for a future minor release.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}