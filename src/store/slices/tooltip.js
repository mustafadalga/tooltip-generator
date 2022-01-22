import { createSlice } from '@reduxjs/toolkit'
import { sections } from "@/enums";

export const tooltip = createSlice({
    name: 'tooltip',
    initialState: {
        tooltipStyle: {
            position: 'top',
            color: "#ffffff",
            backgroundColor: '#3b82f6',
            width: 160,
            height: 40,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 12,
            textAlign: 'center',
            borderStyle: 'none',
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderColor: '#3b82f6',
            boxShadowColor: '#475569',
            boxShadowHorizontalLength: 0,
            boxShadowVerticalLength: 4,
            boxShadowBlurRadius: 20,
        },
        triangleStyle: {
            width: 12,
            height: 12,
            color: '#3b82f6',
        },
        sectionVisibility: {
            [sections.position]: true,
            [sections.color]: true,
            [sections.tooltipSize]: true,
            [sections.padding]: true,
            [sections.borderRadius]: true,
            [sections.textAlign]: true,
            [sections.tooltipText]: true,
            [sections.border]: true,
            [sections.boxShadow]: true,
            [sections.triangle]: true,
        },
        tooltipText: "Tooltip text",
    },
    reducers: {
        changeTooltipStyle: (state, { payload }) => {

            const options = state.tooltipStyle;
            options[payload.option] = payload.value;

        },
        changeSectionVisibility: (state, { payload }) => {

            const sectionVisibility = state.sectionVisibility;
            sectionVisibility[payload.section] = !sectionVisibility[payload.section]

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
    changeSectionVisibility,
    changeTooltipText
} = tooltip.actions

export default tooltip.reducer