import { Link } from 'bertui/router';

export default function Deployment() {
    return (
        <div className="gs-main">
            <section className="gs-section">
                <h2 className="gs-section-title">
                    🚀 Deployment Guide: Vercel
                </h2>
                <p className="gs-text">
                    The current BertUI documentation is hosted on Vercel, which provides a fast, reliable, and zero-configuration environment for BertUI applications. The simplest way to deploy is by using the pre-configured <code>vercel.json</code> file included with every <code>create-bertui</code> app.
                </p>

                <h3 className="gs-section-subtitle">Understanding vercel.json</h3>
                <p className="gs-text">
                    This file tells Vercel exactly how to build and route your application. It is highly recommended not to modify this file.
                </p>
                
                {/* Vercel.json Code Block */}
                <pre className="gs-code-block" style={{ color: '#f8c555' }}>
{`{
  "buildCommand": "bun run build",
  "outputDirectory": "dist",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`}
                </pre>
                
                <ul className="gs-list">
                    <li>
                        <strong><code>"buildCommand": "bun run build"</code></strong>: This command tells Vercel to use **Bun** to run the build script, which generates static HTML files for each page.
                    </li>
                    <li>
                        <strong><code>"outputDirectory": "dist"</code></strong>: This is the directory where all final build files are located.
                    </li>
                    <li>
                        <strong><code>"framework": null</code></strong>: We set this to null because BertUI is a new framework Vercel may not yet officially recognize, preventing it from trying to use incompatible framework presets.
                    </li>
                    <li>
                        <strong><code>"rewrites"</code></strong>: These are necessary routings to ensure the application works with file-based routing and serves <code>index.html</code> for all deep links.
                    </li>
                </ul>
                
                {/* Warning Note */}
                <div className="gs-warning gs-callout">
                    <p>
                        <strong>Warning: Do Not Modify!</strong> If modified, your application may fail to deploy or route correctly. If you encounter issues, please copy the original file from our 
                        <Link href="https://github.com/BunElysiaReact/BERTUI/blob/main/create-bertui/template/vercel.json" target="_blank" className="gs-link">official GitHub repository</Link> and paste it back.
                    </p>
                </div>
            </section>
            
            <section className="gs-section">
                <h2 className="gs-section-title">
                    📝 Step-by-Step Vercel Deployment
                </h2>
                
                <div className="gs-info-box">
                    <h4 className="gs-info-title">Important Notice: GitHub Linking</h4>
                    <p>
                        If you have not linked your GitHub account to Vercel, ensure your repository is **public**. Vercel can deploy private repositories only after account linking, a straightforward process we won't detail here.
                    </p>
                </div>

                <div className="gs-workflow">
                    <Step
                        number="1"
                        title="Visit Vercel"
                        description={
                            <>
                                Start by visiting the Vercel official website: 
                                <Link href="https://vercel.com" target="_blank" className="gs-link">https://vercel.com</Link>.
                                <img src="../images/1.png" alt="Vercel Homepage Screenshot" className="gs-step-image" loading="lazy" />
                            </>
                        }
                    />
                    <Step
                        number="2"
                        title="Start a New Project"
                        description={
                            <>
                                Click the **"Add New"** button on the top right section of your dashboard, and then select **"Project"** from the dropdown menu.
                                <img src="../images/2.png" alt="Vercel Add New Project Screenshot" className="gs-step-image" loading="lazy" />
                            </>
                        }
                    />
                    <Step
                        number="3"
                        title="Import Git Repository"
                        description={
                            <>
                                Select your BertUI GitHub repository (either public or imported). After selecting it, press "Continue."
                                <img src="../images/3.png" alt="Vercel Import Repository Screenshot" className="gs-step-image" loading="lazy" />
                            </>
                        }
                    />
                    <Step
                        number="4"
                        title="Review Settings and Deploy"
                        description={
                            <>
                                The settings will be pre-populated from your <code>vercel.json</code> file. The only field you should modify is the **Project Name**.
                                <img src="../images/4.png" alt="Vercel Project Settings Screenshot" className="gs-step-image" loading="lazy" />
                                Then, click the **"Deploy"** button. The build process will take an average of 10-15 seconds, depending on your app's size.
                                <img src="../images/5.png" alt="Vercel Deployment in Progress Screenshot" className="gs-step-image" loading="lazy" />
                            </>
                        }
                    />
                    <Step
                        number="5"
                        title="Go Live!"
                        description={
                            <>
                                After a successful build, Vercel will update the UI. Scroll down and press the **"Go to Dashboard"** button.
                                <img src="../images/6.png" alt="Vercel Deployment Success Screenshot" className="gs-step-image" loading="lazy" />
                                Your website is live on a free <code>.vercel.app</code> domain with a free SSH certificate. Congratulations!
                                <img src="../images/7.png" alt="Vercel Live Dashboard Screenshot" className="gs-step-image" loading="lazy" />
                            </>
                        }
                    />
                </div>
            </section>
            
            <section className="gs-section">
                <h3 className="gs-section-subtitle">
                    Troubleshooting Routes (404 Errors)
                </h3>
                <div className="gs-text">
                    If you encounter a **404 Not Found** error after deployment, it often means your routes are misconfigured or the <code>vercel.json</code> file is not being read correctly.
                    <p>
                        <strong>Troubleshooting Step:</strong> Always try a local build first by running <code>bun run build</code> and then <code>bun run preview</code> (if you have a preview server configured) to confirm your application's routes work correctly locally before pushing to Vercel.
                    </p>
                </div>
                
                <p className="gs-note">
                    For further route questions, please join our official 
                    <Link href="https://discord.gg/kvbXfkJG" target="_blank" className="gs-link">Discord server</Link>.
                </p>
            </section>
        </div>
    );
}

// Helper Component for Workflow Step
function Step({ number, title, description }) {
    return (
        <div className="gs-workflow-step">
            <div className="gs-workflow-number">{number}</div>
            <div className="gs-workflow-content">
                <h4 className="gs-workflow-title">{title}</h4>
                <div className="gs-workflow-desc">{description}</div>
            </div>
        </div>
    );
}