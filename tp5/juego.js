class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.enemigo = new Enemigo();
    this.obstaculos = [];
    this.vidas = 3;
    this.puntuacion = 0;
    this.obstaculosGenerar = 0;
  }

  actualizar() {
    // Actualizar jugador
    this.jugador.actualizar();

    // Generar obstáculos
    if (this.obstaculosGenerar % 60 === 0) {
      this.obstaculos.push(new Obstaculo());
    }
    this.obstaculosGenerar++;

    // Actualizar obstáculos
    for (let obstaculo of this.obstaculos) {
      obstaculo.actualizar();

      // Verificar colisiones con el jugador
      if (this.jugador.colisiona(obstaculo) && !this.jugador.haSaltado()) {
        this.vidas--;

        if (this.vidas === 0) {
          this.reiniciar();
        } else {
          obstaculo.eliminar();
        }
      }

      // Verificar si el obstáculo ha salido de la pantalla
      if (obstaculo.fueraDePantalla()) {
        this.puntuacion++;
        obstaculo.eliminar();
      }
    }

    // Lanzar obstáculos desde el enemigo
    this.enemigo.lanzarObstaculo();

    // Verificar si se alcanzó el límite de puntuación para ganar
    if (this.puntuacion >= 10) {
      pantalla.estado = 'victoria';
    }
  }
  

mostrar() {
    // Mostrar jugador
    image(imgJugador, this.jugador.x, this.jugador.y, this.jugador.ancho, this.jugador.altura);

    // Mostrar enemigo
    image(imgEnemigo, this.enemigo.x, this.enemigo.y, this.enemigo.ancho, this.enemigo.altura);

    // Mostrar obstáculos
    for (let obstaculo of this.obstaculos) {
      image(imgObstaculo, obstaculo.x, obstaculo.y, obstaculo.ancho, obstaculo.altura);
    }

    // Mostrar vidas y puntuación
    
   
fill(0);
    textSize(20);
    text(`Vidas: ${this.vidas}`, 10, 30);
    text(`Puntuación: ${this.puntuacion}`, width - 150, 30);
  }

reiniciar() {
    this.jugador.reiniciar();
    this.enemigo.reiniciar();
    this.obstaculos = [];
    this.vidas = 3;
    this.puntuacion = 0;
    this.obstaculosGenerar = 0;
    pantalla.estado = 'derrota';
  }

  ganarJuego() {
    pantalla.estado = 'victoria';
    console.log('¡Has ganado!');
  }
}
