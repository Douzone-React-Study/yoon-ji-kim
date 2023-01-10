const canvas = document.querySelector("canvas");

// context = 붓
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth =2;

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
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave",  cancelPainting);