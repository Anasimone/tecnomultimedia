class Pantalla {
  constructor() {
    this.estado = 'menu'; // Estado inicial
  }

  mostrar() {
    // Lógica para mostrar según el estado actual
    switch (this.estado) {
    case 'menu':
      this.mostrarMenu();
      break;
    case 'juego':
      this.mostrarJuego();
      break;
    case 'victoria':
      this.mostrarVictoria();
      break;
    case 'derrota':
      this.mostrarDerrota();
      break;
    }
  }

  mostrarMenu() {
    // Lógica para mostrar el menú
     image(imgInicio, 0, 0, width, height);
   
  }

  mostrarJuego() {
    juego.mostrar();
    juego.actualizar();
  }

  mostrarVictoria() {
    background(0, 200, 0); 
    fill(0);
    textSize(32);
    text('Te salvaste del lobo, bien crack!', width/8, height / 2 - 50);
    textSize(24);
    text('Presiona "M" para volver al Menú', 120,  300);
  }
  
  mostrarDerrota() {
    background(255, 0, 0); 
    fill(255);
    textSize(32);
    text('El lobo te gano :(', width/3.5, height / 2 - 50);
    textSize(24);
    text('Presiona "M" para volver al Menú', 120 , 300);
  }

  keyPressed() {
   
    switch (this.estado) {
    case 'menu':
      this.teclaMenu();
      break;
    case 'juego':
      this.teclaJuego();
      break;
    case 'victoria':
    case 'derrota':
      this.teclaFinJuego();
      break;
    }
  }

  teclaMenu() {
    // Lógica para manejar eventos de teclado en el menú
    if (key === 'J' || key === 'j') {
      juego.reiniciar();
      this.estado = 'juego';
    }
  }

  teclaFinJuego() {
    // Lógica para manejar eventos de teclado después de ganar o perder
    if (key === 'M' || key === 'm') {
      this.estado = 'menu';
    }
  }
}
