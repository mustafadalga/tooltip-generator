import SectionHeader from "./SectionHeader";
import { sections } from "@/enums";
import { useDispatch, useSelector } from "react-redux";
import { changeTooltipText } from "@/store/slices/tooltip";
import { useState } from "react";

const TooltipText = () => {

    const dispatch = useDispatch();
    const currentTooltipText = useSelector(state => state.tooltip.tooltipText);
    const { [sections.tooltipText]: sectionVisibility } = useSelector(state => state.tooltip.sectionVisibility);

    const [ tooltipText, setTooltipText ] = useState(currentTooltipText);


    const handleTooltipText = (text) => {

        setTooltipText(text);
        dispatch(changeTooltipText(text));

    };


    return (


        <div className="border-b border-solid border-slate-400">
            <SectionHeader title="Tooltip Text" sectionName={sections.tooltipText}/>


            { sectionVisibility &&

            <div className="grid gap-10 bg-stone-50 px-4 py-8">

                <div className="grid gap-2">

                    <span className="block text-sm font-medium text-slate-700">Text</span>

                    <textarea
                        className="resize-none w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-blue-50 focus:ring-1 focus:ring-sky-500"
                        value={tooltipText}
                        onInput={e => handleTooltipText(e.target.value)}/>

                </div>
            </div>

            }

        </div>


    )
}

export default TooltipText;