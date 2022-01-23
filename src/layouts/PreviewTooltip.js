import { useState } from "react";

const PreviewTooltip = (props) => {

    const [ preview, changePreviewStatus ] = useState(false);

    return (
        <div className={props.className}>


            <div className="absolute top-4 left-4 flex gap-4 flex-col	">

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="preview"
                        className="w-6 h-6 cursor-pointer"
                        defaultChecked={preview}
                        onChange={(e) => changePreviewStatus(e.target.checked)}/>

                    <label htmlFor="preview" className="cursor-pointer">Preview</label>
                </div>

                <div className="flex items-center gap-2">

                    <div
                        className="cursor-pointer border border-0 border-b border-black"
                        onClick={() => props.changeModalVisibility(true)}>

                        <span>Tooltip Examples</span>

                    </div>

                </div>
            </div>


            <div className="relative group">
                <p className="cursor-pointer">Hover over me</p>

                <div
                    className={`group-hover:!visible group-hover:!opacity-100 ${!preview ? '!visible !opacity-100' : ''}`}
                    style={props.tooltipStyleOutput}>

                    <span>{props.tooltipText}</span>
                    <i style={props.triangleStyleOutput}/>

                </div>
            </div>

        </div>
    );
};

export default PreviewTooltip;