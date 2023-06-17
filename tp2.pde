//Ana Simone
//Comision 3 - Profesor David Bedoian
//tp 2 : Funciones y Ciclos FOR
// VIDEO DE YT: https://youtu.be/Scp0pz9-_Ws
PImage arteoptico;
int cant = 80;
float iniciotam = 400;
float tamcirculo = 5;
color[] circleColor;
boolean randomColor = false;

void setup() {
  size(800, 400);
  circleColor = new color[cant];
  resetColor();
  arteoptico = loadImage("arteoptico.jpg");
}

void draw() {
  background(255);
  image(arteoptico, 0, 0, 400, 400);
  translate(600, 200);

  for (int i = 0; i < cant; i++) {
    float size = iniciotam - i * tamcirculo;
   
    pushMatrix();
    
    if (randomColor) {
      fill(random(255), random(255), random(255));
    } else {
      fill(circleColor[i]);
    }
noStroke();
    ellipse(0, 0, size, size);
    popMatrix();
  }
}

void keyPressed() {
  if (key == 'n' || key == 'N') {
    randomColor = true;
    changeRandomColor();
  }
}

void keyReleased() {
  if (key == 'n' || key == 'N') {
    randomColor = false;
    resetColor();
  }
}
