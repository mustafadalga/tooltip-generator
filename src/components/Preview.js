import tooltipStyle from "../utils/tooltip-styles";
import { useSelector } from "react-redux";


const Preview = () => {

    const tooltipText = useSelector(state => state.tooltip.tooltipText);
    const options = useSelector(state => state.tooltip.tooltipStyle);

    const styles = tooltipStyle(options);

    return (
        <div className="preview  row-span-3 col-span-9 grid place-items-center	">


            <div className="m-20">
                <div className="tooltip-container">
                    <p>Hover:Lorem ipsum</p>

                    <div className="tooltip" style={styles}>
                        <span>{tooltipText}</span>
                        <i className="triangle"></i>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Preview;