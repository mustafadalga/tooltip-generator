import { styleProperties } from "../../enums";
import ChevronDown from "../icons/chevronDown";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTooltipStyle } from "../../store/slices/tooltip";

const BorderStyle = () => {

    const dispatch = useDispatch();
    const { borderStyle } = useSelector(state => state.tooltip.tooltipStyle);
    const [ currentBorderStyle, changeBorderStyle ] = useState(borderStyle);
    const [ listVisibility, changeListVisibility ] = useState(false);

console.log(Object.keys(styleProperties.border))
    const handleBorderStyle = (value) => {
         changeBorderStyle(value);

        dispatch(changeTooltipStyle({
            option: 'borderStyle',
            value: value
        }));
        changeListVisibility(false);
    };

    return (

        <div className="grid gap-2">
            <h5>Border Style</h5>
            <div className="relative w-full  bg-white capitalize" onClick={()=>changeListVisibility(!listVisibility)}>
                <div className="flex justify-between px-2 py-2 ">
                    <span>{currentBorderStyle}</span>
                    <ChevronDown className="cursor-pointer" />
                </div>




                <div className="absolute top-full grid w-full mt-1 max-h-72	overflow-auto">

                    {listVisibility && Object.keys(styleProperties.border.borderStyle).map(type => (

                        <div className="w-full px-2 py-2 bg-white hover:bg-blue-50 cursor-pointer capitalize"
                             key={type}
                             onClick={()=>handleBorderStyle(type)}>

                            <span>{type}</span>

                        </div>


                    ))}

                </div>

            </div>

        </div>


    );
}


export default BorderStyle;