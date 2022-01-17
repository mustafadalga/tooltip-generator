import { styleProperties } from "../enums";


const tooltipStyle = (options) => {
    const style = {
        position: 'absolute',
        // visibility: 'hidden',
        // opacity: 0,
        backgroundColor:options.backgroundColor,
        color: options.color,
        paddingLeft:`${options.paddingLeft}px`,
        paddingRight:`${options.paddingRight}px`,
        paddingTop:`${options.paddingTop}px`,
        paddingBottom:`${options.paddingBottom}px`,
        borderRadius:`${options.borderRadius}px`,
        textAlign:`${options.textAlign}`,
        wordWrap: 'break-word',
        borderColor:`${options.borderColor}`,
        borderLeftWidth: `${options.borderLeftWidth}px`,
        borderRightWidth: `${options.borderRightWidth}px`,
        borderTopWidth: `${options.borderTopWidth}px`,
        borderBottomWidth:`${options.borderBottomWidth}px`,
    }

    console.log(style)


    switch (options.position) {

        case styleProperties.positions.top:
            style.left = "50%"
            style.transform = 'translateX(-50%)'
            style.bottom = 'calc(100% + 15px)';
            break;
        case styleProperties.positions.bottom:
            style.left = "50%"
            style.transform = 'translateX(-50%)'
            style.top = 'calc(100% + 15px)';
            break;
        case styleProperties.positions.left:
            style.top = "50%"
            style.right = '100%';
            style.transform = 'translateY(-50%)'
            break;
        case styleProperties.positions.right:
            style.top = "50%"
            style.left = '100%';
            style.transform = 'translateY(-50%)'
            break;
    }


    return style

}

export default tooltipStyle;