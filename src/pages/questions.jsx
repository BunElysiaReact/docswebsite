// communityquestions.jsx
import React from "react";
export default function Questions() {
    return (
        <div className="community-q-container">
            <header className="community-q-header">
                <h1 className="community-q-title">Community Q&A Log</h1>
                <p className="community-q-intro">
                    This page logs recent, specific questions asked by the BertUI community, along with official, concise answers.
                    These questions often help shape the content of the main FAQ.
                </p>
                <div className="community-q-note">
                    If you have a question, please ask on our GitHub or Discord (links in the footer)!
                </div>
            </header>

            <section className="community-q-section">
                
                {/* --- Example Question 1: The 'Hello World' issue --- */}
                <CommunityQuestionItem
                    id="Q001"
                    question="I tried running the simple 'Hello World' example, but I get an error saying 'React is not defined'."
                    answer="This is a known issue (Bug #1). Please temporarily add 'import React from 'react';' to the top of your component file. This is a top-priority fix for the next patch."
                />

                {/* --- Example Question 2: Deployment target --- */}
                <CommunityQuestionItem
                    id="Q002"
                    question="Does BertUI support deployment to Vercel/Netlify, or is it only for self-hosting with Bun?"
                    answer="Yes, the output is standard HTML/CSS/JS which can be hosted on any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.). We recommend using the provided 'build' script which generates the deployable 'dist' folder."
                />

                {/* --- Template for New Questions --- */}
                <div className="community-q-placeholder">
                    <p>New community questions and their answers will be logged here!</p>
                </div>
                
            </section>
        </div>
    );
}

// Helper Component for Q&A Pairs
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