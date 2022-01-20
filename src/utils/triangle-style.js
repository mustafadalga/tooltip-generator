import { styleProperties } from "../enums";

const handleTooltipBorder = (tooltipOptions) => {

    const positions = {
        top: {
            withBorder: {
                top: `calc(100% + ${tooltipOptions.borderBottomWidth}px)`,
            },
            noBorder: {
                top: '100%'
            }
        },
        bottom: {
            withBorder: {
                bottom: `calc(100% + ${tooltipOptions.borderTopWidth}px)`,
            },
            noBorder: {
                bottom: '100%'
            }
        },
        left: {
            withBorder: {
                left: `calc(100% + ${tooltipOptions.borderRightWidth}px)`,
            },
            noBorder: {
                left: '100%'
            }
        },
        right: {
            withBorder: {
                right: `calc(100% + ${tooltipOptions.borderLeftWidth}px)`,
            },
            noBorder: {
                right: '100%'
            }
        }
    }

    if (tooltipOptions.borderStyle == styleProperties.border.borderStyle.none) {

        return positions[tooltipOptions.position].noBorder;

    }

    return positions[tooltipOptions.position].withBorder

}

const triangleStyle = (tooltipOptions, triangleOptions) => {

    let style = {};

    switch (tooltipOptions.position) {

        case styleProperties.positions.top:

            style = {
                left: '50%',
                transform: 'translateX(-50%)',
                borderColor: `${tooltipOptions.backgroundColor} transparent transparent`,
                borderWidth: `${triangleOptions.height}px ${triangleOptions.width / 2}px 0px`,
            }

            break;

        case styleProperties.positions.bottom:

            style = {
                left: '50%',
                transform: 'translateX(-50%)',
                borderColor: `transparent transparent ${tooltipOptions.backgroundColor}`,
                borderWidth: `0px ${triangleOptions.width / 2}px ${triangleOptions.height}px`,
            }

            break;

        case styleProperties.positions.left:

            style = {
                top: "50%",
                transform: 'translateY(-50%)',
                borderColor: `transparent transparent transparent ${tooltipOptions.backgroundColor}`,
                borderWidth: `${triangleOptions.height / 2}px 0px ${triangleOptions.height / 2}px ${triangleOptions.width}px`,
            }

            break;

        case styleProperties.positions.right:

            style = {
                top: "50%",
                transform: 'translateY(-50%)',
                borderColor: `transparent ${tooltipOptions.backgroundColor} transparent transparent`,
                borderWidth: `${triangleOptions.height / 2}px ${triangleOptions.width}px ${triangleOptions.height / 2}px 0px`,
            }

            break;

    }

    style = {
        position: 'absolute',
        ...style,
        ...handleTooltipBorder(tooltipOptions)
    }

    return style;
}

export default triangleStyle;