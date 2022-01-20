import React, { useEffect } from "react";
import Prism from "prismjs";
import '../assets/css/prism.css'

export default function SyntaxHighlighter({ code, language }) {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="Code">
            <pre>
               <code className={`language-${language}`}>{code}</code>
          </pre>
        </div>
    );
}
