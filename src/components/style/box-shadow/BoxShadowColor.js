import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTooltipStyle } from "../../../store/slices/tooltip";
import { styleProperties } from "../../../enums";

const BoxShadowColor = () => {
    const dispatch = useDispatch();

    const { boxShadowColor } = useSelector(state => state.tooltip.tooltipStyle);

    const [ color, changeColor ] = useState(boxShadowColor);

    const handleColor = (value) => {

        changeColor(value);

        dispatch(changeTooltipStyle({
            option: styleProperties.boxShadow.boxShadowColor,
            value: value
        }));
    }


    return (

        <div className="grid gap-2">
            <h5>Color</h5>
            <div className="flex items-center gap-4 p-1 border border-solid border-black">
                <input type="color"
                       value={color}
                       onInput={e => handleColor(e.target.value)}/>

                <input type="text"
                       className="w-full outline-0"
                       value={color}
                       onInput={e => handleColor(e.target.value)}/>

            </div>
        </div>
    );


}
export default BoxShadowColor;