import Position from "./style/Position";
import Color from "./style/Color";
import Padding from "./style/Padding";
import BorderRadius from "./style/BorderRadius";
import TextAlign from "./style/TextAlign";
import TooltipText from "./TooltipText";
import Border from "./style/border/Border";
import BoxShadow from "./style/box-shadow/BoxShadow";
import Triangle from "./style/triangle/Triangle";
import TooltipSize from "./style/TooltipSize";

const SideBar = () => {
    return(
        <div className="row-span-full col-span-3 w-full  border-r border-solid border-slate-400 relative overflow-y-auto">

            <Position/>
            <Color/>

            <Padding/>
            <BorderRadius/>
            <TextAlign/>
            <TooltipSize/>
            <TooltipText/>
            <Border/>
            <BoxShadow/>
            <Triangle/>

        </div>

    );
}

export default SideBar;

//https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state