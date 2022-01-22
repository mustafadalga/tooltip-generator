import SyntaxHighlighter from "./SyntaxHighlighter";
import { useSelector } from "react-redux";
import htmlCodeOutputTemplate from "@/utils/htmlCodeOutputTemplate";

const HTMLCode = () => {

    const tooltipText = useSelector(state => state.tooltip.tooltipText);

    return (

        <SyntaxHighlighter language="html" code={htmlCodeOutputTemplate(tooltipText)}/>

    );
}

export default HTMLCode;