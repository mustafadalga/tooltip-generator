import SideBar from "@/layouts/SideBar";
import PreviewTooltipCode from "@/layouts/PreviewTooltipCode";
import PreviewTooltip from "@/layouts/PreviewTooltip";

function App() {
    return (
        <div className="App w-full h-screen	max-w-screen-3xl mx-auto grid grid-rows-5 grid-cols-12">
            <SideBar/>
            <PreviewTooltip/>
            <PreviewTooltipCode/>

        </div>
    );
}

export default App;
