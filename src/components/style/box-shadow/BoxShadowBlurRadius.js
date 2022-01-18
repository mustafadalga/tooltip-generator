import { styleProperties } from "../../../enums";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTooltipStyle } from "../../../store/slices/tooltip";

const BoxShadowBlurRadius = () => {

    const dispatch = useDispatch();
    const { boxShadowBlurRadius } = useSelector(state => state.tooltip.tooltipStyle);
    const [ currentBlurRadius, changeBlurRadius ] = useState(boxShadowBlurRadius);


    const handleBlurRadius = (value) => {
        changeBlurRadius(value);

        dispatch(changeTooltipStyle({
            option: styleProperties.boxShadow.boxShadowBlurRadius,
            value: value
        }));
    };


    return (
        <div className="grid gap-2">

            <div className="flex justify-between items-center">
                <label>Blur Radius</label>
                <span>{currentBlurRadius}px</span>
            </div>

            <input type="range" min="0" max="25" step="0" className="w-full"
                   value={currentBlurRadius}
                   onInput={e => handleBlurRadius(e.target.value)}/>

        </div>
    );

}


export default BoxShadowBlurRadius;