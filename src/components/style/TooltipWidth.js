import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTooltipStyle } from "@/store/slices/tooltip";
import { styleProperties } from "@/enums";

const TooltipWidth = () => {

    const dispatch = useDispatch();
    const { width } = useSelector(state => state.tooltip.tooltipStyle);
    const [ currentWidth, changeWidth ] = useState(width);


    const handleWidth = (value) => {
        const integerValue = parseInt(value)

        changeWidth(integerValue);


        dispatch(changeTooltipStyle({
            option: styleProperties.width,
            value: integerValue
        }));
    }


    return (
        <div className="grid gap-2">

            <span className="text-sm">Width</span>

            <div className="flex items-center h-10">
                <button
                    onClick={() => handleWidth(currentWidth - 1)}
                    className="border border-solid border-black-400 border-r-0 text-gray hover:bg-blue-50 w-10 h-full rounded-l cursor-pointer outline-none :focus:outline-none">

                    <span className="text-2xl">−</span>
                </button>

                <input type="number"
                       value={currentWidth}
                       onInput={e => handleWidth(e.target.value)}
                       className="w-24 h-full px-3 text-center	 border border-solid border-black-400 border-x-0	focus:outline-none"/>

                <button
                    onClick={() => handleWidth(currentWidth + 1)}
                    className="border border-solid border-black-400 border-l-0 text-gray hover:bg-blue-50 w-10 h-full rounded-l cursor-pointer outline-none">

                    <span className="text-2xl">+</span>

                </button>

            </div>
        </div>
    );

}

export default TooltipWidth;