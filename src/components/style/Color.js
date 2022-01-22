import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { sections, styleProperties } from "@/enums";
import SectionHeader from "@/components/SectionHeader";
import InputColor from "@/components/InputColor";
import { changeTooltipStyle } from "@/store/slices/tooltip";

const Color = () => {

    const { color, backgroundColor } = useSelector(state => state.tooltip.tooltipStyle);
    const { [sections.color]: sectionState } = useSelector(state => state.tooltip.sections);

    const [ textColor, setTextColor ] = useState(color);
    const [ bgColor, setBgColor ] = useState(backgroundColor);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(changeTooltipStyle({
            option: styleProperties.color,
            value: textColor
        }))

    }, [ textColor ]);

    useEffect(() => {

        dispatch(changeTooltipStyle({
            option: styleProperties.backgroundColor,
            value: bgColor
        }))

    }, [ bgColor ]);


    return (

        <div className="border-b border-solid border-slate-400">

            <SectionHeader
                title="Colors"
                sectionName={sections.color}/>


            {sectionState.visibility &&


            <div className="grid gap-8 bg-stone-50 px-4 py-8">

                <InputColor
                    title="Background Color"
                    color={bgColor}
                    setColor={setBgColor}/>

                <InputColor
                    title="Text Color"
                    color={textColor}
                    setColor={setTextColor}/>

            </div>

            }

        </div>

    )
}

export default Color;