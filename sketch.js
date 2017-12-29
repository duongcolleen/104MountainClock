//Name: Colleen Duong
//Class: Section D
//Email: cduong@andrew.cmu.edu
//Project-06-Abstract Clock


//all of the numbers for the x-coordinates of the falling snow
var snowfallx = [400, 300, 200, 100,
                  450, 350, 250, 150, 50,
                  400, 300, 200, 100,
                  450, 350, 250, 150, 50,
                  400, 300, 200, 100,
                  450, 350, 250, 150, 50,
                  400, 300, 200, 100,
                  450, 350, 250, 150, 50,
                  400, 300, 200, 100,
                  450, 350, 250, 150, 50,
                  400, 300, 200, 100,
                  450, 350, 250, 150, 50,
                  400, 300, 200, 100,
                  450, 350];

//All of the numbers for the y-coordinates of the falling snow
var snowfally = [15, 30, 20, 40, 35,
                15, 25, 30, 25,
                30, 20, 30, 20, 30,
                70, 50, 60, 90,
                130, 100, 120, 150, 160,
                150, 160, 130, 170,
                190, 170, 190, 180, 180,
                200, 210, 230, 240,
                210, 240, 260, 210, 220,
                290, 300, 310, 270,
                330, 340, 350, 320, 320,
                350, 360, 340, 340,
                360, 400, 430, 420, 400]

var snowd = 5; //snow diameter

function setup() {
    createCanvas(480, 480);
}

function draw() {
  background(240, 235, 231);

  var H = hour();
  var M = minute();
  var S = second();

//Design Code --> The Mountains
  noStroke();
    //Mountain 5 (Lightest Blue)
      fill(160, 201, 218);
      triangle(50, 500, 400, 500, 230, 180);
      triangle(-50, 500, 300, 500, 110, 100);
      triangle(-50, 500, 150, 500, 50, 130);
      triangle(0, 500, 300, 500, 150, 100);

    //Mountain 4
      fill(71, 153, 190);
      triangle(180, 500, 300, 500, 250, 280);
      triangle(200, 500, 450, 500, 340, 300);
      triangle(350, 500, 450, 500, 400, 320);
      triangle(350, 500, 460, 500, 420, 320);
      triangle(400, 500, 520, 500, 470, 350);

    //Mountain 4
      fill(51, 129, 175);
      triangle(180, 500, 400, 500, 300, 250);
      triangle(300, 500, 450, 500, 380, 280);

    //Mountain 4
      fill(38, 94, 151);
      triangle(300, 500, 450, 500, 360, 370);
      triangle(350, 500, 500, 500, 450, 300);

    //Mountain 3
      fill(31, 66, 120);
      triangle(-30, 500, 100, 500, 50, 200);
      triangle(-30, 500, 100, 500, 10, 250);
      triangle(20, 500, 200, 500, 110, 200);
      triangle(60, 500, 300, 500, 200, 200);

    //Mountain 2
      fill(18, 49, 87);
      triangle(-30, 500, 100, 500, 50, 300);
      triangle(-30, 500, 100, 500, 10, 350);
      triangle(20, 500, 200, 500, 110, 370);
      triangle(60, 500, 300, 500, 200, 440);
      triangle(70, 500, 300, 500, 200, 350);
      triangle(90, 500, 330, 500, 300, 440);
      triangle(160, 500, 400, 500, 300, 300);
      triangle(300, 500, 450, 500, 400, 350);
      triangle(400, 500, 500, 500, 450, 400);

    //Mountain 1 (Darkest Blue)
      fill(0, 7, 18);
      triangle(-30, 500, 100, 500, 50, 400);
      triangle(20, 500, 200, 500, 130, 420);
      triangle(60, 500, 300, 500, 200, 440);

//Design Code --> The mountains

//When it becomes 59 minutes a flag is drawn on the top of the mountain to indicate that the onion has reached the peak (victory!!!)
if(M == 59){
  fill(255);
  rect(130, 100, 15, 10);
  fill(240, 235, 231);
  triangle(130, 110, 130, 100, 135, 105)
  push()
  stroke(0);
  line(145, 100, 145, 120);
  pop()
}

//Sprout climbs up mountain (Minutes)
  var sprout = M * 2
  fill(255);
  ellipse(140, 240-sprout, 10, 10);
  rect(138, 240-sprout, 4, 10, 10);
  fill(129, 188, 179-M);
  ellipse(136, 235-sprout, 8, 5);
  ellipse(144, 235-sprout, 8, 5);



//Changing Moon Shape (Hours)
  for(var moon = 1; moon < H + 1; moon++){
    fill(196, 219, 230);      //blue moon
    ellipse(400, 100, 100, 100);
    fill(240, 235, 231);      //cut moon
    ellipse(450, 100, (moon*3)+70, (moon*3)+70); //changes only the part of the  moon that cuts the moon
    fill(214, 233, 242); //Clouds
    ellipse(300, 120, 25, 10);
    ellipse(330, 140, 70, 20);
    ellipse(360, 130, 70, 20);
    ellipse(400, 150, 60, 15);
  }

//Making snow fall (Seconds) -- Amount of Snow = Number of Seconds
for(var snowfall = 0; snowfall < S; snowfall++){
  fill(255);
  ellipse(snowfallx[snowfall], snowfally[snowfall], snowd, snowd);
}

}
