import SideBar from "@/layouts/SideBar";
import PreviewTooltipCode from "@/layouts/PreviewTooltipCode";
import PreviewTooltip from "@/layouts/PreviewTooltip";
import React, { useState, Suspense } from "react";
import { useSelector } from "react-redux";
import htmlCodeOutputTemplate from "@/utils/htmlCodeOutputTemplate";
import cssCodeOutputTemplate from "@/utils/cssCodeOutputTemplate";
import tooltipStyle from "@/utils/tooltipStyle";
import triangleStyle from "@/utils/triangleStyle";

const Modal = React.lazy(() => import(/* webpackChunkName: "Modal"*/ '@/components/Modal'));

function App() {

    const tooltipText = useSelector(state => state.tooltip.tooltipText);
    const tooltipOptions = useSelector(state => state.tooltip.tooltipStyle);
    const triangleOptions = useSelector(state => state.tooltip.triangleStyle);
    const tooltipStyleOutput = tooltipStyle(tooltipOptions);
    const triangleStyleOutput = triangleStyle(tooltipOptions, triangleOptions);

    const code = {
        html: htmlCodeOutputTemplate(tooltipText),
        css: cssCodeOutputTemplate(tooltipStyleOutput, triangleStyleOutput)
    }

    const [ showModal, changeModalVisibility ] = useState(false);


    return (
        <div className="w-full h-screen	max-w-screen-3xl mx-auto grid grid-rows-5 grid-cols-12">


            <Suspense fallback={<div>Loading...</div>}>
                {showModal && <Modal changeModalVisibility={changeModalVisibility}/>}
            </Suspense>


            <SideBar
                className="row-span-full col-span-3 w-full border-r border-solid border-slate-400 relative overflow-y-auto"/>

            <PreviewTooltip
                className="row-span-3 col-span-9 flex justify-center items-center overflow-auto relative"
                changeModalVisibility={changeModalVisibility}
                tooltipText={tooltipText}
                tooltipStyleOutput={tooltipStyleOutput}
                triangleStyleOutput={triangleStyleOutput}/>

            <PreviewTooltipCode
                className="row-span-2 col-span-9 bg-stone-50"
                code={code}/>

        </div>
    );
}

export default App;
