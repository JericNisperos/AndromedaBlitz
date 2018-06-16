function StartDesigns() {

	if (life >= 1 && !startbutton) {
  	push();
    //translate(width / 2, height / 2);
    noStroke();
    fill(255);
    textSize(12);
    textStyle(BOLD);
    textAlign(CENTER);
    text("ALPHA VER. 1.0", width - 60, 25);
    textSize(60);
    //text("Press SPACE", width / 2, height / 2 + 100);
  	pop();
}
}