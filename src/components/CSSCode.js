import SyntaxHighlighter from "./SyntaxHighlighter";
import { useSelector } from "react-redux";
import tooltipStyle from "@/utils/tooltipStyle";
import triangleStyle from "@/utils/triangleStyle";
import cssCodeOutputTemplate from "@/utils/cssCodeOutputTemplate";

const CSSCode = () => {


    const tooltipOptions = useSelector(state => state.tooltip.tooltipStyle);
    const triangleOptions = useSelector(state => state.tooltip.triangleStyle);
    const tooltipStyleObject = tooltipStyle(tooltipOptions);
    const triangleStyleObject = triangleStyle(tooltipOptions, triangleOptions);


    return (

        <SyntaxHighlighter
            language="css"
            code={cssCodeOutputTemplate(tooltipStyleObject, triangleStyleObject)}/>

    );
}

export default CSSCode;