import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sections, styleProperties } from "../../enums";
import { changeTooltipStyle } from "../../store/slices/tooltip";
import SectionHeader from "../SectionHeader";

const Color = () => {

    const dispatch = useDispatch();
    const { color, backgroundColor } = useSelector(state => state.tooltip.tooltipStyle);
    const { [sections.color]: sectionState } = useSelector(state => state.tooltip.sections);


    const [ colors, changeColor ] = useState({
        backgroundColor: backgroundColor,
        color: color
    });

    const handleColor = (type, value) => {

        changeColor(prevState => ({
            ...prevState,
            [type]: value
        }));


        dispatch(changeTooltipStyle({
            option: type,
            value: value
        }));
    }


    return (


        <div className="border-b border-solid border-slate-400">


            <SectionHeader
                title="Colors"
                sectionName={sections.color}/>


            {sectionState.visibility &&


            <div className="grid gap-8 bg-stone-50 px-4 py-8">


                <div className="grid gap-2">
                    <h5>Background Color</h5>
                    <div className="flex items-center gap-4 p-1 border border-solid border-black">
                        <input type="color"
                               value={colors.backgroundColor}
                               onInput={e => handleColor(styleProperties.colors.backgroundColor, e.target.value)}/>

                        <input type="text"
                               className="w-full outline-0"
                               value={colors.backgroundColor}
                               onInput={e => handleColor(styleProperties.colors.backgroundColor, e.target.value)}/>

                    </div>
                </div>

                <div className="grid gap-2">
                    <h5>Text Color</h5>
                    <div className="flex items-center gap-4 p-1 border border-solid border-black">
                        <input type="color"
                               value={colors.color}
                               onInput={e => handleColor(styleProperties.colors.color, e.target.value)}/>

                        <input type="text"
                               className="w-full outline-0"
                               value={colors.color}
                               onInput={e => handleColor(styleProperties.colors.color, e.target.value)}/>
                    </div>
                </div>

            </div>

            }


        </div>

    )
}

export default Color;