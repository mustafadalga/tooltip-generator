import { styleProperties } from "@/enums";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTooltipStyle } from "@/store/slices/tooltip";

const BoxShadowVerticalLength = () => {

    const dispatch = useDispatch();
    const { boxShadowVerticalLength } = useSelector(state => state.tooltip.tooltipStyle);
    const [ currentVerticalLength, changeLength ] = useState(boxShadowVerticalLength);


    const handleVerticalLength = (value) => {
        changeLength(value);

        dispatch(changeTooltipStyle({
            option: styleProperties.boxShadow.boxShadowVerticalLength,
            value: value
        }));
    };


    return (
        <div className="grid gap-2">

            <div className="flex justify-between items-center">
                <label>Vertical Length</label>
                <span>{currentVerticalLength}px</span>
            </div>

            <input type="range" min="0" max="25" step="0" className="w-full"
                   value={currentVerticalLength}
                   onInput={e => handleVerticalLength(e.target.value)}/>

        </div>
    );

}


export default BoxShadowVerticalLength;