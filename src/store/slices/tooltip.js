import { createSlice } from '@reduxjs/toolkit'

export const tooltip = createSlice({
    name: 'tooltip',
    initialState: {
        tooltipStyle: {
            position: 'top',
            color: "#ffffff",
            text: "Tooltip",
            backgroundColor: '#27272a',
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 25,
            textAlign: 'left',
            borderStyle: 'solid',
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth:0,
            borderColor:'#27272a' ,
        },
        triangleStyle: {},
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
                visibility: true,
            }
        },
        tooltipText: 'Tooltip !',

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
        changeTriangleOption: (state, { payload }) => {

            const options = state.triangleOptions;
            options[payload.option] = payload.value;

        },

    }
})

export const {
    changeTooltipStyle,
    changeTriangleOption,
    changeSectionVisibilityStatus,
    changeTooltipText
} = tooltip.actions

export default tooltip.reducer