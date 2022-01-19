import { styleProperties } from "../enums";

const triangleStyle = (tooltipOptions, triangleOptions) => {

    let style = {};

    switch (tooltipOptions.position) {

        case styleProperties.positions.top:

            style = {
                top: `calc(100% + ${tooltipOptions.borderBottomWidth}px)`,
                left: '50%',
                transform: 'translateX(-50%)',
                borderColor: `${tooltipOptions.backgroundColor} transparent transparent`,
                borderWidth: `${triangleOptions.height}px ${triangleOptions.width / 2}px 0px`,
            }

            break;

        case styleProperties.positions.bottom:

            style = {
                bottom: `calc(100% + ${tooltipOptions.borderTopWidth}px)`,
                left: '50%',
                transform: 'translateX(-50%)',
                borderColor: `transparent transparent ${tooltipOptions.backgroundColor}`,
                borderWidth: `0px ${triangleOptions.width / 2}px ${triangleOptions.height}px`,
            }

            break;

        case styleProperties.positions.left:

            style = {
                left: `calc(100% + ${tooltipOptions.borderRightWidth}px)`,
                top: "50%",
                transform: 'translateY(-50%)',
                borderColor: `transparent transparent transparent ${tooltipOptions.backgroundColor}`,
                borderWidth: `${triangleOptions.height / 2}px 0px ${triangleOptions.height / 2}px ${triangleOptions.width}px`,
            }

            break;

        case styleProperties.positions.right:

            style = {
                right: `calc(100% + ${tooltipOptions.borderLeftWidth}px)`,
                top: "50%",
                transform: 'translateY(-50%)',
                borderColor: `transparent ${tooltipOptions.backgroundColor} transparent transparent`,
                borderWidth: `${triangleOptions.height / 2}px ${triangleOptions.width}px ${triangleOptions.height / 2}px 0px`,
            }

            break;

    }

    style.position = 'absolute';

    return style;
}

export default triangleStyle;