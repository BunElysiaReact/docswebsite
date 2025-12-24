// ============================================
// communityquestions.jsx - SERVER ISLAND
// ============================================
// 🏝️ PURE STATIC CONTENT - PERFECT FOR SEO
export const render = "server";

export const meta = {
  title: "Community Q&A - BertUI",
  description: "Recent questions from the BertUI community with official answers",
  keywords: "bertui, questions, community, support, faq"
};

// ✅ NO React imports needed for Server Islands
// ✅ NO hooks (useState, useEffect, etc.)
// ✅ NO Link component (use <a> tags)
// ✅ Pure static JSX only

export default function Questions() {
  return (
    <div className="community-q-container">
      <header className="community-q-header">
        <h1 className="community-q-title">Community Q&A Log</h1>
        <p className="community-q-intro">
          This page logs recent, specific questions asked by the BertUI community, 
          along with official, concise answers. These questions often help shape 
          the content of the main FAQ.
        </p>
        <div className="community-q-note">
          If you have a question, please ask on our GitHub or Discord (links in the footer)!
        </div>
      </header>

      <section className="community-q-section">
        <CommunityQuestionItem
          id="Q001"
          question="I tried running the simple 'Hello World' example, but I get an error saying 'React is not defined'."
          answer="Update to the latest BertUI version as the fix was added in v1.0.3"
        />

        <CommunityQuestionItem
          id="Q002"
          question="Does BertUI support deployment to Vercel/Netlify, or is it only for self-hosting with Bun?"
          answer="Yes, the output is standard HTML/CSS/JS which can be hosted on any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.). We recommend using the provided 'build' script which generates the deployable 'dist' folder."
        />

        <CommunityQuestionItem
          id="Q003"
          question="What are BertUI Server Islands?"
          answer="Server Islands are BertUI's unique feature that lets you generate static HTML at build time with a single line: export const render = \server\. This gives you perfect SEO and instant loading without sacrificing the developer experience of React."
        />

        <CommunityQuestionItem
          id="Q004"
          question="Can I use TypeScript with BertUI?"
          answer="BertUI is JavaScript-first and we love keeping it simple. While we support .jsx files with full JSX syntax, we currently don't plan to add .tsx support. We believe in the simplicity and flexibility of JavaScript."
        />

        <CommunityQuestionItem
          id="Q005"
          question="How does BertUI's hydration work for Server Islands?"
          answer="Server Islands use React's renderToString() to convert components to pure HTML at build time. The result is static HTML with zero JavaScript - no hydration happens. For interactivity, use regular React pages without the 'export const render = server line."
        />

        <CommunityQuestionItem
          id="Q006"
          question="Why can't I use CSS Modules or Sass in BertUI?"
          answer="BertUI uses plain CSS minified by LightningCSS (10ms processing time). We prioritize speed over features. CSS Modules aren't supported, and Sass/SCSS support is being considered only if it doesn't slow down builds."
        />

        <CommunityQuestionItem
          id="Q007"
          question="Why are my images breaking? I put them in src/assets/"
          answer="BertUI only processes images from two directories: src/images/ (for component images) and public/ (for global assets). This limitation keeps builds fast and enforces good file organization. Move your images to one of these folders."
        />

        <CommunityQuestionItem
          id="Q008"
          question="Can I use Server Islands with dynamic routes like [slug].jsx?"
          answer="Not yet. Server Islands with dynamic routes require knowing all possible route values at build time (like Next.js getStaticPaths). This feature is on our research list for future releases."
        />

        <CommunityQuestionItem
          id="Q009"
          question="Does BertUI support API routes like Next.js?"
          answer="No. BertUI is purely a frontend framework. Server Islands generate static HTML at build time, not runtime. For APIs, use a separate backend server (Express, Elysia, FastAPI, etc.)."
        />

        <CommunityQuestionItem
          id="Q010"
          question="How do environment variables work in BertUI?"
          answer="Variables with PUBLIC_ or BERTUI_ prefix are known to work. Full .env support and different environment configurations are still being tested. Check our documentation for updates."
        />

        <CommunityQuestionItem
          id="Q011"
          question="Will Redux/Zustand/React Query work with BertUI?"
          answer="Yes! BertUI is 98% React-compatible. Any React state management library should work. However, these only work on regular React pages - NOT on Server Islands (which are static HTML with no JavaScript)."
        />

        <CommunityQuestionItem
          id="Q012"
          question="Does the migration tool automatically convert my Vite/CRA code?"
          answer="No. The 'bunx migrate-bertui' tool backs up your project to .bertmigrate/ and creates a fresh BertUI project. You manually copy components and convert code following the generated MIGRATION_GUIDE.md. It's a migration helper, not an automatic code transformer."
        />

        <CommunityQuestionItem
          id="Q013"
          question="Why does BertUI discourage using Vite plugins?"
          answer="Vite plugins are Node-powered and can slow down BertUI's blazing-fast 265ms builds. While there's no technical limitation preventing their use, they defeat BertUI's core value proposition: speed. If you need Vite plugins, just use Vite."
        />

        <CommunityQuestionItem
          id="Q014"
          question="How do I run tests in BertUI?"
          answer="BertUI doesn't have a built-in test runner yet. For now, manual testing via the dev server is recommended. Official testing support with recommended frameworks is coming in future updates."
        />

        <CommunityQuestionItem
          id="Q015"
          question="What happens if I use useState or Link in a Server Island page?"
          answer="The build will complete but warn you. The component gets bundled as .js, but renderToString() can't handle client-side React features, so your page will render as an empty div. Server Islands must use only static JSX and <a> tags for navigation."
        />

        <div className="community-q-placeholder">
          <p>New community questions and their answers will be logged here!</p>
        </div>
      </section>

      {/* ✅ Use regular <a> tags, not Link component */}
      <div className="gs-cta-grid">
        <a href="/" className="gs-cta-button gs-primary">
          ← Back to Home
        </a>
        <a 
          href="https://github.com/BunElysiaReact/BERTUI" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="gs-cta-button gs-secondary"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

// ✅ Helper component - also pure static
function CommunityQuestionItem({ id, question, answer }) {
  return (
    <div className="community-q-item">
      <div className="question-header">
        <span className="question-id">{id}</span>
        <h3 className="question-text">❓ {question}</h3>
      </div>
      <div className="answer-box">
        <h4 className="answer-label">✅ Answer:</h4>
        <p className="answer-text">{answer}</p>
      </div>
    </div>
  );
}