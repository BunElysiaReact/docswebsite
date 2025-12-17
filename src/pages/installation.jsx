export default function Installation(){
    return(
        <section className="home-container">
            <header>
                <h1>How to Install BertUI</h1>
            </header>
            
            <p>There are 2 ways to get started with BertUI:</p>
            <ol>
                <li><strong>Fresh Installation:</strong> Start a new project from scratch.</li>
                <li><strong>Migration:</strong> Convert an existing React project (e.g., from Vite or CRA).</li>
            </ol>
            
            <div className="installation-section">
                <h2>1. Fresh Installation: Start a New Project</h2>
                
                <p>BertUI uses the Bun runtime to deliver its industry-leading speed. Before starting, ensure you  have Bun installed on your system.</p>

                <h3>Step 1: Install Bun (If needed)</h3>
                <p>Bun is a single, fast executable. You can install it on macOS/Linux using this command:</p>
                <pre><code>curl -fsSL https://bun.sh/install | bash</code></pre>
                <p>*(For Windows, please refer to the official <a href="https://bun.sh/docs/installation" target="_blank">Bun installation guide</a>.)*</p>
                
                <h3>Step 2: Create Your BertUI Project</h3>
                <p>Use the **`bunx`** command—Bun's equivalent of `npx`—to instantly scaffold a new BertUI application in the directory of your choice (e.g., `my-bertui-app`).</p>
                <pre><code>bunx bertui-create my-bertui-app</code></pre>
                <p>Currently our cli create-bertui lib dsnt support flaggs it is a one template mybe just mybe in future Updates it will include but as for v1.0.0 it dsnt</p>
                
                <p>This command will:</p>
                <ul>
                    <li>Create the directory `my-bertui-app`.</li>
                    <li>Install all the B.E.R.T.U.I Stack dependencies (Elysia, React, etc.).</li>
                    <li>Set up the file-based routing and styling boilerplate.</li>
                </ul>

                <h3>Step 3: Run the Development Server</h3>
                <p>Navigate into your new project and start the dev server. Thanks to the power of the B.E.R.T. Stack, your server will launch in **under 20ms!**</p>
                <pre><code>cd my-bertui-app
bun run dev</code></pre>

                <p>Your application is now running with near-instant Hot Module Replacement (HMR) and ready for development.</p>
            </div>
                        
            <div className="installation-section">
                <h2>2. Migration: Convert an Existing React Project</h2>
                
                <p>If you have an existing React project (e.g., created with Vite, Create React App, or another tool), you can easily migrate it to BertUI to immediately benefit from the **35ms production build speed**.</p>
                
                <p>The primary steps involve clearing the old build environment and aligning your file structure to BertUI's **file-based routing** convention.</p>

                <h3>Step 1: Clean Up Old Dependencies</h3>
                <p>In your existing project directory, first remove the old bundler/dev server packages (like `vite`, `react-scripts`, `webpack`, and their associated plugins). If you are coming from Node.js, this is a good time to switch your package manager to Bun:</p>
                <pre><code># Delete node modules and lock files
                rm -rf node_modules package-lock.json yarn.lock

                # Install dependencies using Bun (optional but recommended)
                bun install</code></pre>

                <h3>Step 2: Install BertUI Dependencies</h3>
                <p>Install `bertui` as your primary dependency. You will also need to ensure your project has the required peer dependencies, React and React-DOM, installed:</p>
                <pre><code>bun add bertui react react-dom</code></pre>

                <h3>Step 3: Update `package.json` Scripts</h3>
                

                <h3>Step 4: Adopt File-Based Routing</h3>
                <p>BertUI requires a clean, dedicated folder for your pages to implement routing. Move your existing component pages into a new `src/pages` directory (or similar structure), adhering to the following rules:</p>
                <ul>
                    <li>The main component should be moved to **`src/pages/index.jsx`**.</li>
                    <li>Components for routes like `/about` should be moved to **`src/pages/about.jsx`**.</li>
                    <li>Ensure you remove all usage of third-party routing libraries (like `react-router-dom`) as BertUI handles routing automatically.</li>
                </ul>

                <h3>Step 5: Run the Dev Server</h3>
                <p>After making these structural changes, you can start the new, ultra-fast development server:</p>
                <pre><code>bun run dev</code></pre>

                <p>Your legacy project is now running on the B.E.R.T. Stack!</p>
            </div>
        </section>
    ); // Correctly closes the return statement
} // Correctly closes the function