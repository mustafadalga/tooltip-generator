import React, { useState } from "react";
import PreviewTooltipCode from "@/layouts/PreviewTooltipCode";
import examples from "@/examples";
import cssCodeOutputTemplate from "@/utils/cssCodeOutputTemplate";
import Close from "@/components/icons/Close";

const Template1 = React.lazy(() => import(/* webpackChunkName: "Template1"*/ '@/examples/html-templates/Template1'));
const Template2 = React.lazy(() => import(/* webpackChunkName: "Template2"*/ '@/examples/html-templates/Template2'));

const Modal = ({ changeModalVisibility }) => {

    const templates = {
        1: Template1,
        2: Template2
    }
    const [ exampleNo, changeExample ] = useState(1);

    const activeExampleCodes = {
        html: examples[exampleNo].tooltipHTML,
        css: cssCodeOutputTemplate(examples[exampleNo].tooltipStyle, examples[exampleNo].triangleStyle)
    }

    const DynamicComponent = templates[exampleNo];

    return (
        <div className="fixed inset-0 w-screen h-screen p-8 bg-black/50 z-10">

            <div className="relative grid grid-rows-2 w-full h-full bg-blue-50 box-border">

                <div className="absolute right-2 top-2 z-20 cursor-pointer"
                     onClick={() => changeModalVisibility(false)}>
                    <Close className="text-black/75"/>
                </div>


                <div className="absolute left-8 top-6 flex">

                    {Object.keys(templates).map((_, index) => (

                        <div key={index}
                             className={`border z-20 border-solid border-0 border-b-4 py-2 px-8 cursor-pointer ${exampleNo == index + 1 ? 'border-blue-400' : 'border-zinc-400'}`}
                             onClick={() => changeExample(index + 1)}>

                            Example {index + 1}
                        </div>

                    ))}

                </div>


                <div className="flex items-center justify-center row-span-1 col-span-full overflow-auto relative">

                    <DynamicComponent
                        tooltipStyle={examples[exampleNo].tooltipStyle}
                        triangleStyle={examples[exampleNo].triangleStyle}/>
                </div>


                <PreviewTooltipCode className="row-span-1 col-span-full" code={activeExampleCodes}/>


            </div>
        </div>
    )
}
export default Modal;