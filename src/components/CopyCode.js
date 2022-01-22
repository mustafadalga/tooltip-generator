import ClipBoard from "@/components/icons/ClipBoard";
import { useState } from "react";

const CopyCode = ({ code }) => {
    const [ showAnimate, changeAnimateStatus ] = useState(false);
    let timer;

    const copyCode = () => {

        if (timer) {
            window.clearTimeout(timer);
            changeAnimateStatus(false);
            timer = null;
        }


        changeAnimateStatus(true);
        navigator.clipboard.writeText(code);

        timer = setTimeout(() => changeAnimateStatus(false), 500);
    }


    return (

        <div className="relative" onClick={() => copyCode()}>
            <ClipBoard className={showAnimate ? 'text-blue-400':''} />

            {showAnimate &&

            <div
                className="animate-copied absolute right-full bg-black/75 text-white px-1.5 py-0.5 rounded">
                <span className="text-xs">Copied!</span>
            </div>

            }
        </div>
    );
}

export default CopyCode;