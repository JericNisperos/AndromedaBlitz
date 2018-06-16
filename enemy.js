class Enemy {
  constructor(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, -2);
    this.pos = createVector(x, y);
    this.r = 10;
    this.maxspeed = 2;
    this.maxforce = 0.2;
    this.life = 50;
  }

  // Method to update location
  update() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.pos.add(this.velocity);
    // Reset accelerationelertion to 0 each cycle
    this.acceleration.mult(0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }
  seek(target) {

    var desired = p5.Vector.sub(target, this.pos); 
    desired.setMag(this.maxspeed);

    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); 
    this.applyForce(steer);
  }

  display() {
    var theta = this.velocity.heading() + PI / 2;
    push();
    fill(250, 100, 100);
    noStroke();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    beginShape();
    vertex(0, 5);
    vertex(-10, 10);
    vertex(0, -10);
    vertex(10, 10);
    endShape(CLOSE);
    pop();
  }
}












function smallShip() {
  //constructor(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, -2);
    this.pos = createVector(play.pos.x, play.pos.y);
    this.r = 10;
    this.maxspeed = 5;
    this.maxforce = 0.2;
  

  // Method to update location
  this.update = function() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.pos.add(this.velocity);
    // Reset accelerationelertion to 0 each cycle
    this.acceleration.mult(0);
  }

  this.applyForce = function(force) {
    // We could add mass here if we want A = F / M
    this.acceleration.add(force);
  }

  // A method that calculates a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY
  this.seek = function(target) {

    var desired = p5.Vector.sub(target, this.pos); // A vector pointing from the location to the target

    // Scale to maximum speed
    desired.setMag(this.maxspeed);

    // Steering = Desired minus velocity
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); // Limit to maximum steering force

    this.applyForce(steer);
  }

  this.display = function() {
    // Draw a triangle rotated in the direction of velocity
    var theta = this.velocity.heading() + PI / 2;
    push();
    fill(127);
    stroke(200);
    strokeWeight(1);
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    beginShape();
    // vertex(0, -this.r * 2);
    // vertex(-this.r, this.r * 2);
    // vertex(this.r, this.r * 2);
    vertex(0, 5);
    vertex(-10, 10);
    vertex(0, -10);
    vertex(10, 10);
    endShape(CLOSE);
    pop();
  }

    this.hits = function(rock) {
    var d = dist(this.pos.x, this.pos.y, rock.pos.x, rock.pos.y);
    if (d < rock.r) {
      return true;
    } else {
      return false;
    }
  }
}

