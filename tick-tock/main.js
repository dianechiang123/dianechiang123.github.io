let angle = 0;

function setup() {

  	const canvas = createCanvas(700, 280);
    canvas.parent('my-canvas');

}




function draw() {

	  background('#F4F4F4');

	  // display digital time in 12-hour format
	  fill(0);
	  textSize(24);
	  noStroke();

	  let displayHour = hour();
	  let displayMinute = minute();
	  let displaySecond = second();

	  if(displayHour > 12) {
	    displayHour = displayHour - 12;
	  }

	  if(displayHour == 0) {
	    displayHour = 12;
	  }

	  if(displayHour < 10) {
	    displayHour = nf(displayHour, 2, 0);
	  }

	    if(displayMinute < 10) {
	    displayMinute = nf(displayMinute, 2, 0);
	  }


	    if(displaySecond < 10) {
	    displaySecond = nf(displaySecond, 2, 0);
	  }

	  text(displayHour + ':', 480, height/2);
	  text(displayMinute + ':', 530, height/2);
	  text(displaySecond, 570, height/2);


	  // white clock face
	  fill(255);
	  ellipse(width/2, height/2, 200);


	  // map time to circle
	  let s = map(second(), 0, 60, 0, radians(360));
	  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, radians(360));
	  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, radians(360) * 2);



	  // hour hand
	  push( );
	  translate(width/2, height/2);

	  rotate(h);

	  fill(255, 0, 0);
	  rect(-3, -60, 6, 60);
	  pop( );

	  // minute hand
	  push( );
	  translate(width/2, height/2);

	  rotate(m);

	  fill(0);
	  rect(-2, -90, 4, 90);
	  pop( );

	  // second hand
	  push( );
	  translate(width/2, height/2);

	  rotate(s);

	  fill(180, 180, 180);
	  rect(-1, -120, 2, 120);
	  pop( );



	}
