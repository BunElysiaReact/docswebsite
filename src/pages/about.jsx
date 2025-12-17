import { Link } from 'bertui/router';
import '../styles/about.css';
import '../styles/home.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About BertUI: The Speed Story</h1>
      
      <h2 className="about-subtitle">B.E.R.T.U.I: Bun | Elysia | React | Template | User Interface</h2>
      
      <p>
        The concept for this library was born out of deep frustration with the raw speed of the Node.js ecosystem. While the original goal was to create a full-stack framework similar to Next.js, the complexity of reliable Server-Side Rendering (SSR) proved a major hurdle. I decided to pivot and focus on creating the **ultimate UI-focused library** built purely for speed.
      </p>
      
      <p>
        I knew tools like Vite were fast, but they weren't **fast enough**. When I discovered Bun's native performance, easily surpassing the speed of tools like ESBuild (used by Vite), the idea for BertUI took hold on **26/11/2025**.
      </p>

      <h3>BertUI's Minimalist Architecture: Just 3 Modules</h3>
      <p>
        To maintain our commitment to speed and zero-configuration, BertUI is built using only **three core dependencies**. We use only a small, specific part of each module's functionality, eliminating the typical bloat and plugin overhead of other tools:
      </p>
      <ul>
        <li>**Elysia:** Used solely for bootstrapping the lightning-fast dev server and handling high-speed HMR (Hot Module Replacement) via WebSockets.</li>
        <li>**Lightning CSS:** The industry-leading, Rust-powered tool for instant CSS minification and optimization.</li>
        <li>**ernest-logger:** Used for clean, colorful terminal outputs. This was developed internally to avoid the configuration issues and undefined errors often encountered with third-party logging packages like `chalk`. The logger's documentation is available <a href='https://www.npmjs.com/package/ernest-logger' target='_blank'>here</a>.</li>
      </ul>

      <h3>The Road to v1.0.0: Relentless Optimization</h3>
      <p>
        The learning curve was immense. I had no prior experience with the inner workings of React build processes, and Bun was a brand new runtime. The initial version was unusable—only the Elysia development server would launch. This led to a period of intense, sleepless development, fueled by fixes after fixes.
      </p>
      <p>
        I relied heavily on the advanced knowledge of AI tools like **Gemini** and **Claude** (for its Bun proficiency) to bridge the significant learning gap. The path to stability was brutal: 
        I produced **over 20 beta versions** and faced non-working code that led to frustration.
      </p>
      <p>
        Finally, on **16/12/2025**, after **39 rounds of rigorous testing**, everything clicked. HMR was working perfectly, CSS bundling was instant, and the build pipeline was finalized. This led to the final stable beta, **v0.3.9**.
      </p>

      <h3>Our Mission and Vision</h3>
      <p>
        **Vision:** My primary goal was twofold: First, to achieve unprecedented build speed. Second, to create a **go-to UI library for the Bun community**, giving developers a true Bun-native foundation.
      </p>
      <p>
        **Mission:** To launch the **fastest UI library in the world**. We are confident in the speed of our B.E.R.T. Stack, and we challenge any competitor to beat our sustained **32ms production build time** in the near future.
      </p>
      
      <h3 className="about-contact">Connect with the Creator</h3>
      <p>
        BertUI is an open-source project created by **Pease Ernest** from **Kenya**.
      </p> 
      <p>
        Email: <a href="mailto:peaseernest8@gmail.com">peaseernest8@gmail.com</a>
      </p>
      
      <div className="about-cta">
        <Link to="/" className="btn btn-back">← Back to Home</Link>
      </div>
    </div>
  );
}