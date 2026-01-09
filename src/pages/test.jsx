// src/pages/typescript-test.tsx - SIMPLER VERSION
export const render = "server";

// Empty interface since we don't use props


export default function TypeScriptTest() {
  return (
    <div>
      <h1>TypeScript Server Island Test ✅</h1>
      <p>This page is written in TypeScript (.tsx)</p>
      
      <a href="/">
        ← Go Home (Regular anchor tag)
      </a>
    </div>
  );
}

export const meta = {
  title: "TypeScript Test - BertUI",
  description: "Testing TypeScript support with Server Islands"
};