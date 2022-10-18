function setup() {
  createCanvas(1525, 700);
}


function draw() {
  background(100, 20, 10);
  
  // define the start and stop points for the gradient
  let gradient = drawingContext.createLinearGradient(20,20, width-20,height-20);
  
  // add colors to the gradient
  // takes two arguments:
  // 1. position in the gradient (0=start, 1=end) like lerpColor()
  // 2. color to use, here we use named HTML colors
  //    (see below for another option)
  // more info: https://htmlcolorcodes.com/color-names
  gradient.addColorStop(0, 'White');
  gradient.addColorStop(1, 'Black');
  
  // use the gradient we created as the fill style
  // this is then applied to any shapes we draw until
  // we reset the fill back to solid
  drawingContext.fillStyle = gradient;
  noStroke();
  for (let x=10; x<width; x+=50) {
    for (let y=10; y<height; y+=50) {
      square(x,y, 40);
    }
  }
  
  // notice how the gradient fills all shapes?
  // that's because the gradient's coordinates are
  // based on the canvas, not a particular shape
  // if we want to draw a shape with a gradient that
  // fits nicely inside it, we need to do a little
  // bit more math
  
  let radius = 150;
  let x1 =     width/2 - radius;
  let y1 =     height/2 - radius;
  let x2 =     width/2 + radius;
  let y2 =     height/2 + radius;
  
  // define the gradient with the points we calculated
  let g = drawingContext.createLinearGradient(x1,y1, x2,y2);
  
  // add colors – we can also do this with p5.js color variables!
  // we just have to convert them to a string that <canvas> understands
  let c1 = color(100, 50, 100);
  let c2 = color(300,35,250);
  g.addColorStop(0,   c1.toString());
  g.addColorStop(0.5, c2.toString());
  g.addColorStop(1,   c1.toString());
  
  // then draw a shape with this gradient
  drawingContext.fillStyle = g;
  beginShape();
  for (let a=0; a<TWO_PI; a+=radians(45)) {
    let x = width/2 + cos(a) * radius;
    let y = height/2 + sin(a) * radius;
    vertex(x, y);
  }
  endShape(CLOSE);

  
  // if we want to use normal fill() we need to
  // reset the fillStyle – any color will work
  // here, now it can be changed again with fill()
  drawingContext.fillStyle = 'white';

 
}

