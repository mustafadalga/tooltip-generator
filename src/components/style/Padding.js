import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTooltipStyle } from "../../store/slices/tooltip";
import { sections, styleProperties } from "../../enums";
import SectionHeader from "../SectionHeader";

const Padding = () => {

    const dispatch = useDispatch();
    const { paddingLeft, paddingRight, paddingTop, paddingBottom } = useSelector(state => state.tooltip.tooltipStyle);
    const { [sections.padding]: sectionState } = useSelector(state => state.tooltip.sections);

    const [ padding, changePadding ] = useState({
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom
    });


    const handlePadding = (type, value) => {

        changePadding(prevState => ({
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
                title="Padding"
                sectionName={sections.padding}/>


            {sectionState.visibility &&


            <div className="grid gap-10 bg-stone-50	 px-4 py-8">





                <div className="grid gap-2">

                    <div className="flex justify-between items-center">
                        <label>Padding Left</label>
                        <span>{padding.paddingLeft}px</span>
                    </div>

                    <input type="range" min="0" max="50" step="0" className="w-full"
                           value={padding.paddingLeft}
                           onInput={e => handlePadding(styleProperties.padding.paddingLeft, e.target.value)}/>

                </div>

                <div className="grid gap-2">

                    <div className="flex justify-between items-center">
                        <label>Padding Right</label>
                        <span>{padding.paddingRight}px</span>
                    </div>

                    <input type="range" min="0" max="50" step="0" className="w-full"
                           value={padding.paddingRight}
                           onInput={e => handlePadding(styleProperties.padding.paddingRight, e.target.value)}/>

                </div>

                <div className="grid gap-2">

                    <div className="flex justify-between items-center">
                        <label>Padding Top</label>
                        <span>{padding.paddingTop}px</span>
                    </div>


                    <input type="range" min="0" max="50" step="0" className="w-full"
                           value={padding.paddingTop}
                           onInput={e => handlePadding(styleProperties.padding.paddingTop, e.target.value)}/>

                </div>

                <div className="grid gap-2">

                    <div className="flex justify-between items-center">
                        <label>Padding Bottom</label>
                        <span>{padding.paddingBottom}px</span>
                    </div>

                    <input type="range" min="0" max="50" step="0" className="w-full"
                           value={padding.paddingBottom}
                           onInput={e => handlePadding(styleProperties.padding.paddingBottom, e.target.value)}/>

                </div>
            </div>


            }


        </div>

    );

}


export default Padding;