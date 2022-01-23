import { useState } from "react";
import CopyCode from "@/components/CopyCode";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";

const PreviewTooltipCode = ({ className,code }) => {


    const tabs = {
        html: 'html',
        css: 'css'
    }

    const [ activeTab, setActiveTab ] = useState(tabs.html);

    return (

        <div className={`overflow-auto ${className}`}>

            <div className="w-full flex items-center justify-between pr-4">
                <div className="flex">

                    <div
                        className={`border border-solid border-0 border-b-8 py-2 px-10 cursor-pointer ${activeTab == tabs.html ? 'border-blue-400' : 'border-zinc-400'}`}
                        onClick={() => setActiveTab(tabs.html)}>

                        <span className="text-lg">HTML</span>

                    </div>

                    <div
                        className={`border border-solid border-0 border-b-8 py-2 px-10 cursor-pointer ${activeTab == tabs.css ? 'border-blue-400' : 'border-zinc-400'}`}
                        onClick={() => setActiveTab(tabs.css)}>

                        <span className="text-lg">CSS</span>

                    </div>

                </div>
                <CopyCode code={code[activeTab]} />
            </div>


            <SyntaxHighlighter language={activeTab} code={code[activeTab]}/>
        </div>

    );
}

export default PreviewTooltipCode;