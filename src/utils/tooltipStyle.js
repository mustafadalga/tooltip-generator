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
        width:`${options.width}px`,
        height:`${options.height}px`,
        wordWrap: 'break-word',
        borderStyle:`${options.borderStyle}`,
        borderColor:`${options.borderColor}`,
        borderLeftWidth: `${options.borderLeftWidth}px`,
        borderRightWidth: `${options.borderRightWidth}px`,
        borderTopWidth: `${options.borderTopWidth}px`,
        borderBottomWidth:`${options.borderBottomWidth}px`,
        boxShadow:`${options.boxShadowHorizontalLength}px ${options.boxShadowVerticalLength}px ${options.boxShadowBlurRadius}px ${options.boxShadowColor}`,
        transition:'all 0.3s 0s ease'
    }


    switch (options.position) {

        case styleProperties.positions.top:
            style.left = "50%"
            style.transform = 'translateX(-50%)'
            style.bottom = 'calc(100% + 25px)';
            break;
        case styleProperties.positions.bottom:
            style.left = "50%"
            style.transform = 'translateX(-50%)'
            style.top = 'calc(100% + 25px)';
            break;
        case styleProperties.positions.left:
            style.top = "50%"
            style.right = 'calc(100% + 25px)';
            style.transform = 'translateY(-50%)'
            break;
        case styleProperties.positions.right:
            style.top = "50%"
            style.left = 'calc(100% + 25px)';
            style.transform = 'translateY(-50%)'
            break;
    }


    return style

}

export default tooltipStyle;