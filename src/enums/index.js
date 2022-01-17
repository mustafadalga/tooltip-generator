const styleProperties = Object.freeze({
    positions: {
        left: 'left',
        right: 'right',
        top: 'top',
        bottom: 'bottom'
    },
    colors: {
        color: 'color',
        backgroundColor: 'backgroundColor'
    },
    padding: {
        paddingLeft: 'paddingLeft',
        paddingRight: 'paddingRight',
        paddingTop: 'paddingTop',
        paddingBottom: 'paddingBottom'
    },
    textAlign: {
        left: 'left',
        center: 'center',
        right: 'right'
    },
    borderRadius: 'borderRadius',
    border: {
        borderColor: 'borderColor',
        borderWidth: {
            borderLeftWidth: 'borderLeftWidth',
            borderRightWidth: 'borderRightWidth',
            borderTopWidth: 'borderTopWidth',
            borderBottomWidth: 'borderBottomWidth'
        },
        borderStyle: {
            solid: 'solid',
            dotted: 'dotted',
            dashed: 'dashed',
            double: 'double',
            groove: 'groove',
            ridge: 'ridge',
            inset: 'inset',
            outset: 'outset',
            none: 'none',
            hidden: 'hidden'
        }
    }
})

const sections = Object.freeze({
    position: 'position',
    color: 'color',
    padding: 'padding',
    borderRadius: 'borderRadius',
    textAlign: 'textAlign',
    tooltipText: 'tooltipText',
    border: 'border'
})


export {
    styleProperties,
    sections
}