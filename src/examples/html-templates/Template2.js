const Template2 = ({ tooltipStyle, triangleStyle }) => {

    return (

        <div className="absolute bottom-0 group z-10">

            <p className="cursor-pointer">Hover over me</p>

            <div
                className="group-hover:!visible group-hover:!opacity-100 cursor-pointer"
                style={tooltipStyle}>


                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloremque ea expedita ipsam libero repellendus,
                    sed sit sunt temporibus voluptatem voluptatum. Autem consequatur doloribus enim esse fuga
                    in laborum sapiente soluta!
                </p>


                <i style={triangleStyle}/>

            </div>
        </div>
    )
}


export default Template2;