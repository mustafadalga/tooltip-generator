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
            <div className="flex h-8 border border-solid border-blue-200">
                <input type="color"
                       className="h-full"
                       value={color}
                       onInput={e => handleColor(e.target.value)}/>

                <input type="text"
                       className="w-full h-full outline-0 px-3"
                       value={color}
                       onInput={e => handleColor(e.target.value)}/>

            </div>
        </div>
    );


}
export default BoxShadowColor;