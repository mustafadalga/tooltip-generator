import Position from "./style/Position";
import Color from "./style/Color";
import Padding from "./style/Padding";
import BorderRadius from "./style/BorderRadius";
import TextAlign from "./style/TextAlign";
import TooltipText from "./TooltipText";
import Border from "./style/Border";

const SideBar = () => {
    return(
        <div className="row-span-full col-span-3 w-full  border-r border-solid border-slate-400 relative overflow-y-auto">

            <Position/>
            <Color/>
            <Padding/>
            <BorderRadius/>
            <TextAlign/>
            <TooltipText/>
            <Border/>

        </div>

    );
}

export default SideBar;

//https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state