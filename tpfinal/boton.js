class Boton {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.ancho = 0;
    this.alto = 0;
    this.texto = "a";
  }

  mostrar(x, y, ancho, alto, txt) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = txt;
    if (this.estaSobre()) {
      fill(0,255,0);
      stroke(1);
      strokeWeight(3);
    } else {
      fill(0,110,0);
    }
    rect(this.x, this.y, this.ancho, this.alto);
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(25);
    text(this.texto, this.x, this.y, this.ancho, this.alto);
  }

  estaSobre() {
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }
}
