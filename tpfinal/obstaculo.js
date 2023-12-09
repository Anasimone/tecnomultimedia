class Obstaculo {
  constructor(speed) {
    this.width = 100;
    this.height = 150;
    this.x = width;
    this.y = height-this.height; 
    this.speed = speed;
  }

  mostrar(foto) {
    fill(255, 0 );
    rect(this.x, this.y, this.width, this.height);
    image(foto, this.x, this.y, this.width, this.height);
  }

  actualizar() {
    this.x -= this.speed;
  }

  actualizarVelocidad(nuevaVelocidad) {
    this.speed = nuevaVelocidad;
  }

  fueraDePantalla() {
    return this.x + this.width < 0;
  }
}
