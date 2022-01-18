import { styleProperties } from "../../../enums";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTooltipStyle } from "../../../store/slices/tooltip";

const BoxShadowHorizontalLength = () => {

    const dispatch = useDispatch();
    const { boxShadowHorizontalLength } = useSelector(state => state.tooltip.tooltipStyle);
    const [ currentHorizontalLength, changeLength ] = useState(boxShadowHorizontalLength);


    const handleHorizontalLength = (value) => {
        changeLength(value);

        dispatch(changeTooltipStyle({
            option: styleProperties.boxShadow.boxShadowHorizontalLength,
            value: value
        }));
    };


    return (
        <div className="grid gap-2">

            <div className="flex justify-between items-center">
                <label>Horizontal Length</label>
                <span>{currentHorizontalLength}px</span>
            </div>

            <input type="range" min="0" max="25" step="0" className="w-full"
                   value={currentHorizontalLength}
                   onInput={e => handleHorizontalLength(e.target.value)}/>

        </div>
    );

}


export default BoxShadowHorizontalLength;