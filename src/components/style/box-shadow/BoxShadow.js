import SectionHeader from "@/components/SectionHeader";
import { sections } from "@/enums";
import { useSelector } from "react-redux";
import BoxShadowHorizontalLength from "./BoxShadowHorizontalLength";
import BoxShadowVerticalLength from "./BoxShadowVerticalLength";
import BoxShadowBlurRadius from "./BoxShadowBlurRadius";
import BoxShadowColor from "./BoxShadowColor";

const BoxShadow = () => {
    const { [sections.boxShadow]: sectionState } = useSelector(state => state.tooltip.sections);

    return (
        <div className="border-b border-solid border-slate-400">

            <SectionHeader
                title="Box Shadow"
                sectionName={sections.boxShadow}/>

            {sectionState.visibility &&

            <div className="grid gap-10 bg-stone-50	 px-4 py-8">

                <BoxShadowColor/>
                <BoxShadowHorizontalLength/>
                <BoxShadowVerticalLength/>
                <BoxShadowBlurRadius/>
            </div>

            }

        </div>
    );

}

export default BoxShadow;