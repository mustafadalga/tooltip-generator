import SectionHeader from "../SectionHeader";
import { sections, styleProperties } from "../../enums";
import { useDispatch, useSelector } from "react-redux";
import { changeTooltipStyle } from "../../store/slices/tooltip";

const TextAlign = () => {

    const dispatch = useDispatch();
    const { textAlign: selectedTextAlign } = useSelector(state => state.tooltip.tooltipStyle);
    const { [sections.textAlign]: sectionState } = useSelector(state => state.tooltip.sections);

    const handleTextAlign = (align) => {

        dispatch(changeTooltipStyle({
            option: sections.textAlign,
            value: align
        }));

    };


    return (

        <div className="border-b border-solid border-slate-400">

            <SectionHeader
                title="Text Alignment"
                sectionName={sections.textAlign}/>

            {sectionState.visibility &&


            <div className="grid grid-cols-3 gap-10 bg-stone-50	 px-4 py-8">

                {Object.keys(styleProperties.textAlign).map((alignment) => (

                    <div className="flex items-center" key={alignment}>

                        <input id={alignment}
                               type="radio"
                               name="textAlignment"
                               value={alignment}
                               className="h-5 w-5 border-gray-300 focus:ring-2 focus:ring-blue-300 cursor-pointer"
                               checked={alignment == selectedTextAlign}
                               onChange={() => handleTextAlign(alignment)}/>

                        <label htmlFor={alignment}
                               className="text-sm font-medium text-gray-900 ml-2 block cursor-pointer">

                            {alignment}
                        </label>

                    </div>

                ))}


            </div>

            }

        </div>
    )
}

export default TextAlign;