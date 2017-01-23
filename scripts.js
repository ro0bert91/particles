/**
 * Created by Robrty on 23.01.2017.
 */
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

    var canvas = document.querySelector("#playground");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");


    ctx.fillStyle = "blue";

    var particles = [];

    var createObj = function(){
        var p = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: 10
        };

        particles.push(p);
    };

    var drawObj = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(function (p){
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        });


    };

    var moveObj = function () {
        particles.forEach(function (p) {
            console.log(1);
            p.x += 0.1;
            p.y += 0.1;
        });
    };
    var loop = function() {
        createObj();
        moveObj();
        drawObj();
        window.requestAnimationFrame(loop);
    };

    loop();


}

