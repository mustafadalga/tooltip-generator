import ChevronDown from "./icons/chevronDown";
import { useDispatch, useSelector } from "react-redux";
import { changeSectionVisibilityStatus } from "../store/slices/tooltip";

const SectionHeader = ({ title, sectionName }) => {


    const dispatch = useDispatch();
    const { [sectionName]: sectionState } = useSelector(state => state.tooltip.sections);

    const handleVisibility = () => {

        dispatch(changeSectionVisibilityStatus({
            section: sectionName,
        }));

    };

    return (
        <div className={'flex justify-between items-center cursor-pointer p-2 bg-blue-50'}
             onClick={() => handleVisibility()}>

            <span className="text-xl uppercase">{title}</span>

            <ChevronDown
                className={`transition transition-all duration-300 ease-in-out ${sectionState.visibility ? 'rotate-180' : ''}`}/>

        </div>

    );
}

export default SectionHeader;