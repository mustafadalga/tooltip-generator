import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTooltipStyle } from "../../store/slices/tooltip";
import { styleProperties } from "../../enums";

const TooltipHeight = () => {

    const dispatch = useDispatch();
    const { height } = useSelector(state => state.tooltip.tooltipStyle);
    const [ currentHeight, changeHeight ] = useState(height);


    const handleHeight = (value) => {
        const integerValue = parseInt(value)

        changeHeight(integerValue);


        dispatch(changeTooltipStyle({
            option: styleProperties.height,
            value: integerValue
        }));
    }


    return (
        <div className="grid gap-2">

            <span className="text-sm">Height</span>

            <div className="flex items-center h-10">
                <button
                    onClick={() => handleHeight(currentHeight - 1)}
                    className="border border-solid border-black-400 border-r-0 text-gray hover:bg-blue-50 w-10 h-full rounded-l cursor-pointer outline-none :focus:outline-none">

                    <span className="text-2xl">−</span>
                </button>

                <input type="number"
                       value={currentHeight}
                       onInput={e => handleHeight(e.target.value)}
                       className="w-24 h-full px-3 text-center	 border border-solid border-black-400 border-x-0	focus:outline-none"/>

                <button
                    onClick={() => handleHeight(currentHeight + 1)}
                    className="border border-solid border-black-400 border-l-0 text-gray hover:bg-blue-50 w-10 h-full rounded-l cursor-pointer outline-none">

                    <span className="text-2xl">+</span>

                </button>

            </div>
        </div>
    );

}

export default TooltipHeight;