const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth =document.getElementById("line-width");
const canvas = document.querySelector("canvas");

// context = 붓
const ctx = canvas.getContext("2d")
canvas.width = 400;
canvas.height = 400;

ctx.lineWidth =lineWidth.value;

ctx.moveTo(200, 200);


let isPainting = false;
function onMove(event) {
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
    
}
function startPainting() {
    isPainting = true;
}
function  cancelPainting() {
    isPainting = false;
    ctx.beginPath();
}
function onLineWidthChange(event) {
    // ctx.beginPath();
    console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
    // console.dir(event.target.dataset.color);
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave",  cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorClick));