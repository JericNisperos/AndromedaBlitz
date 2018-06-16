function CheckerDraw() {



	//ENEMYS----------------------
	for (var i = lasers.length - 1; i >= 0; i--) {
    for (var j = enemys.length - 1; j >= 0; j--) {
        if (lasers[i].hits(enemys[j])) {
          if (life >= 0) {
          score += random(100);
        }
          for (var k = 0; k < 10; k++) {
            particleskill.push(new ParticleKill(lasers[i].pos, lasers[i].angle + PI + random(-PI, PI), random(150,250), 100, 100));
          }
          enemys[j].life -= shipdamage;
          if (enemys[j].life <= 0) {
          enemys.splice(j, 1);
        }
          lasers.splice(i, 1);
          break;
        }
      }


    }
    //FLAMES ENEMYS---------------------------
        for (var i = flames.length - 1; i >= 0; i--) {
    for (var j = enemys.length - 1; j >= 0; j--) {
        if (flames[i].hits(enemys[j])) {
          if (life >= 0) {
          score += random(100);
        }
          for (var k = 0; k < 10; k++) {
            particleskill.push(new ParticleKill(flames[i].pos, 10 + PI + random(-PI, PI), random(150,250), 100, 100));
          }
          enemys.splice(j, 1);
          flames.splice(i, 1);
          break;
        }
      }


    }

    //CANNONS ENEMYS--------------------
        for (var i = cannons.length - 1; i >= 0; i--) {
    for (var j = enemys.length - 1; j >= 0; j--) {
        if (cannons[i].hits(enemys[j])) {
          if (life >= 0) {
          score += random(100);
        }
          for (var k = 0; k < 10; k++) {
            particleskill.push(new ParticleKill(cannons[i].pos, cannons[i].angle + PI + random(-PI, PI), random(150,250), 100, 100));
          }
          enemys.splice(j, 1);
          break;
        }
      }


    }

	










}