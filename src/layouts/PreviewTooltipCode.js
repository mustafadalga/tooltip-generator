import { useState } from "react";
import HTMLCode from "@/components/HTMLCode";
import CSSCode from "@/components/CSSCode";
import CopyCode from "@/components/CopyCode";
import htmlCodeOutputTemplate from "@/utils/htmlCodeOutputTemplate";
import { useSelector } from "react-redux";
import cssCodeOutputTemplate from "@/utils/cssCodeOutputTemplate";
import tooltipStyle from "@/utils/tooltipStyle";
import triangleStyle from "@/utils/triangleStyle";

const PreviewTooltipCode = () => {
    const tooltipText = useSelector(state => state.tooltip.tooltipText);
    const tooltipOptions = useSelector(state => state.tooltip.tooltipStyle);
    const triangleOptions = useSelector(state => state.tooltip.triangleStyle);
    const tooltipStyleObject = tooltipStyle(tooltipOptions);
    const triangleStyleObject = triangleStyle(tooltipOptions, triangleOptions);

    const tabs = {
        html: 'html',
        css: 'css'
    }

    const code = {
        html: htmlCodeOutputTemplate(tooltipText),
        css: cssCodeOutputTemplate(tooltipStyleObject, triangleStyleObject)
    }

    const [ activeTab, setActiveTab ] = useState(tabs.html);


    return (

        <div className="row-span-2 col-span-9 bg-stone-50 overflow-hidden">

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


            <div className="overflow-y-auto h-full">
                {activeTab == tabs.html ? <HTMLCode/> : <CSSCode/> }
            </div>


        </div>
    );
}

export default PreviewTooltipCode;