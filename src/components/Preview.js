import tooltipStyle from "../utils/tooltipStyle";
import triangleStyle from "../utils/triangleStyle";
import { useSelector } from "react-redux";


const Preview = () => {

    const tooltipText = useSelector(state => state.tooltip.tooltipText);

    const tooltipOptions = useSelector(state => state.tooltip.tooltipStyle);
    const triangleOptions = useSelector(state => state.tooltip.triangleStyle);

    const tooltipStyleObject =  tooltipStyle(tooltipOptions);
    const triangleStyleObject = triangleStyle(tooltipOptions,triangleOptions)

    return (
        <div className="row-span-3 col-span-9 flex justify-center items-center overflow-auto">


                <div className="tooltip-container">
                    <p>Hover:Lorem ipsum</p>

                    <div className="tooltip" style={tooltipStyleObject}>

                        <span>{tooltipText}</span>
                        <i className="triangle" style={triangleStyleObject}/>

                    </div>
                </div>

        </div>
    );
};

export default Preview;