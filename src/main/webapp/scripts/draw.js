let canvas=document.getElementById('canv');
let ctx=canvas.getContext('2d');
let x=-1;
let y=-1;
let hit;


function draw() {
    for (let x = 50; x <= 350; x += 50) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 300);
    }
    for (let y = 50; y <= 250; y += 50) {
        ctx.moveTo(0, y);
        ctx.lineTo(400, y);
    }

    ctx.strokeStyle = "#333";
    ctx.stroke();
}

function drawDot(x,y,hitC) {
    x=x*50+250;
    y=150 - y*50;
    if (x >= 0 & y >= 0) {
        ctx.beginPath();
        if (hitC) ctx.fillStyle = "green";
        else ctx.fillStyle="red";
        ctx.moveTo(x, y);
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
    }
}

// function setCords(xCord,yCord,hitC) {
//     x=xCord*50+250;
//     y=150 - yCord*50;
//     if (hitC) hit="green";
//     else hit="red";
// }

function clearCanv() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function drawGraph(r) {
    clearCanv();
    ctx.fillStyle = 'rgb(35, 184, 253)';
    ctx.beginPath();
    //rectangle
    ctx.rect(250, 150, r * 50, r * 50);
    ctx.fill();
    //ctx.fillRect(200, 200, r * 50, r * 50);

    //circle
    ctx.moveTo(250, 150);
    ctx.arc(250, 150, r * 50, Math.PI/2, Math.PI);
    ctx.fill();

    //triangle
    ctx.moveTo(250, 150);
    ctx.lineTo(250, 150-r*25);
    ctx.lineTo(250+r*50, 150);
    ctx.fill();

    draw();
    ctx.beginPath();

    array.forEach(data => drawDot(data.x,data.y,data.hit));

}