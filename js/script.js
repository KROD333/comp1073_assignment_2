document.addEventListener("DOMContentLoaded", function () {

    // This will get the form element
    const form = document.getElementById("smoothie-form"); 

    // This will submit the event listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        // This will get the form values
        const size = document.getElementById("size").value;
        const smoothieType = document.getElementById("smoothie-type").value;
        const sweeteners = document.getElementById("sweeteners").value;
        
        // This creates a smoothie object
        const smoothie = {
            size: size,
            sweetener: sweeteners, 
            smoothieType: smoothieType
        };

        // This will display a summary using an alert box
        alert(
            `Here Is Your Smoothie Order Summary:\n` +
            `Size: ${smoothie.size}\n` +
            `Smoothie type: ${smoothie.smoothieType}\n` +
            `Sweeteners: ${smoothie.sweetener}\n` + 
            `Thank you for your order!`
        );
    });
});