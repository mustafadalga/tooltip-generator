import { sections, styleProperties } from "@/enums";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTooltipStyle } from "@/store/slices/tooltip";
import SectionHeader from "@/components/SectionHeader";
const BorderRadius = () => {
    const dispatch = useDispatch();

    const { borderRadius } = useSelector(state => state.tooltip.tooltipStyle);
    const { [sections.borderRadius]: sectionVisibility } = useSelector(state => state.tooltip.sectionVisibility);

    const [ borderRadiusStyle, changeBorderRadius ] = useState(borderRadius);

    const handleBorderRadius = (type, value) => {

        changeBorderRadius(value);


        dispatch(changeTooltipStyle({
            option: type,
            value: value
        }));
    }


    return (

        <div className="border-b border-solid border-slate-400">

            <SectionHeader
                title="Border Radius"
                sectionName={sections.borderRadius}/>


            { sectionVisibility &&


            <div className="grid gap-2 bg-stone-50 px-4 py-8">

                <div className="flex justify-between items-center">
                    <label>Border Radius</label>
                    <span>{borderRadiusStyle}px</span>
                </div>


                <input type="range" min="0" max="50" step="0" className="w-full"
                       value={borderRadiusStyle}
                       onInput={e => handleBorderRadius(styleProperties.borderRadius, e.target.value)}/>


            </div>

            }
        </div>

    )
}

export default BorderRadius;