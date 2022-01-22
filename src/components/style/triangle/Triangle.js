import SectionHeader from "@/components/SectionHeader";
import { sections } from "@/enums";
import TriangleHeight from "./TriangleHeight";
import TriangleWidth from "./TriangleWidth";
import { useSelector } from "react-redux";
import TriangleColor from "./TriangleColor";

const Triangle = () => {

    const { [sections.triangle]: sectionState } = useSelector(state => state.tooltip.sections);


    return (
        <div className="border-b border-solid border-slate-400">

            <SectionHeader
                title="Tooltip Triangle Style"
                sectionName={sections.triangle}/>


            {sectionState.visibility &&

            <div className="grid gap-10 bg-stone-50	 px-4 py-8">

                <TriangleColor/>
                <TriangleWidth/>
                <TriangleHeight/>

            </div>

            }


        </div>
    );
}

export default Triangle;