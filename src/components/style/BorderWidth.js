import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeTooltipStyle } from "../../store/slices/tooltip";
import { styleProperties } from "../../enums";

const BorderWidth = () => {

    const dispatch = useDispatch();
    const { borderLeftWidth, borderRightWidth, borderTopWidth, borderBottomWidth } = useSelector(state => state.tooltip.tooltipStyle);

    const [ border, changeBorderWidth ] = useState({
        [styleProperties.border.borderWidth.borderLeftWidth]: {
            label: 'Border Left',
            value: borderLeftWidth,

        },
        [styleProperties.border.borderWidth.borderRightWidth]: {
            label: 'Border Right',
            value: borderRightWidth
        },
        [styleProperties.border.borderWidth.borderTopWidth]: {
            label: 'Border Top',
            value: borderTopWidth
        },
        [styleProperties.border.borderWidth.borderBottomWidth]: {
            label: 'Border Bottom',
            value: borderBottomWidth,
        }
    });

    const handleBorderWidth = (position, value) => {
        console.log(position)

        changeBorderWidth(prevState => ({
            ...prevState,
            [position]: {
                label: prevState[position].label,
                value: value
            }
        }))


        dispatch(changeTooltipStyle({
            option: position,
            value: value
        }));


    }


    return (

        Object.keys(border).map(position => (

            <div className="grid gap-1" key={position}>

                <div className="flex justify-between items-center">
                    <label>{border[position].label}</label>
                    <span>{border[position].value}px</span>
                </div>

                <input type="range" min="0" max="25" step="0" className="w-full"
                       value={border[position].value}
                       onInput={e => handleBorderWidth(position, e.target.value)}/>


            </div>


        ))

    )
};

export default BorderWidth;