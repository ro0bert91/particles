/**
 * Created by Robrty on 23.01.2017.
 */
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

    var canvas = document.querySelector("#playground");
    var maxParticles = 500;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");


    ctx.fillStyle = "blue";

    var particles = [];

    var createObj = function(options){
        options = options || {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            }
        if (particles.length > maxParticles){
            particles.shift();
        }

        var p = {
            x: options.x,
            y: options.y,
            xVel: (Math.random() - 0.5) * 10,
            yVel: (Math.random() - 0.5) * 10,
            radius: 15,
            color: '#' + Math.random().toString(16).slice(2, 8).toUpperCase()
        };
        particles.push(p);
    };

    var drawObj = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(function (p){
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
    };

    var moveObj = function(){
        particles.forEach(function (p) {
            p.x += p.xVel;
            p.y += p.yVel;
        });
    };

    var shrinkObj = function(){
        particles.forEach(function (p){
            p.radius *= 0.99;
        });
    };

    var loop = function() {
        createObj();
        moveObj();
        shrinkObj();
        drawObj();
        window.requestAnimationFrame(loop);
    };

    canvas.addEventListener("click", function (ev){
        for (var i = 0; i < 100; i++){
            createObj({
                x: ev.clientX,
                y: ev.clientY
            });
        }
    });

    loop();


}

