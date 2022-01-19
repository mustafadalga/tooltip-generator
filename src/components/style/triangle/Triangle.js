import SectionHeader from "../../SectionHeader";
import { sections } from "../../../enums";
import TriangleHeight from "./TriangleHeight";
import TriangleWidth from "./TriangleWidth";

const Triangle=()=>{

    return (
        <div className="border-b border-solid border-slate-400">

            <SectionHeader
                title="Tooltip Triangle Style"
                sectionName={sections.triangle}/>


            <div className="grid gap-10 bg-stone-50	 px-4 py-8">

                <TriangleWidth/>
                <TriangleHeight/>

            </div>


        </div>
    );
}

export default Triangle;