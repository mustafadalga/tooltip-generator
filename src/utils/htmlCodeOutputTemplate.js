export default function htmlCodeOutputTemplate(text) {


    return `

<div class="tooltip-container">

    <p>Hover Me</p>

    <div class="tooltip">

        <span>${text}</span>
        <i class="triangle"/>

    </div>
    
</div>



    `;

}
