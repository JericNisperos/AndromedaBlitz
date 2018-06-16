
var play;
var spaceHeld = false;
var lasers = [];
var firingDelay = 0;
var guntype = 1;
var rocks = [];
var ctx;
var particles = [];
var startbutton = false;
var flames = [];
var guntypename = "Machine Gun";
var shiptype = 1;
var particleskill = [];
var cannons = [];
var life = 120;
var score = 0;
var vanlife = false;
    var truepoint = false;
var shipdamage = 0;
var enemys = [];
var vanguards = [];
  var booster = 10;
  var smallships = [];
  var coins = 1000;
//OPTIONS
var

cooldown_fire = 5;
rocks_count = 10
function setup() {
  ctx = createCanvas(windowWidth, windowHeight);
  play = new Player();

    for (var i = 0; i < 10; i++) {
    rocks.push(new Rocks());

  }



    for (var i = 0; i < 10; i++) {
      enemys.push(new Enemy(random(width), 0, 0))
    }

    // for (var i = 0; i < 10; i++) {
    //   vanguards.push(new Vanguard(random(width), 0, 0))
    // }




  background(51);
     consoleText();
     //noLoop();
}

function draw() {


  if (startbutton) {
  ctx = createCanvas(windowWidth, windowHeight);
  background(51);
  colorMode(RGB);
  play.render();
  play.turn();
  play.update();
  play.edges();
  Attack();
  firingDelay--;

  CheckerDraw();
  VanguardJS();

  var playerxy = createVector(play.pos.x, play.pos.y);
    for (var i = 0; i < enemys.length; i++) {
  enemys[i].seek(playerxy);
  enemys[i].update();
  enemys[i].display();

} 
























    for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    }  else {
      for (var j = rocks.length - 1; j >= 0; j--) {
        if (lasers[i].hits(rocks[j])) {
          if (life >= 0) {
          score += random(100);
        }
          for (var k = 0; k < 3; k++) {
            particleskill.push(new ParticleKill(lasers[i].pos, lasers[i].angle + PI + random(-PI / 2, PI / 2), 255, 255, 255));
          }
          if (rocks[j].r > 20) {
            var newRocks = rocks[j].breakup();
            rocks = rocks.concat(newRocks);
          }
          rocks.splice(j, 1);
          lasers.splice(i, 1);
          break;
        }
      }
    }

}  

  
    for (var i = cannons.length - 1; i >= 0; i--) {
    cannons[i].render();
    cannons[i].update();
    if (cannons[i].offscreen()) {
      cannons.splice(i, 1);
    }  else {
      for (var j = rocks.length - 1; j >= 0; j--) {
        if (cannons[i].hits(rocks[j])) {
          if (life >= 0) {
          score += random(100);
        }
          for (var k = 0; k < 3; k++) {
            particleskill.push(new ParticleKill(cannons[i].pos, cannons[i].angle + PI + random(-PI / 2, PI / 2), 255, 255, 255));
          }
          if (rocks[j].r > 20) {
            var newRocks = rocks[j].breakup();
            rocks = rocks.concat(newRocks);
          }
          rocks.splice(j, 1);
          break;
        }
      }
    }

} 
         for (var i = 0; i < enemys.length; i++) {

    if (play.hits(enemys[i])) {

      enemys.splice(i, 1);
      if (life >= 0) {
        life -= 10;
      }
    
}

  }



      for (var i = 0; i < rocks.length; i++) {

    rocks[i].render();
    rocks[i].update();
    rocks[i].edges();
    if (play.hits(rocks[i])) {
    
    if (rocks[i].r > 20) {
             var rocksed = rocks[i].breakup();
             rocks = rocks.concat(rocksed);
           }

      rocks.splice(i, 1);
      if (life >= 0) {
        life -= random(1, 10);
      }
    
}

  }
        for (var i = particles.length - 1; i > 0; i--) {
    particles[i].render();
    particles[i].update();
    if (particles[i].opacity <= 0) {
      particles.splice(i, 1);
    }
  }

          for (var i = particleskill.length - 1; i > 0; i--) {
    particleskill[i].render();
    particleskill[i].update();
    if (particleskill[i].opacity <= 0) {
      particleskill.splice(i, 1);
    }
  }

          for (var i = flames.length - 1; i > 0; i--) {
    flames[i].render();
    flames[i].update();
    if (flames[i].opacity <= 0) {
      flames.splice(i, 1);
    } else {

          for (var j = rocks.length - 1; j >= 0; j--) {
        if (flames[i].hits(rocks[j])) {
          if (life >= 0) {
          score += random(100);
        }

          if (rocks[j].r > 20) {
            var newRocks = rocks[j].breakup();
            rocks = rocks.concat(newRocks);
          }
          rocks.splice(j, 1);
          flames.splice(i, 1);
          break;
        }
      }
  }



    
  }

  TextDetails();

} else {
  if (life >= 1 && !startbutton) {
    push();
  translate(width / 2, height / 2);
  noStroke();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text("Alpha Ver. 0.5", 0, 0);
  textSize(60);
  text("Press SPACE", 0, 80);
  pop();
} 
 
}

if (life <= 0){
  startbutton = false;
  push();
  fill(51);
  rect(0, 0, width, height);
  fill(255);
  text("Press Space to restart", width / 2, height / 2);
      setup();
      //startbutton = false;
      life = 100;
      // for (var i = 0; i < 1; i++) {
      //   rocks.splice(i, 1000);
      //   enemys.splice(i, 100);
      //   lasers.splice(i, 100);
      // }

      
  pop();
}



}






















function TextDetails() {
  push();
  textSize(15);
  textStyle(BOLD);
  fill(255);
  text("W-A-S-D to Move", 10, height - 25);
  text("Mouse Key to Shoot", 10, height - 10);
  text("Made by: Jeric Nisperos", width - 180, height - 10);
  text("ALPHA v0.5", width - 100, 20);
  text('LIFEPOINTS: ' + floor(life), 10, 20);
  text('Score: ' + floor(score), 10, 35);
  textSize(20);
  textAlign(CENTER);
  text("GUNTYPE: " + guntypename, width / 2, height - 50);
  pop();

}

function consoleText() {
    console.log('WASD = Move');
    console.log('Mouse = Shoot');
    console.log('1 = Change Ship');
    console.log('N = Add Enemy(10)');
    console.log('M = Clear');
    console.log('U = Cooldown -');
    console.log('I = Cooldown +');

}

function ArrowUP(){
  beginShape();
  vertex(width / 2 - 20, 50);
  vertex(width / 2, 30);
  vertex(width / 2 + 20, 50);
  endShape();
}