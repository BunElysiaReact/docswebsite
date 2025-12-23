// ============================================
// about.jsx - SERVER ISLAND (The Definitive Story)
// ============================================

// ❌ WARNING: The following line MUST be REMOVED for this page to render as a Server Island:
// import { Link } from 'bertui/router'; 
import '../styles/about.css';
import '../styles/home.css';

export const render = "server"; // 🏝️ The Server Island export is now here!

export const meta = {
  title: "About BertUI - The Server Islands Story",
  description: "The honest story of BertUI: why we were stuck as 'Cool Vite,' the frustration of poor SEO, and how Server Islands saved the framework.",
  keywords: "bertui, about, founder story, server islands, speed, framework mission, bun, static-first"
};

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About BertUI: From "Cool Vite" to Revolution</h1>
      <h2 className="about-subtitle">B.E.R.T.U.I: Bun | Elysia | React | Template | User Interface</h2>
      
      {/* The Origin Story */}
      <section className="about-section">
        <h3>The Birth of Speed</h3>
        <p>
          BertUI was born from frustration with the Node.js ecosystem's speed—or lack thereof. 
          The original vision was ambitious: to replace the entire Next.js **full-stack** stack with Bun. 
          However, implementing complex full-stack features proved too much. Instead of compromising the foundation, 
          I pivoted to create the **ultimate static-first React framework**—purely for speed and superior UI.
        </p>
        <p>
          Vite was fast, but it wasn't **fast enough**. When I discovered Bun's native performance—
          easily surpassing ESBuild (Vite's engine)—the concept crystalized on **26/11/2025**.
        </p>
      </section>

      {/* The Frustration */}
      <section className="about-section about-frustration">
        <h3>The "Cool Vite" Problem</h3>
        <p>
          We achieved something incredible: **38ms compilation**, **265ms builds**, 
          and a development experience that felt like magic. But the community's response was crushing:
        </p>
        <blockquote className="about-quote">
          "It's just Cool Vite."
        </blockquote>
        <p>
          Those three words almost ended BertUI. They exposed our Achilles' heel: despite the blazing speed, 
          we were still a **client-side rendering (CSR) framework**. That meant:
        </p>
        <ul className="about-problems">
          <li>❌ Poor SEO - search engines saw blank pages</li>
          <li>❌ Slow First Contentful Paint - users waited for JavaScript</li>
          <li>❌ Sacrificing web fundamentals for speed</li>
        </ul>
        <p>
          The comments were unbearable. Every comparison to Vite felt like a dismissal of the real innovation 
          we'd achieved. I seriously considered giving up on BertUI entirely.
        </p>
      </section>

      {/* The Breaking Point */}
      <section className="about-section about-breakthrough">
        <h3>The Moment Everything Changed</h3>
        <p>
          Instead of quitting, I took time to think. SSR (Server-Side Rendering) was too complex—it required 
          server infrastructure, hydration overhead, and configuration hell. But I needed **something** 
          to make BertUI more than just "fast Vite."
        </p>
        <p>
          The core issue with Next.js was its complexity and forced decisions. What if BertUI could offer the content benefits **optionally**?
        </p>
        <p className="about-eureka">
          <strong>What if it was just one line per page?</strong>
        </p>
        <p>
          That's when <strong>Server Islands</strong> was born.
        </p>
      </section>

      {/* Server Islands - The Solution */}
      <section className="about-section about-solution">
        <h3>🏝️ Server Islands: The Game Changer</h3>
        <p>
          Server Islands is BertUI's uncompromising answer to the "Cool Vite" problem. It's **Static Site Generation (SSG)** on a diet. It's <strong>optional, per-page static HTML generation</strong> with literally one line:
        </p>
        <div className="about-code-example">
          <pre><code>{`export const render = "server";`}</code></pre>
        </div>
        <p>
          Add that line to any content page, and BertUI converts it to **pure static HTML** at build time. No react-dom/server. No complex routing. Just **instant SEO and FCP**.
        </p>

        <div className="about-comparison">
          <div className="comparison-before">
            <h4>❌ Before (CSR only)</h4>
            <ul>
              <li>Fast builds ✅</li>
              <li>Poor SEO ❌</li>
              <li>"Just Cool Vite" 😔</li>
            </ul>
          </div>
          <div className="comparison-after">
            <h4>✅ After (Server Islands)</h4>
            <ul>
              <li>Fast builds ✅</li>
              <li>Perfect SEO ✅</li>
              <li>Unique **Hybrid** architecture ✅</li>
              <li>Zero config ✅</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why It's Special */}
      <section className="about-section about-special">
        <h3>Why Server Islands Changes Everything</h3>
        <p>
          BertUI is no longer a compromise. We are the **fastest hybrid static/client framework** available.
        </p>
        <ul className="about-benefits">
          <li>
            <strong>🚀 Bun Speed:</strong> Still 38ms compilation, still 265ms builds
          </li>
          <li>
            <strong>🔍 Perfect SEO:</strong> Static HTML for landing pages, blogs, docs
          </li>
          <li>
            <strong>⚡ Mixed Architecture:</strong> Server Islands for content, client-only for apps
          </li>
          <li>
            <strong>🎯 Zero Config:</strong> One line per page, no build-time decisions
          </li>
        </ul>
        <p className="about-declaration">
          **We're not "Cool Vite." Vite can't do this at all.**<br />
          **We're BertUI—the framework with Bun speed AND perfect SEO.**
        </p>
      </section>

      {/* Architecture - Minimalist Focus */}
      <section className="about-section">
        <h3>BertUI's Minimalist Core: Just 3 Dependencies</h3>
        <p>
          To maintain our commitment to speed and zero-configuration, BertUI uses only **three core dependencies**:
        </p>
        <ul>
          <li>
            **Elysia:** Powers the lightning-fast dev server and handles HMR via WebSockets
          </li>
          <li>
            **Lightning CSS:** Industry-leading Rust-powered CSS minification and optimization
          </li>
          <li>
            **ernest-logger:** Clean, colorful terminal output (<a href='https://www.npmjs.com/package/ernest-logger' target='_blank'>docs</a>)
          </li>
        </ul>
        <p>
        **We prioritize stability and speed over feature bloat.**
        </p>
      </section>

      {/* The Journey */}
      <section className="about-section">
        <h3>The Road to v1.1.0: Relentless Innovation</h3>
        <p>
          The learning curve was brutal. I had no experience with React build processes, and Bun was brand new. 
          Early versions were unusable—only the dev server would launch. This led to intense, sleepless development.
        </p>
        <p>
          I relied on AI tools like **Gemini** and **Claude** to bridge the knowledge gap. 
          The path to stability required **over 35 beta versions** and countless failed attempts.
        </p>
        <p>
          On **16/12/2025**, after **39 rounds of testing**, version **v1.0.0** 
          launched. Everything worked. BertUI was stable.
        </p>
        <p>
          But the "Cool Vite" comments haunted me. So I kept going. On **23/12/2025**, 
          **v1.1.0** launched with Server Islands. The game changed.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-section about-mission">
        <h3>Our Mission and Vision</h3>
        <p>
          **Vision:** Create the go-to React framework for the Bun ecosystem—one that doesn't 
          compromise between speed and SEO.
        </p>
        <p>
          **Mission:** Prove that you can have both. BertUI delivers **265ms builds** 
          AND **perfect SEO** with Server Islands. No other framework can make that claim.
        </p>
        <p className="about-challenge">
          We challenge any React framework to beat our sustained **265ms build time** while 
          also delivering **perfect SEO** with **zero configuration**.
        </p>
      </section>

      {/* Creator Info */}
      <section className="about-section about-creator">
        <h3>Connect with the Creator</h3>
        <p>
          BertUI is an open-source project created by **Pease Ernest** from **Kenya**.
        </p>
        <p>
          What started as frustration with Node.js speed became a framework that challenges the status quo. 
          The "Cool Vite" comments hurt, but they pushed me to create something truly unique.
        </p>
        <p>
          Email: <a href="mailto:peaseernest8@gmail.com">peaseernest8@gmail.com</a>
        </p>
        <p className="about-thanks">
          Thank you to everyone who believed in BertUI, even when it was just "Cool Vite." 
          Server Islands is for you.
        </p>
      </section>

      <div className="about-cta">
        {/* NOTE: You must use <a> tags here, not the Link component, to be a valid Server Island! */}
        <a href="/" className="btn btn-back">← Back to Home</a>
        <a href="/server-islands" className="btn btn-primary">🏝️ Learn About Server Islands</a>
      </div>
    </div>
  );
}