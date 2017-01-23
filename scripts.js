/**
 * Created by Robrty on 23.01.2017.
 */
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

    var canvas = document.querySelector("#playground");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(10, 10, 10, 0, Math.PI * 2);
    ctx.fill();
}

