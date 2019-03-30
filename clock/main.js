function setup() {

  	const canvas = createCanvas(700, 400);
    canvas.parent('my-canvas');

}

function draw() {
  background(180,100,100);

  background(180,100,100);
  noStroke();

  //Record player
  fill(180,180,100);
  rect(60, 60, width/1.18, height/1.4);

  // small vinyl 24-hours
  fill(0);
  ellipse(width/5, height/2, 100);

  fill(255);
  ellipse(width/5, height/2, 30);

  // medium vinyl 60-minutes
  fill(0);
  ellipse(width/2.3, height/2, 150);

  fill(255);
  ellipse(width/2.3, height/2, 45);

  // large vinyl 60-seconds
  fill(0);
  ellipse(width/1.35, height/2, 200);

  fill(255);
  ellipse(width/1.35, height/2, 60);

  // map time to circle
  let s = map(second(), 0, 60, 0, radians(360));
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, radians(360));
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, radians(360));

  // 24-hour rotating dot
  fill(180,180,180);
  ellipse(width/5 + cos(h - radians(90)) * 30, height/2 + sin(h - radians(90)) * 30, 15);

  // 60-minute rotating dot
  fill(180,180,180);
  ellipse(width/2.3 + cos(m - radians(90)) * 50, height/2 + sin(m - radians(90)) * 50, 15);

  // 60-second rotating dot
  fill(180,180,180);
  ellipse(width/1.35 + cos(s - radians(90)) * 70, height/2 + sin(s - radians(90)) * 70, 15);

  // Vinyl record pin - small
  push( );
  translate(width/5, height/2);
  rotate(radians(120));
  fill(255,0,0);
  rect(-4,-60,8,60);
  pop( );

  // Vinyl record pin - medium
  push( );
  translate(width/2.3, height/2);
  rotate(radians(120));
  fill(255,0,0);
  rect(-4,-90,8,90);
  pop( );

  // Vinyl record pin - large
  push( );
  translate(width/1.35, height/2);
  rotate(radians(120));
  fill(255,0,0);
  rect(-4,-115,8,115);
  pop( );


}
