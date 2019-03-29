//


// Use 2 variables to store key data = 4 points

	let x = 0;
	let y = 0;

	let speed = 4;
	let easing = 0.05;

	let figureSpeed = 1;
	let figureX = 0;
	let figureY = 0;

	let sunrayX;
	let sunrayY;

	let sunDiameterX = 180;
	let sunDiameterY = 180;

	let characterX = 500;
	let characterY = 0;

  let fortX = 512;
	let fortY = 655;

	let cloudSpeed = 1;
	let cloudX = 0;
	let cloudY = 0;




function setup() {

// Having 1024px x 768px dimensions = 1 point

  	const canvas = createCanvas(1024, 768);
    canvas.parent('my-canvas');

}




function draw() {

// Using background(), stroke(), and fill() { or using their corresponding noStroke() or noFill() } = 3 points

  // Color: "Terbang Merapi"
  	background(79,119,142);




// Use transparency = 1 point

  // Ground
  	fill(85, 98, 112, 230);
  		rect((width/2), 750, width, 100);




    // Fort

  	rectMode(CENTER);
  	fill(79, 255, 142, 50);
		rect(fortX, fortY, 100, 90);

// One example of beginShape(), vertex(), and endShape() = 1 point

  // Flag on the Fort

  	noStroke();
  	fill(255, 119, 142);

    beginShape( );
    	vertex(fortX, fortY - 45)
	    vertex(fortX, fortY - 130)
	    vertex(fortX + 50, fortY - 130)
      vertex(fortX + 25, fortY - 110)
 			vertex(fortX + 50, fortY - 90)
   		vertex(fortX + 4, fortY - 90)
     	vertex(fortX + 4, fortY - 45)
		endShape(CLOSE);




  // People

    fill(85, 98, 112);
  	ellipse(200, 650, 20, 20);
  	ellipse(200, 670, 20, 20);
  	rect(200, 680, 20, 20);
  	rect(195, 700, 5, 20);
  	rect(205, 700, 5, 20);

  	fill(85, 98, 112);
  	ellipse(250, 650, 20, 20);
  	ellipse(250, 670, 20, 20);
  	rect(250, 680, 20, 20);
  	rect(245, 700, 5, 20);
  	rect(255, 700, 5, 20);

  	fill(85, 98, 112);
  	ellipse(600, 650, 20, 20);
  	ellipse(600, 670, 20, 20);
  	rect(600, 680, 20, 20);
  	rect(595, 700, 5, 20);
  	rect(605, 700, 5, 20);


// Respond to mouse or keyboard event = 2 points

  // Move Character with Arrow Keys

  	if (keyIsPressed) {
		if (keyCode == LEFT_ARROW) {characterX = characterX - speed;}
		else if (keyCode == RIGHT_ARROW) {characterX = characterX + speed;}
		//else if (keyCode == UP_ARROW) {fortY = fortY - speed;}
		//else if (keyCode == DOWN_ARROW) {fortY = fortY + speed;}
		}
  	fill(255);
  	ellipse(characterX, 650, 20, 20);
  	ellipse(characterX, 670, 20, 20);
  	rect(characterX, 680, 20, 20);
  	rect(characterX - 5, 700, 5, 20);
  	rect(characterX + 5, 700, 5, 20);




// Use at least 1 for loop = 2 points

	// Yellow rays of sunlight follow the sun.
  // Rays of sunlight turns white when mouse is pressed.

if (mouseIsPressed == true) {

  	for (sunrayY = 100; sunrayY <= height-200; sunrayY += 100) {
			for (sunrayX = 260; sunrayX <= width-240; sunrayX += 100) {

        strokeWeight(1.5);
        stroke(255);
        line(sunrayX, sunrayY, mouseX, mouseY);
        }
    }

} else {

    for (sunrayY = 100; sunrayY <= height-200; sunrayY += 100) {
			for (sunrayX = 260; sunrayX <= width-240; sunrayX += 100) {

        strokeWeight(1.5);
        stroke(251,184,41);
        line(sunrayX, sunrayY, mouseX, mouseY);
        }
    }
}




// Make use of at least 3 primitive functions = 3 points

  // The yellow sun follows the mouse cursor.
  // The sun turns white when mouse is pressed.

	// Color: "Heart of Gold"
	  if (mouseIsPressed == true) {
    noStroke();
    fill(255);
  		ellipse(mouseX, mouseY, sunDiameterX, sunDiameterY);

    } else {

    fill(251,184,41);
  		ellipse(mouseX, mouseY, sunDiameterX, sunDiameterY);

    }




  // When mouse is pressed, "Eclipse Moons" appear.
  // When mouse is pressed, moving clouds disappear.

  	if (mouseIsPressed == true) {
    fill(255, 119, 142);
    	ellipse(x + 150, y, 50, 50);
      ellipse(x - 150, y, 50, 50);

		} else {

  // Clouds move x position 1 pixel each time the sketch loops.
  // Clouds run to the edge of the canvas and then change direction.

    if (cloudX >= width || cloudX < 0 ) {
			cloudSpeed = -cloudSpeed;
		}

		fill(255, 255, 255);
    noStroke();
      ellipse(cloudX, cloudY + 100, 50, 50);
      ellipse(cloudX - 30, cloudY + 100, 80, 80);
      ellipse(cloudX - 80, cloudY + 100, 50, 50);

      ellipse(cloudX - 270, cloudY + 450, 20, 20);
      ellipse(cloudX - 300, cloudY + 450, 50, 50);
      ellipse(cloudX - 330, cloudY + 450, 80, 80);
      ellipse(cloudX - 380, cloudY + 450, 50, 50);

  	cloudX = cloudX + cloudSpeed;
    }




	// The movement of the "Eclipse Moons" eases while following the sun.

  	let targetX = mouseX;
  	let targetY = mouseY;
  	x += (targetX-x) * easing;
  	y += (targetY-y) * easing;

  	print(targetX + ":" +x);


}
