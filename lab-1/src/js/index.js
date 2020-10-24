let beginDraw = function(event) {
    let context = event.currentTarget.getContext("2d");
    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
}

let endDraw = function(event) {
    let context = event.currentTarget.getContext("2d");
    context.lineTo(event.clientX, event.clientY);
    context.stroke();
}
