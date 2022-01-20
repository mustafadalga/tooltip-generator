import { styleProperties } from "../../../enums";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InputColor from "../../InputColor";
import { changeTriangleStyle } from "../../../store/slices/tooltip";

const TriangleColor = () => {

    const { color } = useSelector(state => state.tooltip.triangleStyle);
    const [ triangleColor, setColor ] = useState(color);
    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(changeTriangleStyle({
            option: styleProperties.color,
            value: triangleColor
        }))

    }, [ triangleColor ])

    return (

        <InputColor
            title="Color"
            color={triangleColor}
            setColor={setColor}/>
    );

}

export default TriangleColor;