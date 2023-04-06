//Tp 0 - retrato
// Ana Simone
//comision 3
//legajo:94764/5

PImage imagen;
void setup () {
  //le damos tamaño y color a nuestra ventana
  size (800, 400);
  background (#E6F8FA);

  //cargamos la imagen en la variable que elegimos
  imagen=loadImage("retratomujer.jpg");
}
void draw () {
  //cargamos el tamaño de la imagen en la ventana
  image (imagen, 400, 0, 400, 400);

  //pelo trasero
  fill(#E8E69D);
  noStroke();
  ellipse (200, 140, 320, 290);
  strokeWeight (6);
  line (150, 200, 100, 380);
  strokeWeight (20);
  fill(#F7EE9B);
  ellipse(300, 300, 40, 100);
  ellipse(330, 300, 20, 100);
  ellipse(100, 300, 30, 120);


  //cuello
  fill(#FADCC5);
  noStroke();
  rect(130, 350, 140, 150);

  //cara
  strokeWeight (1);
  fill(#FCD3B2);
  noStroke();
  ellipse (200, 200, 290, 360);

  //ojo izquierdo
  stroke (0);
  fill(255, 244, 224);
  ellipse (125, 160, 75, 30);

  //pupila izquierda
  fill(81, 113, 84);
  ellipse (125, 160, 25, 25);
  fill(0);
  ellipse(125, 160, 10, 10);
  fill(255);
  ellipse (124, 159, 3, 3);
  ellipse (128, 157, 6, 6);
  //ojo derecho
  stroke (0);
  fill(255, 244, 224);
  ellipse (275, 160, 75, 30);

  //pupila derecha
  fill(81, 113, 84);
  ellipse (275, 160, 25, 25);
  fill(0);
  ellipse(275, 160, 10, 10);
  fill(255);
  ellipse(274, 159, 3, 3);
  ellipse(278, 157, 6, 6);

  //nariz
  fill(#FCD3B2);
  rect(185, 175, 30, 80);
  triangle(185, 230, 165, 255, 185, 255);
  triangle(215, 230, 235, 255, 215, 255);
  fill(0);
  ellipse(215, 250, 10, 8);
  ellipse(185, 250, 10, 8);

  //boca
  fill(0);
  line (165, 310, 235, 310);
  fill(#FFB2C5);
  triangle (165, 310, 200, 320, 235, 310);
  triangle (165, 310, 185, 300, 200, 310);
  triangle (200, 310, 215, 300, 235, 310);

  //ceja derecha
  fill(#E8E69D);
  rect (240, 125, 70, 8);

  //ceja izquierda
  rect (90, 125, 70, 8);

  //pelo delantero

  strokeWeight(9);
  stroke(#E8E69D);
  line (100, 65, 75, 95);
  line (75, 95, 55, 170);
  line (300, 65, 320, 95);
  line(320, 95, 330, 250);
  line(200, 25, 290, 50);
  line(200, 20, 280, 40);
  line(330, 250, 340, 290);
  line(200, 30, 100, 30);
  line(200, 30, 300, 60);
  line(200, 25, 90, 55);
  line(200, 20, 90, 50);
  strokeWeight(30);
  line (340, 100, 340, 250);

  //oreja
  noStroke();
  fill(#FCD3B2);
  ellipse (50, 200, 25, 80);

  //detalles de pelo
  stroke(#E8E69D);
  strokeWeight(6);
  line(60, 150, 50, 250);
}
