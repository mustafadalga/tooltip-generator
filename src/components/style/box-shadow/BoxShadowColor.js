import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { styleProperties } from "../../../enums";
import InputColor from "../../InputColor";
import { changeTooltipStyle } from "../../../store/slices/tooltip";

const BoxShadowColor = () => {
    const { boxShadowColor } = useSelector(state => state.tooltip.tooltipStyle);
    const [ color, setColor ] = useState(boxShadowColor);
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(changeTooltipStyle({
            option: styleProperties.boxShadow.boxShadowColor,
            value: color
        }))

    }, [ color ])

    return (

        <InputColor
            title="Color"
            color={color}
            setColor={setColor}/>

    );


}
export default BoxShadowColor;