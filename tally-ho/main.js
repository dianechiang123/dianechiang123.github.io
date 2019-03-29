let a = 0;
let x = 10;
let y = 20;


function setup() {

	const canvas = createCanvas(400, 220);
	canvas.parent('my-canvas');

  background('#F4F4F4');
  stroke('#ED225D');
  strokeWeight(2);

}

function mousePressed() {

	a = a + 1;
	x = x + 10;

  // first row
  if(x <= width - 40) {

    // when mouse is pressed, draw vertical line up to 4 tallies
	if(a <= 4) {

	  line(x, y, x, y + 30);

	  } else {

        // draw diagonal line on the 5th talley
        line(x, y, x - 50, y + 30);

        // reset talley to 0
	    a = 0;
	  }

  } else {

    // same for line two
    a = 1;
    x = 20;
    y = y + 50;

   line(x, y, x, y + 30);
  }


    redraw();
}


function keyPressed() {

  // when key is pressed, the canvas clears and tallies start at the beginning
  background('#F4F4F4');
  a = 0;
  x = 10;
  y = 20;
}
