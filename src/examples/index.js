const examples = {
    1: {
        tooltipHTML: `
    <div class="tooltip-container" style="display: inline-block">

        <p style="cursor: pointer">Hover over me</p>

        <div class="tooltip">


           <img 
               style="height: 80%;width: 100%;"
               src="https://camo.githubusercontent.com/a20ea32c92ad63e6796a6e6b1e4055d901fe7e4545e11da6ce95c5c21f2344c9/68747470733a2f2f696d6775722e636f6d2f71795957626f302e676966"/>

            <a style="display:block;text-decoration: none;" href="https://github.com/mustafadalga/music-player">
        
                <h3 style="font-weight:600;text-align: center;color: white;font-size: 18px;">
                 Music Player
                 </h3>
      
            </a>

            <i class="triangle"></i>

        </div>
</div>
    
    `,
        tooltipStyle: {
            position: "absolute",
            visibility: "hidden",
            opacity: 0,
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingTop: "0px",
            paddingBottom: "0px",
            borderRadius: "12px",
            textAlign: "center",
            width: "300px",
            height: "250px",
            wordWrap: "break-word",
            borderStyle: "none",
            borderColor: "#3b82f6",
            borderLeftWidth: "0px",
            borderRightWidth: "0px",
            borderTopWidth: "0px",
            borderBottomWidth: "0px",
            boxShadow: "0px 4px 20px #475569",
            transition: "all 0.3s 0s ease",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "calc(100% + 25px)"
        },
        triangleStyle: {
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            borderColor: "#3b82f6 transparent transparent",
            borderWidth: "16px 12px 0px",
            borderStyle: 'solid'
        },
    },
    2: {
        tooltipHTML: `
  <div class="tooltip-container" style="display: inline-block">

    <p style="cursor: pointer">Hover over me</p>

    <div class="tooltip">
    
    
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Doloremque ea expedita ipsam libero repellendus, 
         sed sit sunt temporibus voluptatem voluptatum. Autem consequatur doloribus enim esse fuga
          in laborum sapiente soluta!
        </p>

      <i class="triangle"></i>

    </div>
</div>
    
    `,
        tooltipStyle: {
            position: "absolute",
            visibility: "hidden",
            opacity: 0,
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "12px",
            paddingBottom: "12px",
            borderRadius: "12px",
            textAlign: "center",
            width: "750px",
            height: "100px",
            wordWrap: "break-word",
            borderStyle: "none",
            borderColor: "#3b82f6",
            borderLeftWidth: "0px",
            borderRightWidth: "0px",
            borderTopWidth: "0px",
            borderBottomWidth: "0px",
            boxShadow: "0px 4px 20px #475569",
            transition: "all 0.3s 0s ease",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "calc(100% + 25px)"
        },
        triangleStyle: {
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            borderColor: "#3b82f6 transparent transparent",
            borderWidth: "16px 12px 0px",
            borderStyle: 'solid'
        },
    },
}


export default examples;