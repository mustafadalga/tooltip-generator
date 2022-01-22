import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTriangleStyle } from "@/store/slices/tooltip";
import { styleProperties } from "@/enums";

const TriangleHeight = () => {

    const dispatch = useDispatch();
    const { height } = useSelector(state => state.tooltip.triangleStyle);
    const [ currentHeight, changeHeight ] = useState(height);

    const handleHeight = (value) => {
        changeHeight(value);

        dispatch(changeTriangleStyle({
            option: styleProperties.height,
            value: value
        }));

    };

    return (

        <div className="grid gap-2">

            <div className="flex justify-between items-center">
                <label>Height</label>
                <span>{currentHeight}px</span>
            </div>

            <input type="range" min="8" max="40" step="0" className="w-full"
                   value={currentHeight}
                   onInput={e => handleHeight(e.target.value)}/>

        </div>
    );


}
export default TriangleHeight;