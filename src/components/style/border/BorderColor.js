import { styleProperties } from "@/enums";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InputColor from "@/components/InputColor";
import { changeTooltipStyle } from "@/store/slices/tooltip";

const BorderColor = () => {

    const { borderColor } = useSelector(state => state.tooltip.tooltipStyle);
    const [ color, setColor ] = useState(borderColor);
    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(changeTooltipStyle({
            option: styleProperties.border.borderColor,
            value: color
        }))

    }, [ color ])

    return (

        <InputColor
            title="Border Color"
            color={color}
            setColor={setColor}/>
    );

}

export default BorderColor;