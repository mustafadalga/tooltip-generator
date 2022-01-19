import { createSlice } from '@reduxjs/toolkit'

export const tooltip = createSlice({
    name: 'tooltip',
    initialState: {
        tooltipStyle: {
            position: 'right',
            color: "#ffffff",
            backgroundColor: '#27272a',
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 25,
            textAlign: 'left',
            borderStyle: 'solid',
            borderLeftWidth: 5,
            borderRightWidth: 5,
            borderTopWidth: 5,
            borderBottomWidth: 5,
            borderColor: '#a1c657',
            boxShadowColor:'#a1c657',
            boxShadowHorizontalLength:12,
            boxShadowVerticalLength:12,
            boxShadowBlurRadius:12,
        },
        triangleStyle: {
            width: 12,
            height: 12,
        },
        sections: {
            position: {
                isEnabled: true,
                visibility: false,
            },
            color: {
                isEnabled: true,
                visibility: false,
            },
            padding: {
                isEnabled: true,
                visibility: false,
            },
            borderRadius: {
                isEnabled: true,
                visibility: false,
            },
            textAlign: {
                isEnabled: true,
                visibility: false,
            },
            tooltipText: {
                isEnabled: true,
                visibility: false,
            },
            border: {
                isEnabled: true,
                visibility: false,
            },
            boxShadow: {
                isEnabled: true,
                visibility: false,
            },
            triangle: {
                isEnabled: true,
                visibility: true,
            }
        },
        tooltipText: "Tooltip it is a test message ! Tooltip it is a test message !",

    },
    reducers: {
        changeTooltipStyle: (state, { payload }) => {

            const options = state.tooltipStyle;
            options[payload.option] = payload.value;

        },
        changeSectionVisibilityStatus: (state, { payload }) => {

            const sections = state.sections;
            sections[payload.section].visibility = !sections[payload.section].visibility;
        },
        changeTooltipText: (state, { payload }) => {
            state.tooltipText = payload;
        },
        changeTriangleStyle: (state, { payload }) => {

            const options = state.triangleStyle;
            options[payload.option] = payload.value;

        },

    }
})

export const {
    changeTooltipStyle,
    changeTriangleStyle,
    changeSectionVisibilityStatus,
    changeTooltipText
} = tooltip.actions

export default tooltip.reducer