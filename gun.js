function Gun(spos, angle, a, b, c) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);
  this.h = random(255);
  this.angle = angle;

  this.update = function() {
    this.pos.add(this.vel);
  }
  this.render = function() {
    push();
    stroke(a, b, c);
    strokeWeight(6);
    point(this.pos.x, this.pos.y);
    //line(this.pos.x, this.pos.y, this.pos.x - this.vel.x * 2, this.pos.y - this.vel.y * 2);
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

  this.offscreen = function() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  }


}

function Attack() {
  var a,b,c;
   if (spaceHeld  && firingDelay <= 0) {
    if(guntype==1){
      a = 100;
      b = 250;
      c = 100;
    lasers.push(new Laser(play.pos, play.heading, a, b, c));
    firingDelay = cooldown_fire - 1;
} else if(guntype==2){
       a = 250;
      b = 250;
      c = 150;
  lasers.push(new Gun(play.pos, play.heading + 0.2, a, b, c));
  lasers.push(new Gun(play.pos, play.heading - 0.2, a, b, c));
  lasers.push(new Gun(play.pos, play.heading, a, b, c));
  firingDelay = cooldown_fire + 10;
} else if(guntype==3){
         a = 250;
      b = 100;
      c = 100;
  //flame.push(new Flame(play.pos, play.heading, 250, 100, 100));
  firingDelay = 2;
     for (var i = 0; i < 1; i++) {
  flames.push(new Flame(createVector(play.pos.x + cos(play.heading) * play.r, play.pos.y + sin(play.heading) * play.r), play.heading + random(-PI / 70, PI / 70), 0));
}
}  else if(guntype==4){
      a = 20;
      b = 20;
      c = 20;
  //flame.push(new Flame(play.pos, play.heading, 250, 100, 100));
  firingDelay = cooldown_fire + 50;
  cannons.push(new Cannon(play.pos, play.heading, a, b, c));


} else if(guntype==5){
      a = 100;
      b = 100;
      c = 250;




  firingDelay = cooldown_fire + 1;



  //for (var i = 0; i < 1; i++) {
      smallships.push(new smallShip(play.pos.x, play.pos.y, 0));
   // }
}

      for (var i = 0; i < 3; i++) {
      particles.push(new Particle(createVector(play.pos.x + cos(play.heading) * play.r, play.pos.y + sin(play.heading) * play.r), play.heading + random(-PI / 2, PI / 2), a, b, c));
    }
  }

}

function Laser(spos, angle, a, b, c) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(10);
  this.h = random(255);
  this.angle = angle;

  this.update = function() {
    this.pos.add(this.vel);
  }
  this.render = function() {
    push();
    stroke(a, b, c);
    strokeWeight(6);
    //point(this.pos.x, this.pos.y); 
    line(this.pos.x, this.pos.y, this.pos.x + this.vel.x * 2, this.pos.y + this.vel.y * 2);
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

  this.offscreen = function() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  }


}


function Flame(spos, angle, h) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(random(5, 10));
  this.h = random(100, 250);
  this.lastPos = [];
  this.opacity = 250;
  this.rot = random(-PI / 70, PI / 70);

  this.update = function() {
    this.lastPos.push(createVector(this.pos.x, this.pos.y));
    if (this.lastPos.length > 8) {
      this.lastPos.splice(0, 1);
    }
    this.pos.add(this.vel);
    this.vel.mult(1);
    this.vel.rotate(this.rot);
    this.opacity-=5;
  }
  this.render = function() {
    push();
    colorMode(RGB);
    strokeWeight(2);
    for (var i = this.lastPos.length - 1; i > 0; i--) {
     
      stroke(this.h,100, 100);
      //stroke(this.h, 100, (i) / this.lastPos.length * this.opacity);
      if (i === 0) {
        line(this.lastPos[i].x, this.lastPos[i].y, this.pos.x, this.pos.y);
      } else {
        line(this.lastPos[i].x, this.lastPos[i].y, this.lastPos[i - 1].x, this.lastPos[i - 1].y);
      }
    }
    stroke(150, 100, 255);
    //stroke(this.h, 100, this.opacity);
    //point(this.pos.x, this.pos.y);
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

  this.offscreen = function() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  }
}

function Cannon(spos, angle, a, b, c) {
  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(5);
  this.h = random(255);
  this.angle = angle;

  this.update = function() {
    this.pos.add(this.vel);
  }
  this.render = function() {
    push();
    stroke(a, b, c);
    strokeWeight(20);
    point(this.pos.x, this.pos.y);
    //line(this.pos.x, this.pos.y, this.pos.x - this.vel.x * 2, this.pos.y - this.vel.y * 2);
    pop();
  }

  this.hits = function(rock) {
    var d = dist(this.pos.x, this.pos.y, rock.pos.x, rock.pos.y);
    if (d < rock.r + 10) {
      return true;
    } else {
      return false;
    }
  }

  this.offscreen = function() {
    if (this.pos.x > width || this.pos.x < 0) {
      return true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      return true;
    }
    return false;
  }


}