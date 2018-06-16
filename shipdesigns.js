function Ship1() {
	push();
    rectMode(CENTER);
    noStroke();
    translate(play.pos.x, play.pos.y);
    rotate(play.heading + PI / 2);
    fill(100, 250, 100);
    beginShape();
    vertex(0, 10);
    vertex(-15, 15);
    vertex(0, -15);
    vertex(15, 15);
    endShape();
    
    if(firerender) {
    stroke(250, 100, 100);
    strokeWeight(2);
    noFill();
    beginShape();
    vertex(-7, 12);
    vertex(0, random(20, 25));
    vertex(7, 12);
    endShape();

    }
        pop();
}

function Ship2() {
	push();
    rectMode(CENTER);
    noStroke();
    translate(play.pos.x, play.pos.y);
    rotate(play.heading + PI / 2);
    fill(250, 250, 150);
    beginShape();
    vertex(0, 10);
    vertex(-15, 15);
    vertex(0, -15);
    vertex(15, 15);
    endShape();
    
    
    if(firerender) {
    stroke(250, 100, 100);
    strokeWeight(2);
    noFill();
    beginShape();
    vertex(-7, 12);
    vertex(0, random(20, 25));
    vertex(7, 12);
    endShape();

    }
        pop();
}

function Ship3() {
	push();
    rectMode(CENTER);
    noStroke();
    translate(play.pos.x, play.pos.y);
    rotate(play.heading + PI / 2);
    fill(250, 100, 100);
    beginShape();
    vertex(0, 10);
    vertex(-15, 15);
    vertex(0, -15);
    vertex(15, 15);
    endShape();
    
    if(firerender) {
    stroke(250, 100, 100);
    strokeWeight(2);
    noFill();
    beginShape();
    vertex(-7, 12);
    vertex(0, random(20, 25));
    vertex(7, 12);
    endShape();

    }
        pop();
}

function Ship4() {
	push();
    rectMode(CENTER);
    noStroke();
    translate(play.pos.x, play.pos.y);
    rotate(play.heading + PI / 2);
    fill(20, 20, 20);
    beginShape();
    vertex(0, 10);
    vertex(-15, 15);
    vertex(0, -15);
    vertex(15, 15);
    endShape();
    
    if(firerender) {
    stroke(250, 100, 100);
    strokeWeight(2);
    noFill();
    beginShape();
    vertex(-7, 12);
    vertex(0, random(20, 25));
    vertex(7, 12);
    endShape();

    }
        pop();
}

function Ship5() {
    push();
    rectMode(CENTER);
    noStroke();
    translate(play.pos.x, play.pos.y);
    rotate(play.heading + PI / 2);
    fill(100, 100, 250);
    beginShape();
    vertex(0, 20);
    vertex(-30, 30);
    vertex(0, -30);
    vertex(30, 30);
    endShape();
    
    if(firerender) {
    stroke(250, 100, 100);
    strokeWeight(2);
    noFill();
    beginShape();
    vertex(-7, 12);
    vertex(0, random(20, 25));
    vertex(7, 12);
    endShape();

    }
        pop();
}