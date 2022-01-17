import './App.css';
import SideBar from "./components/SideBar";
import Codes from "./components/Codes";
import Preview from "./components/Preview";

function App() {
    return (
        <div className="App w-full h-screen	max-w-screen-3xl mx-auto grid grid-rows-5 grid-cols-12">
            <SideBar/>
            <Preview/>
            <Codes/>

        </div>
    );
}

export default App;
