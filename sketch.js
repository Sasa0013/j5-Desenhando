function setup() {
    createCanvas(3500, 3500);
    background("purple");
  }
  
  function draw() {
    
    stroke("pink");
    fill("pink");
    
    if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20)
    }
  }