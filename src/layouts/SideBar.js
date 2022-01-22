import Position from "@/components/style/Position";
import Color from "@/components/style/Color";
import Padding from "@/components/style/Padding";
import BorderRadius from "@/components/style/BorderRadius";
import TextAlign from "@/components/style/TextAlign";
import TooltipText from "@/components/TooltipText";
import Border from "@/components/style/border/Border";
import BoxShadow from "@/components/style/box-shadow/BoxShadow";
import Triangle from "@/components/style/triangle/Triangle";
import TooltipSize from "@/components/style/TooltipSize";

const SideBar = () => {
    return(
        <div className="row-span-full col-span-3 w-full  border-r border-solid border-slate-400 relative overflow-y-auto">

            <Position/>
            <Color/>
            <TooltipSize/>
            <Padding/>
            <BorderRadius/>
            <TextAlign/>
            <TooltipText/>
            <Border/>
            <BoxShadow/>
            <Triangle/>

        </div>

    );
}

export default SideBar;
