/**
 * Created by Robrty on 23.01.2017.
 */
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

    var canvas = document.querySelector("#playground");
    var ctx = canvas.getContext("2d");
    var maxParticles = 500;
    var particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var createObj = function(options){
        options = options || {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            };
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

    var drawObj = function(p){
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    };

    var moveObj = function(p){
        p.x += p.xVel;
        p.y += p.yVel;
    };

    var shrinkObj = function(p){
        p.radius *= 0.99;
    };

    var loop = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        createObj();
        particles.forEach(function (p){
            moveObj(p);
            shrinkObj(p);
            drawObj(p);
        });

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

