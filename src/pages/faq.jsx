import "../styles/faq.css"

export default function Faq() { 
    return (
        <section className="home-container"> 
            <header>
                <h1>FAQ - Frequently Asked Questions</h1>
            </header>
            
            <dl className="faq-list"> 
                {/* ------------------------------------------------------------------------------------ */}
                {/* 1. What is React? (Keep as context) */}
                <div className="faq-item">
                    <dt className="faq-question">1. What is React?</dt> 
                    <dd className="faq-answer">React is a JavaScript library for building user interfaces, primarily single-page applications.</dd>
                </div>
                
                {/* ------------------------------------------------------------------------------------ */}
                {/* 2. What is BERTUI? (POLISHED) */}
                <div className="faq-item">
                    <dt className="faq-question">2. What is BERTUI?</dt> 
                    <dd className="faq-answer">
                        <p>**BERTUI** (Bun + Elysia + React UI) is a zero-configuration, lightning-fast UI build tool for React. It is the first framework built explicitly on the **B.E.R.T. Stack** to leverage Bun's native transpiler and the highly performant Elysia server framework.</p>
                        <p>Our core mission is to eliminate the performance bottlenecks of the Node.js and plugin ecosystems, delivering the fastest possible developer experience and **unprecedented production build speeds.**</p>
                    </dd>
                </div>

                {/* ------------------------------------------------------------------------------------ */}
                {/* 3. Is BertUI like Vite? (COMPLETE) */}
                <div class="faq-item">
                <dt class="faq-question">3. Is BertUI like Vite?</dt> 
                <dd class="faq-answer">
                    <p>BertUI is a direct competitor and next-generation alternative to Vite. While both tools aim to provide an extremely fast development experience for React, **BertUI is built on a fundamentally superior architecture that allows it to achieve unmatched production performance.**</p>
                    
                    <p>You can think of BertUI as the **ultimate optimization** of the speed-focused toolchain. Here are the core differences:</p>

                    <h5>🚀 Core Architectural Difference (B.E.R.T. Stack)</h5>
                    <ul>
                        <li>**BertUI:** Built on the **B.E.R.T. Stack** (Bun + Elysia + React). This means we rely on the native speed of the **Bun Runtime** (written in Zig/C++) and the high-performance **Elysia** server framework for the dev server and HMR. This eliminates the overhead of running on Node.js.</li>
                        <li>**Vite:** Relies on Node.js, and uses a mix of tools like **ESBuild** (for dev) and **Rollup** (for production) with a plugin architecture to achieve its speed.</li>
                    </ul>

                    <h5>⚡️ The Speed Metric: Production Build Time</h5>
                    <p>This is where BertUI establishes category leadership. The goal is to maximize CI/CD and deployment speed:</p>
                    <ul>
                        <li>**BertUI's Production Build:** Consistently clocks in at **35 milliseconds (ms)** for a static application. We are built for instant production deployment.</li>
                        <li>**Vite's Production Build:** While fast, typically ranges from **0.4 to 3.5+ seconds** depending on the project size.</li>
                    </ul>
                    
                    <h5>SEO and Configuration</h5>
                    <ul>
                        <li>**SEO & Output:** BertUI is opinionated towards performance and SEO, providing **automatic, ready-to-deploy static HTML files** for every route, complete with Meta Tag support. This is crucial for search ranking.</li>
                        <li>**Simplicity:** BertUI operates with **zero external plugins**. By hard-coding the optimization pipeline (leveraging Bun and Lightning CSS), we remove the performance overhead and configuration complexity inherent in plugin-based systems.</li>
                    </ul>

                    <p>In short, BertUI is designed to be **the fastest implementation of a React UI build tool, period**, by utilizing the most modern, native tools available.</p>
                </dd>
                </div>

                {/* ------------------------------------------------------------------------------------ */}
                {/* 4. Does BertUI support TypeScript? (COMPLETE) */}
                <div class="faq-item">
                <dt class="faq-question">4. Does BertUI support TypeScript?</dt> 
                <dd class="faq-answer">
                    <p>This is where the power of the <strong>Bun Runtime</strong> shines. BertUI uses Bun to handle all file transpilation, which means:</p>
                    
                    <h3>✅ **What is Supported (Zero Config)**</h3>
                    <ul>
                        <li><strong>TypeScript Syntax:</strong> You can write all your application files using <code>.ts</code> and <code>.tsx</code> extensions. You can use types, interfaces, and all modern TypeScript syntax directly in your components.</li>
                        <li>**Native Execution:** The Bun runtime handles the stripping of types instantly, meaning your dev server runs this code natively and faster than traditional Node.js/TypeScript setups. **Zero <code>tsconfig.json</code> needed.**</li>
                    </ul>

                    <h3>⚠️ **What is NOT Supported (By Design)**</h3>
                    <ul>
                        <li>**Type Checking:** BertUI does **NOT** run the slow, traditional TypeScript compiler (`tsc`) during dev or build. This is a deliberate choice to ensure our world-leading **35ms production build time**. BertUI prioritizes performance and build speed above all else.</li>
                        <li>**Library Types:** As a lightweight, speed-focused library, we do not ship comprehensive, auto-generated TypeScript definition files for internal library methods.</li>
                    </ul>

                    <p><strong>The Takeaway:</strong> You can use TypeScript syntax for code cleanliness, but you rely on your IDE (like VS Code) for real-time type feedback. By offloading the complex type checking, BertUI delivers unparalleled speed and simplicity—a true "speed-first" approach.</p>
                </dd>
                </div>

                {/* ------------------------------------------------------------------------------------ */}
                {/* 5.What is the bundle time and build time of BERTUI? (NEW & CRITICAL) */}
                <div className="faq-item">
                    <dt className="faq-question">5. What is the bundle time and build time of BERTUI?</dt> 
                    <dd className="faq-answer">
                        <p>This is our greatest competitive advantage:</p>
                        <ul>
                            <li>**Production Build Time:** **35 milliseconds (ms)**. BertUI is engineered to complete a full static production build (transpilation, bundling, minification, and CSS optimization via Lightning CSS) in less time than it takes most tools to load their configuration.</li>
                            <li>**Development Server Startup:** The Bun + Elysia development server starts in **under 10ms**, providing instant development feedback.</li>
                            <li>**HMR (Hot Module Replacement):** Updates are near-instantaneous, leveraging the low-latency communication of Elysia (WebSockets) and Bun's native transpiler.</li>
                        </ul>
                        <p>This speed is not a benchmark anomaly; it is the core feature of the B.E.R.T. stack's zero-abstraction design.</p>
                    </dd>
                </div>

                {/* ------------------------------------------------------------------------------------ */}
                {/* 6. What is the difference between bundle and build time? (CLARIFICATION) */}
                <div className="faq-item">
                    <dt className="faq-question">6. What is the difference between bundle and build time?</dt> 
                    <dd className="faq-answer">
                        <ul>
                            <li>**Bundling** is the process of taking multiple JavaScript files (and assets) and combining them into one or more final optimized files for the browser.</li>
                            <li>**Building** is the comprehensive process that includes bundling, plus other steps like transpilation (JSX/TSX to JS), minification, tree-shaking, CSS processing, and generating the final deployable files (like HTML).</li>
                        </ul>
                        <p>In the context of BertUI, we use Bun's native capabilities to combine both processes into one seamless, atomic, **35ms operation**, making the distinction largely irrelevant to the end user's deploy speed.</p>
                    </dd>
                </div>

                {/* ------------------------------------------------------------------------------------ */}
                {/* 7. Why use the B.E.R.T. stack? (ARCHITECTURAL DEEPER DIVE) */}
                <div className="faq-item">
                    <dt className="faq-question">7. Why did you choose the B.E.R.T. Stack (Bun, Elysia, React)?</dt> 
                    <dd className="faq-answer">
                        <p>The stack was chosen for maximum performance and minimalism:</p>
                        <ul>
                            <li>**Bun:** The fastest, low-level JavaScript runtime (written in Zig/C++) provides native transpilation, I/O speed, and a unified toolset (bundler, package manager, runner) that replaces dozens of slower Node.js packages.</li>
                            <li>**Elysia:** The fastest Web framework for Bun, Elysia is used to bootstrap and serve the development environment, managing the highly efficient WebSockets for near-instant HMR.</li>
                            <li>**React:** The most dominant library for high-performance UIs, benefiting directly from the speed of the underlying tooling.</li>
                        </ul>
                        <p>The entire stack is designed to talk the same language at the native level, eliminating slow context switching and plugin overhead.</p>
                    </dd>
                </div>
                
                {/* ------------------------------------------------------------------------------------ */}
                {/* 8. What is the target production environment? (DEPLOYMENT) */}
                <div className="faq-item">
                    <dt className="faq-question">8. What is the target production environment for BertUI?</dt> 
                    <dd className="faq-answer">
                        <p>BertUI produces highly optimized, **purely static assets** (HTML, CSS, JS bundles). This makes BertUI applications ideal for deployment on:</p>
                        <ul>
                            <li>Vercel, Netlify, or Cloudflare Pages (as a static site).</li>
                            <li>Traditional web servers (Nginx, Apache).</li>
                            <li>AWS S3 or Google Cloud Storage (for pure static hosting).</li>
                        </ul>
                        <p>Since the build is so fast, it is perfect for CI/CD pipelines that require instant deployment of static changes.</p>
                    </dd>
                </div>

                {/* ------------------------------------------------------------------------------------ */}
                {/* 9. Can I migrate from a Create React App (CRA) or Vite project? (ADOPTION) */}
                <div className="faq-item">
                    <dt className="faq-question">9. Can I migrate an existing React project to BertUI?</dt> 
                    <dd className="faq-answer">
                        <p>Yes. Since BertUI uses standard React and file-based routing, the migration process is generally fast. You would primarily need to:</p>
                        <ol>
                            <li>Replace your current dev dependencies with the `bertui` package.</li>
                            <li>Adjust your file structure to match BertUI's file-based routing convention.</li>
                            <li>Update any environment variables to use the `BERTUI_` or `PUBLIC_` prefixes.</li>
                        </ol>
                        <p>The speed gains in development and production make the small effort highly worthwhile.</p>
                    </dd>
                </div>

                {/* ------------------------------------------------------------------------------------ */}
                {/* 10. How do I use this component? (COMPONENT USAGE - KEEP) */}
                <div className="faq-item">
                    <dt className="faq-question">10. How do I use this component?</dt>
                    <dd className="faq-answer">Import it into another component and render it: `&lt;Faq /&gt;`.</dd>
                </div>
                <div class="faq-item">
                    <dt class="faq-question">11. Styling is done with which language?</dt>
                    <dd class="faq-answer">
                        <p>BertUI supports standard **Cascading Style Sheets (`.css`)** files only. This is a deliberate architectural decision to ensure the fastest possible build times.</p>

                        <h3>Why Only CSS? (The Speed Trade-off)</h3>
                        <ul>
                            <li>**Lightning-Fast Processing:** We use **Lightning CSS** (written in Rust) for minification, auto-prefixing, and optimization of all CSS assets. This process completes in **under 23ms** on its own.</li>
                            <li>**Zero Abstraction Penalty:** Introducing pre-processors like Sass/SCSS requires another compilation step (Node.js-based `sass` package), which adds latency, external dependencies, and dramatically slows down the build pipeline.</li>
                            <li>**Native Feature Parity:** Modern CSS supports features like **Nesting**, **Custom Properties (variables)**, and **Custom Media Queries** which eliminate most of the historical reasons for using pre-processors.</li>
                        </ul>

                        <p>Our priority is delivering the world-leading **35ms production build time**. We will only consider supporting other styling languages if rigorous testing proves they can be integrated **without introducing significant latency** to the final build.</p>
                        
                        <p>BertUI encourages developers to embrace the speed of modern, highly optimized vanilla CSS.</p>
                    </dd>
                </div>
            </dl>
        </section>
    );
}