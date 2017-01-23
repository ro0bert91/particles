/**
 * Created by Robrty on 23.01.2017.
 */
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

    var canvas = document.querySelector("#playground");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");



    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 10, 0, Math.PI * 2);
    ctx.fill();
}

