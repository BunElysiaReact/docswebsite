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
          answer="UPdate to the latest bertui version as the fix was added in v1.0.3"
        />

        <CommunityQuestionItem
          id="Q002"
          question="Does BertUI support deployment to Vercel/Netlify, or is it only for self-hosting with Bun?"
          answer="Yes, the output is standard HTML/CSS/JS which can be hosted on any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.). We recommend using the provided 'build' script which generates the deployable 'dist' folder."
        />

        <CommunityQuestionItem
          id="Q003"
          question="What are BertUI Server Islands?"
          answer="Server Islands are BertUI's unique feature that lets you generate static HTML at build time with a single line: 'export const render = 'server' (put the server in double quotes). This gives you perfect SEO and instant loading without sacrificing the developer experience of React."
        />

        <CommunityQuestionItem
          id="Q004"
          question="Can I use TypeScript with BertUI?"
          answer="BertUI is JavaScript-first and we love keeping it simple. While we support .jsx files with full JSX syntax, we currently don't plan to add .tsx support. We believe in the simplicity and flexibility of JavaScript."
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