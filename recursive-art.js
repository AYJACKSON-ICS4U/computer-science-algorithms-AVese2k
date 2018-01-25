background(0, 0, 0);//background is black

var drawShape = function(x, y, radius) {
    var r = random(0, 255);//red component is random value between 0 and 255
    var g = random(0, 255);//green component is random value between 0 and 255
    var b = random(0, 255);//blue component is random value between 0 and 255
    fill(r, g, b);//fill with random colour
    rect(x, y, radius, radius);//output a increasing smaller square
    var newRadius = radius/2;//halving the radius for each recursion
    if (newRadius >= 2) {
        drawShape(x, y, newRadius);//drawing a new square until the radius is less than 2
    }
};

drawShape(width/50, height/50, 380);
