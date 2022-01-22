import { useDispatch, useSelector } from "react-redux";
import { changeTooltipStyle } from "@/store/slices/tooltip";
import { sections, styleProperties } from "@/enums";
import SectionHeader from "@/components/SectionHeader";

const Position = () => {

    const dispatch = useDispatch();
    const { position: selectedPosition } = useSelector(state => state.tooltip.tooltipStyle);
    const { [sections.position]: sectionState } = useSelector(state => state.tooltip.sections);


    const handleTextAlign = (position) => {

        dispatch(changeTooltipStyle({
            option: sections.position,
            value: position
        }));

    };

    return (

        <div className="border-b border-solid border-slate-400">

            <SectionHeader title="Position" sectionName={sections.position}/>


            { sectionState.visibility &&


            <div className="grid grid-rows-2 grid-cols-2 gap-10 bg-stone-50	 px-4 py-8">


                {Object.keys(styleProperties.positions).map(position=> (


                    <div className="flex items-center" key={position}>

                        <input id={position}
                               type="radio"
                               name="position"
                               value={position}
                               className="h-5 w-5 border-gray-300 focus:ring-2 focus:ring-blue-300 cursor-pointer"
                               checked={position == selectedPosition}
                               onChange={() => handleTextAlign(position)}/>

                        <label htmlFor={position}
                               className="font-medium text-gray-900 ml-2 block cursor-pointer">

                            {position}
                        </label>

                    </div>

                ))}

            </div>

            }
        </div>

    );
}

export default Position;