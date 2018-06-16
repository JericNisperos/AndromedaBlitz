function Vanguard(x, y) {
    this.life = 250;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, -2);
    this.pos = createVector(x, y);
    this.r = 20;
    this.maxspeed = 1;
    this.maxforce = 0.2;
  

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.pos.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.applyForce = function(force) {
    this.acceleration.add(force);
  }

  this.seek = function(target) {

    var desired = p5.Vector.sub(target, this.pos); 

    desired.setMag(this.maxspeed);

    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);

    this.applyForce(steer);
  }
  this.display = function() {
    var theta = this.velocity.heading() + PI / 2;
    push();
    fill(this.life);
    noStroke();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    beginShape();
    vertex(0, 15);
    vertex(-20, 20);
    vertex(0, -20);
    vertex(20, 20);
    endShape(CLOSE);
    rectMode(CENTER);
    rect(0, -15, 40, 30);
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

function VanguardJS() {

	//VANGUARDS--------
	for (var i = 0; i < vanguards.length; i++) {
      var p1 = random(width);
      var p2 = random(height);
      var startpoint = createVector(p1, p2);
      startpoint.r = 0;
  		vanguards[i].seek(playerxy);
  		vanguards[i].update();
  		vanguards[i].display();
    var d = dist(vanguards[i].pos.x, vanguards[i].pos.y, p1, p2);
    if (d < vanguards[i].r + startpoint.r && !truepoint) {
      truepoint = true;
    } else {
      
    }
}
  if(truepoint) {
    for (var i = 0; i < vanguards.length; i++) {
      vanguards[i].seek(playerxy);
      

  }
}
		//LASER VANGUARDS----
	    for (var i = lasers.length - 1; i >= 0; i--) {
    for (var j = vanguards.length - 1; j >= 0; j--) {
        if (lasers[i].hits(vanguards[j])) {
          if (life >= 0) {
          score += random(100);
        }
          for (var k = 0; k < 10; k++) {
            particleskill.push(new ParticleKill(lasers[i].pos, lasers[i].angle + PI + random(-PI, PI), random(150,250), 100, 100));
          }
          vanguards[j].life -= 10;

          if(vanguards[j].life <= 0) {
          vanguards.splice(j, 1);

          for (var k = 0; k < 10; k++) {
            particleskill.push(new ParticleKill(lasers[i].pos, lasers[i].angle + PI + random(-PI, PI), random(150,250), 100, 100));
          }
        }
          lasers.splice(i, 1);
          //console.log("HIT");
          break;
        }


      }


    }
    	//FLAME VANGUARDS------------
            for (var i = flames.length - 1; i >= 0; i--) {
    for (var j = vanguards.length - 1; j >= 0; j--) {
        if (flames[i].hits(vanguards[j])) {
          if (life >= 0) {
          score += random(100);
        }
          for (var k = 0; k < 10; k++) {
            particleskill.push(new ParticleKill(flames[i].pos, flames[i].angle + PI + random(-PI, PI), random(150,250), 100, 100));
          }
          vanguards[j].life -= shipdamage;

          if(vanguards[j].life <= 0) {
          vanguards.splice(j, 1);

          for (var k = 0; k < 10; k++) {
            particleskill.push(new ParticleKill(flames[i].pos, flames[i].angle + PI + random(-PI, PI), random(150,250), 100, 100));
          }
        }
          flames.splice(i, 1);
          break;
        }}}



}