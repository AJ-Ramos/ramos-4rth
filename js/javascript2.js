/*dissapearing navigation bar*/
var navbar = document.getElementById("navigbars");
    var max_opacity = 100;

function myFunction() {
        navbar.style.opacity = max_opacity - (window.pageYOffset * 3) + '%';
    }
 /*for the canvas*/
        var canvas = document.getElementsByTagName("canvas")[0];
        var ctx = canvas.getContext("2d");  
        var night = document.getElementById("night");
        var trees = document.getElementById("trees");
        var move = 0,
            move2 = 0,
            move3 = 0,
            move4 = 0;

        animate();
        function animate(){
        	move+=.1;
        	move2+=.5;
            move3+=.7;
            move4+=1;

        	if (move>night.width) {move=0}
        		if (move2>trees.width) {move2=0}
                    if (move3>trees.width) {move3=0}
                        if (move4>trees.width) {move4=0}
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.save();
            ctx.drawImage(night, night.width-move, 0)
            ctx.drawImage(night, -move, 0)
            ctx.drawImage(trees, trees.width-move2, 4);
            ctx.drawImage(trees, -move2, 4);
            ctx.drawImage(trees, trees.width-move3, 2);
            ctx.drawImage(trees, -move3, 2);
            ctx.drawImage(trees, trees.width-move4, 0);
            ctx.drawImage(trees, -move4, 0);
            ctx.restore();
        requestAnimationFrame(animate);
        }