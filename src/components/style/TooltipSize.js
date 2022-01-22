import TooltipWidth from "./TooltipWidth";
import SectionHeader from "@/components/SectionHeader";
import { sections } from "@/enums";
import TooltipHeight from "./TooltipHeight";
import { useSelector } from "react-redux";

const TooltipSize = () => {

    const { [sections.tooltipSize]: sectionVisibility } = useSelector(state => state.tooltip.sectionVisibility);


    return (
        <div className="border-b border-solid border-slate-400">

            <SectionHeader
                title="Tooltip Size"
                sectionName={sections.tooltipSize}/>


            { sectionVisibility &&


            <div className="grid grid-cols-2 gap-10 bg-stone-50	 px-4 py-8">
                <TooltipWidth/>
                <TooltipHeight/>
            </div>


            }
        </div>
    );
}

export default TooltipSize;