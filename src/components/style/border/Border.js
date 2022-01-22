import SectionHeader from "@/components/SectionHeader";
import { sections } from "@/enums";
import BorderWidth from "./BorderWidth";
import BorderColor from "./BorderColor";
import BorderStyle from "./BorderStyle";
import { useSelector } from "react-redux";

const Border = () => {

    const { [sections.border]: sectionVisibility } = useSelector(state => state.tooltip.sectionVisibility);


    return (
        <div className="border-b border-solid border-slate-400">

            <SectionHeader
                title="Border"
                sectionName={sections.border}/>


            { sectionVisibility &&


            <div className="grid gap-10 bg-stone-50	 px-4 py-8">

                <BorderStyle/>
                <BorderColor/>
                <BorderWidth/>

            </div>

            }

        </div>

    )
}

export default Border;