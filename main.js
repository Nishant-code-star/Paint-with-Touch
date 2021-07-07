Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

var mouseEvent="empty";
var last_position_x, last_position_y;
colour = "black";
line_width = 1;
var width = screen.width;

new_width = screen.width - 85;
new_height = screen.height - 285;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}


Canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";
}

Canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

Canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

Canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
current_position_x=e.clientX-Canvas.offsetLeft;
current_position_y=e.clientY-Canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=line_width;

    ctx.moveTo(last_position_x, last_position_y);

    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}

Canvas.addEventListener("touchstart", touchstart);

function touchstart(e) {
    console.log("touchstart");
    last_position_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

Canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position_touch_x = e.touches[0].clientX - Canvas.offsetLeft;
    current_position_touch_y = e.touches[0].clientY - Canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = line_width;

    ctx.moveTo(last_position_touch_x, last_position_touch_y);

    ctx.lineTo(current_position_touch_x, current_position_touch_y);
    ctx.stroke();
    last_position_touch_x = current_position_touch_x;
    last_position_touch_y = current_position_touch_y;
}