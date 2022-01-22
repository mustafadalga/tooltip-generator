import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTriangleStyle } from "@/store/slices/tooltip";
import { styleProperties } from "@/enums";

const TriangleWidth = () => {

    const dispatch = useDispatch();
    const { width } = useSelector(state => state.tooltip.triangleStyle);
    const [ currentWidth, changeWidth ] = useState(width);

    const handleWidth = (value) => {
        changeWidth(value);

        dispatch(changeTriangleStyle({
            option: styleProperties.width,
            value: value
        }));

    };

    return (

        <div className="grid gap-2">

            <div className="flex justify-between items-center">
                <label>Width</label>
                <span>{currentWidth}px</span>
            </div>

            <input type="range" min="8" max="40" step="0" className="w-full"
                   value={currentWidth}
                   onInput={e => handleWidth(e.target.value)}/>

        </div>
    );


}
export default TriangleWidth;