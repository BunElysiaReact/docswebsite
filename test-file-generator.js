// test-file-generator.js - Generate 100 test pages
// Run with: bun test-file-generator.js

import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const PAGES_DIR = './src/pages/stress-test';
const NUM_FILES = 100;

// Create directory
if (!existsSync(PAGES_DIR)) {
  mkdirSync(PAGES_DIR, { recursive: true });
  console.log(`✅ Created directory: ${PAGES_DIR}`);
}

// Template variations
const templates = {
  // Server Island (static)
  serverIsland: (num) => `// Auto-generated test page ${num}
export const render = "server";

export const meta = {
  title: "Test Page ${num}",
  description: "Auto-generated test page for stress testing BertUI builds"
};

export default function TestPage${num}() {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
      <h1>🏝️ Server Island Test Page ${num}</h1>
      <p>This page was generated automatically to test BertUI build performance.</p>
      
      <div style={{ marginTop: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Page Details</h2>
        <ul>
          <li><strong>Page Number:</strong> ${num}</li>
          <li><strong>Type:</strong> Server Island (SSG)</li>
          <li><strong>Render Mode:</strong> Static HTML at build time</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <a href="/" style={{ color: '#10b981' }}>← Back to Home</a>
      </div>
    </div>
  );
}`,

  // Client-only (interactive)
  clientOnly: (num) => `// Auto-generated test page ${num}
import { useState } from 'react';

export const meta = {
  title: "Interactive Test ${num}",
  description: "Client-side interactive test page"
};

export default function InteractivePage${num}() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui' }}>
      <h1>⚡ Client-Only Test Page ${num}</h1>
      <p>This page uses React hooks and is rendered client-side.</p>
      
      <div style={{ marginTop: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Interactive Counter</h2>
        <p style={{ fontSize: '48px', margin: '20px 0' }}>{count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            background: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <a href="/" style={{ color: '#10b981' }}>← Back to Home</a>
      </div>
    </div>
  );
}`,

  // Mixed content
  mixedContent: (num) => `// Auto-generated test page ${num}
export const render = "server";

export const meta = {
  title: "Content Page ${num}",
  description: "Rich content test page with various elements"
};

export default function ContentPage${num}() {
  const features = [
    'Lightning Fast Builds',
    'Server Islands Support',
    'TypeScript Compatible',
    'Zero Configuration',
    'File-based Routing'
  ];
  
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <header>
        <h1>📄 Content Test Page ${num}</h1>
        <p style={{ color: '#666', fontSize: '18px' }}>
          Testing BertUI with rich content and multiple elements
        </p>
      </header>
      
      <section style={{ marginTop: '40px' }}>
        <h2>Features</h2>
        <ul style={{ lineHeight: '1.8' }}>
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </section>
      
      <section style={{ marginTop: '40px', padding: '20px', background: '#f9f9f9', borderRadius: '8px' }}>
        <h2>About This Page</h2>
        <p>Page number: <strong>${num}</strong></p>
        <p>Type: <strong>Server Island</strong></p>
        <p>Build time: <strong>Static generation</strong></p>
      </section>
      
      <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
        <a href="/" style={{ color: '#10b981', textDecoration: 'none' }}>← Back to Home</a>
      </footer>
    </div>
  );
}`
};

// Generate files
console.log(`\n🚀 Generating ${NUM_FILES} test files...\n`);

let serverIslands = 0;
let clientOnly = 0;

for (let i = 1; i <= NUM_FILES; i++) {
  // Mix file types: 60% server islands, 40% client-only
  let content, filename;
  
  if (i % 5 === 0) {
    // Every 5th file is client-only with hooks
    content = templates.clientOnly(i);
    filename = `test-client-${i}.tsx`;
    clientOnly++;
  } else if (i % 3 === 0) {
    // Every 3rd file is mixed content
    content = templates.mixedContent(i);
    filename = `test-content-${i}.tsx`;
    serverIslands++;
  } else {
    // Rest are server islands
    content = templates.serverIsland(i);
    filename = `test-island-${i}.tsx`;
    serverIslands++;
  }
  
  const filepath = join(PAGES_DIR, filename);
  writeFileSync(filepath, content, 'utf8');
  
  // Progress indicator
  if (i % 10 === 0) {
    console.log(`✅ Generated ${i}/${NUM_FILES} files...`);
  }
}

console.log(`\n✨ Generation complete!\n`);
console.log(`📊 Summary:`);
console.log(`   🏝️  Server Islands: ${serverIslands}`);
console.log(`   ⚡ Client-only: ${clientOnly}`);
console.log(`   📁 Total files: ${NUM_FILES}`);
console.log(`   📍 Location: ${PAGES_DIR}\n`);

console.log(`🔥 Next steps:`);
console.log(`   1. Run: bun run build`);
console.log(`   2. Watch the adaptive batching in action!`);
console.log(`   3. Check build time and memory usage\n`);

console.log(`🧹 To clean up:`);
console.log(`   rm -rf ${PAGES_DIR}\n`);