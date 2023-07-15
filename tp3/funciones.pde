boolean zonaCircular(int x, int y, int r) {
  return dist(mouseX, mouseY, x, y) <= r / 2;
}

void boton(int x, int y, int d) {
  noStroke();
  if (zonaCircular(x, y, d)) {
    fill(#FFAAFA);
  } else {
    fill(#FF74F8);
  }
  ellipse(x, y, d, d);
  if (zonaCircular(x, y, d)) {
    fill(#FFD6FD);
  } else {
    fill(#FF31F5);
  }
  triangle(510, y - d / 4, 510, y - d / 4 + d / 2, 560, y);
}

void boton2(int x, int y, int d, char l) {
  noStroke();
  if (zonaCircular(x, y, d)) {
    fill(0, 50, 0);
  } else {
    fill(150, 210, 180);
  }
  ellipse(x, y, d, d);
  if (zonaCircular(x, y, d)) {
    fill(250);
  } else {
    fill(0);
  }
  textSize(d / 2);
  text(l, x, y - 5);
}
void boton3(int x, int y, int d) {
  noStroke();
  if (zonaCircular(x, y, d)) {
    fill(#AA379F);
  } else {
    fill(#83407D);
  }
  ellipse(x, y, d, d);
  if (zonaCircular(x, y, d)) {
    fill(#FFD6FD);
  } else {
    fill(#FF31F5);
  }
}
void botonesFinales() {
  boton2(150, 555, 70, 'R');
  boton2(450, 555, 70, 'C');
}

void botonCuadrado() {
  textSize(40);
  if (mouseX > 210 && mouseX < 210 + 180 && mouseY > 270 && mouseY < 270 + 50) {
    fill(25, 100, 25);
  } else {
    fill(50, 150, 50);
  }
  rect(210, 270, 180, 50);
  if (mouseX > 210 && mouseX < 210 + 180 && mouseY > 270 && mouseY < 270 + 50) {
    fill(150);
  } else {
    fill(200);
  }
  text("REINICIAR", 300, 290);
}

void pantalla(int i, int x, int y, int anc, int alt) {
  image(fondo[1 + i], 0, 0);
  fill(0);
  text(textos[i], x, y, anc, alt);
}
