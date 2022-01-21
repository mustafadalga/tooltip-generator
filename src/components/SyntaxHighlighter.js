import React, { useEffect } from "react";
import Prism from "prismjs";
import '../assets/css/prism.css'

export default function SyntaxHighlighter({ code, language }) {

    useEffect(() => {
        Prism.highlightAll();
    }, [ code ]);

    return (
          <pre>
               <code className={`language-${language}`}>{code}</code>
          </pre>
    );
}
