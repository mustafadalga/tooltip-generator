import SectionHeader from "../SectionHeader";
import { sections } from "../../enums";
import BorderWidth from "./BorderWidth";
import BorderColor from "./BorderColor";

const Border = () => {



    return (
        <div className="border-b border-solid border-slate-400">

            <SectionHeader
                title="Border"
                sectionName={sections.border}/>


            <div className="grid gap-10 bg-stone-50	 px-4 py-8">

                <BorderColor/>

                <BorderWidth/>





            </div>


        </div>

    )
}

export default Border;