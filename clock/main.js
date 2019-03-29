let angle = 0;

function setup() {

  	const canvas = createCanvas(700, 400);
    canvas.parent('my-canvas');

}

function draw() {
  background('#F4F4F4');
  noStroke();


  // vinyl
  fill(0);
  ellipse(width/5, height/2, 200);

  fill(255);
  ellipse(width/5, height/2, 60);

  fill(0);
  ellipse(width/2, height/2, 150);

  fill(255);
  ellipse(width/2, height/2, 50);


  fill(0);
  ellipse(width/1.35, height/2, 100);

  fill(255);
  ellipse(width/1.35, height/2, 40);



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
