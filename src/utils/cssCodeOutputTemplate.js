import objectStyleToCSS from "./objectStyleToCSS";

export default function cssCodeOutputTemplate(tooltip, triangle) {

    return `
.tooltip-container {

    position: relative;
    
}

.tooltip-container:hover  .tooltip {

    visibility: visible;
    opacity: 1;
    
}

.tooltip {

${objectStyleToCSS(tooltip)}
}

.triangle {

${objectStyleToCSS(triangle)}
}



    `;
}