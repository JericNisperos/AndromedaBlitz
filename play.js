
var firerender = false;
function Player() {
this.pos = createVector(width / 2, height / 1.2);
this.r = 20;
this.heading = 0;
this.rotation = 0;
this.vel = createVector(0, 0);
this.drive = 0;
this.ported = false;
this.skip = false;

this.color = 250;

// this.firerender = function() {
//     push();
    
//     translate(this.pos.x, this.pos.y);
//     rotate(this.heading + PI / 2);
//     beginShape();
//     vertex(-7, 12);
//     vertex(0, 20);
//     vertex(7, 12);
//     endShape();
//     pop();
// }
this.render = function() {
    if(shiptype==1) {
      guntypename = "Machine Gun";
      shipdamage = 5;
      Ship1();
    } else if(shiptype==2) {
      guntypename = "TriGun";
      shipdamage = 10;
      Ship2();
    } else if(shiptype==3) {
      guntypename = "Flame Thrower (BETA)";
      shipdamage = 20;
      Ship3();
    } else if(shiptype==4) {
      guntypename = "Cannon Ball";
      shipdamage = 15;
      Ship4();
    } else if(shiptype==5) {
      guntypename = "Mother Ship (BETA)";
      Ship5();
    }else {
      Ship1();
      guntypename = "Machine Gun";
      shipdamage = 5;
    } 
  }
this.boosting = function(b){this.drive = b;}
  this.update = function() {
    this.boost(this.drive, this.rotation);
    this.pos.add(this.vel);
    this.vel.mult(0.975);
    this.skip = !this.skip;
    if (this.skip === false) {
    }
  }

this.boost = function(a, b) {
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.2 * a);
    this.vel.add(force);
    force = p5.Vector.fromAngle(this.heading - (PI * b));
    force.mult(0.2 * abs(b));
    this.vel.add(force);
  }


this.edges = function() {
  if(rocks.length >= 1) {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
      this.ported = true;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
      this.ported = true;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
      this.ported = true;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
      this.ported = true;
    }
  } else {
    ArrowUP();
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
      this.ported = true;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
      this.ported = true;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
      this.ported = true;
    } else if (this.pos.y < -this.r) {
            

              for (var i = 0; i < 10; i++) {
    rocks.push(new Rocks());
  }

      this.pos.y = height + this.r;
      this.ported = true;
    }
}
} 

  this.setRotation = function(a) {
    this.rotation = a;
  }

  this.turn = function() {
    var prefHeading = p5.Vector.sub(createVector(mouseX, mouseY), this.pos).heading();
    if (this.heading - prefHeading > PI) {
      prefHeading += TWO_PI;
    } else if (this.heading - prefHeading < -PI) {
      prefHeading -= TWO_PI;
    }
    this.heading += (prefHeading - this.heading) * 0.25;
    this.heading %= TWO_PI;
  }

    this.hits = function(rocks) {
    var d = dist(this.pos.x, this.pos.y, rocks.pos.x, rocks.pos.y);
    if (d < this.r + rocks.r) {
      return true;
    } else {
      return false;
    }
  }
}

























function mousePressed() {
  spaceHeld = true;
}

function mouseReleased() {
  spaceHeld = false;
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW || key == 'D' || key == 'A') {
    play.setRotation(0);
  }
  if (keyCode == UP_ARROW || keyCode == DOWN_ARROW || key == 'W' || key == 'S') {
    play.boosting(0);
    firerender = false;

  }

}

function keyPressed() {
  if (keyCode == RIGHT_ARROW || key == 'D') {
    play.setRotation(-0.5);
  } else if (keyCode == LEFT_ARROW || key == 'A') {
    play.setRotation(0.5);
  }
  if (keyCode == UP_ARROW || key == 'W') {
    play.boosting(1);
    firerender = true;
  } else if (keyCode == DOWN_ARROW || key == 'S') {
    play.boosting(-0.5);
  }

    if (key == '1') {
    if(guntype==5){
      guntype = 1;
      shiptype = 1;

    } else{
      guntype++;
      shiptype++;
    }
}
  if (key == " ") {
    if (startbutton) {
      startbutton = false;    
    } else {
    startbutton = true;
  }
}
  if (key == 'N') {
        for (var i = 0; i < 10; i++) {
    rocks.push(new Rocks());

  }
}

  if (key == 'M') {
     for (var i = 0; i < 10; i++) {
    rocks.splice(i, 100);
    enemys.splice(i, 100);
  }
  }

    if (key == 'U') {
        cooldown_fire+=1;
        console.log(cooldown_fire);

  } 

    if(key == 'I'){
        cooldown_fire-=1;
        console.log(cooldown_fire);


  } 

      if(key == '0'){
        draw();
        console.log('redraw!');


  }

    if (key == 'B') {
      for (var i = 0; i < 10; i++) {
      enemys.push(new Enemy(random(width), 0, 0))
    }

  }



}
