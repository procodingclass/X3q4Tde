class Ball {
  constructor(x, y, r) {
    var options = { 
      density: 1, 
      };

    this.body = Bodies.circle(x, y, r, options);
    this.radius = r;
   
    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}
