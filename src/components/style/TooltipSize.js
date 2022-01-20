import TooltipWidth from "./TooltipWidth";
import SectionHeader from "../SectionHeader";
import { sections } from "../../enums";
import TooltipHeight from "./TooltipHeight";
import { useSelector } from "react-redux";

const TooltipSize = () => {

    const { [sections.tooltipSize]: sectionState } = useSelector(state => state.tooltip.sections);


    return (
        <div className="border-b border-solid border-slate-400">

            <SectionHeader
                title="Tooltip Size"
                sectionName={sections.tooltipSize}/>


            {sectionState.visibility &&


            <div className="grid grid-cols-2 gap-10 bg-stone-50	 px-4 py-8">
                <TooltipWidth/>
                <TooltipHeight/>
            </div>


            }
        </div>
    );
}

export default TooltipSize;