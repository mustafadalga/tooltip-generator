const Template1 = ({ tooltipStyle, triangleStyle }) => {

    return (

        <div className="absolute bottom-0 group z-10">

            <p className="cursor-pointer">Hover over me</p>

            <div
                className="group-hover:!visible group-hover:!opacity-100 cursor-pointer"
                style={tooltipStyle}>

                <img
                    className="h-4/5"
                    src="https://camo.githubusercontent.com/a20ea32c92ad63e6796a6e6b1e4055d901fe7e4545e11da6ce95c5c21f2344c9/68747470733a2f2f696d6775722e636f6d2f71795957626f302e676966"
                />

                <a className="block mt-3" href="https://github.com/mustafadalga/music-player">
                    <h3 className="text-lg text-center font-semibold text-white">Music Player</h3>
                </a>


                <i style={triangleStyle}/>

            </div>
        </div>
    )
}


export default Template1;