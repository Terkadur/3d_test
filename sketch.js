
function preload() {
    ms_font = loadFont('assets/consola.ttf');
}

function setup() {
    x_rot = 1.5 * QUARTER_PI;
    z_rot = QUARTER_PI;
    scl = 50;
    zoom_sense = 0.05 / 150;

    z = 5;

    createCanvas(windowWidth, windowHeight, WEBGL);
    document.body.style.overflow = 'hidden'; //removes scrollbar
}

function draw() {
    scale(-scl, scl, scl);
    rotateX(x_rot);
    rotateZ(z_rot);

    background(0);
    let w = 3*min(width, height)/(4*scl);
    strokeWeight(2);
    stroke(255);
    line(-w/2, 0, 0, w/2, 0, 0);
    line(0, -w/2, 0, 0, w/2, 0);
    line(0, 0, -w/2, 0, 0, w/2);
    
    textFont(ms_font);
    text('x', w/2, 0, 0);



    strokeWeight(3);
    stroke(255, 0, 0);
    line(0, 0, 0, 3, 0, 0);
    stroke(0, 255, 0);
    line(0, 0, 0, 0, 3, 0);
    stroke(0, 0, 255);
    line(0, 0, 0, 0, 0, 3);
    
    fill(128, 64);
    sphere(2);

    
    fill(0, 0, 255, 32);
    plane(w, w);
}

function mousePressed() {
    mouse_start = createVector(mouseX, mouseY);
}

function mouseDragged() {
    let mouse_change = p5.Vector.sub(mouse_start, createVector(mouseX, mouseY));
    mouse_change.div(100);
    mouse_change.x *= -1;
    x_rot += mouse_change.y;
    x_rot = constrain(x_rot, 0, PI)
    z_rot += mouse_change.x;
    mouse_start = createVector(mouseX, mouseY);
}

function windowResized() {
    createCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
    scl *= 10 ** (-event.delta * zoom_sense);
}