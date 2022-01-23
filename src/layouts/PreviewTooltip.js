import tooltipStyle from "@/utils/tooltipStyle";
import triangleStyle from "@/utils/triangleStyle";
import { useSelector } from "react-redux";
import { useState } from "react";

const PreviewTooltip = () => {

    const tooltipText = useSelector(state => state.tooltip.tooltipText);

    const tooltipOptions = useSelector(state => state.tooltip.tooltipStyle);
    const triangleOptions = useSelector(state => state.tooltip.triangleStyle);

    const tooltipStyleObject = tooltipStyle(tooltipOptions);
    const triangleStyleObject = triangleStyle(tooltipOptions, triangleOptions);

    const [ preview, changePreviewStatus ] = useState(false);


    return (
        <div className="row-span-3 col-span-9 flex justify-center items-center overflow-auto relative">


            <div className="absolute top-4 left-4 flex items-center gap-2">

                <input
                    type="checkbox"
                    id="preview"
                    className="w-6 h-6 cursor-pointer"
                    defaultChecked={preview}
                    onChange={(e) => changePreviewStatus(e.target.checked)}/>

                <label htmlFor="preview" className="cursor-pointer">Preview</label>

            </div>


            <div className="relative group">
                <p className="cursor-pointer">Hover over me</p>

                <div
                    className={`group-hover:!visible group-hover:!opacity-100 ${!preview ? '!visible !opacity-100' : ''}`}
                    style={tooltipStyleObject}>

                    <span>{tooltipText}</span>
                    <i className="triangle" style={triangleStyleObject}/>

                </div>
            </div>

        </div>
    );
};

export default PreviewTooltip;