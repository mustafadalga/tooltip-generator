
const InputColor = ({ title, color, setColor }) => {

    return (

        <div className="grid gap-2">

            <h6>{title}</h6>

            <div className="flex h-8 border border-solid border-blue-200">

                <input type="color"
                       className="h-full"
                       value={color}
                       onInput={e => setColor(e.target.value)}/>

                <input type="text"
                       className="w-full h-full outline-0 px-3"
                       value={color}
                       onInput={e => setColor(e.target.value)}/>

            </div>
        </div>

    )
}

export default InputColor;