import ChevronDown from "@/components/icons/ChevronDown";
import { useDispatch, useSelector } from "react-redux";
import { changeSectionVisibility } from "@/store/slices/tooltip";

const SectionHeader = ({ title, sectionName }) => {


    const dispatch = useDispatch();
    const { [sectionName]: sectionVisibility } = useSelector(state => state.tooltip.sectionVisibility);

    const handleVisibility = () => {

        dispatch(changeSectionVisibility({
            section: sectionName,
        }));

    };

    return (
        <div className={'flex justify-between items-center cursor-pointer p-2 bg-blue-50'}
             onClick={() => handleVisibility()}>

            <span className="uppercase">{title}</span>

            <ChevronDown
                className={`transition transition-all duration-300 ease-in-out ${sectionVisibility ? 'rotate-180' : ''}`}/>

        </div>

    );
}

export default SectionHeader;