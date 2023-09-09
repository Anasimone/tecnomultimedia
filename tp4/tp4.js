//ANA SIMONE - COMISION 3
//DAVID BEDOIAN
// TP4 INTRODUCCION A P5.JS
//VIDEO YT: https://youtu.be/cOJ1vIjE8QU?si=puDPelW8THVY2cHE


// Estados del juego
let ESTADO_INICIO = 0;
let ESTADO_JUEGO = 1;
let ESTADO_FIN_GANAR = 2;
let ESTADO_FIN_PERDER = 3;
let ESTADO_CREDITOS = 4;

// Variables del juego
let estado = ESTADO_INICIO;
let tablaIzquierdaX, tablaIzquierdaY;
let tablaDerechaX, tablaDerechaY;
let tablaAncho = 20;
let tablaAlto = 100;
let tablaIzquierdaVelocidadY = 0;
let tablaDerechaVelocidadY = 0;
let pelotaX, pelotaY;
let pelotaRadio = 20;
let pelotaVelocidadX, pelotaVelocidadY;
let pelotaColisionoTabla = false;
let pelotaColisionoBorde = false;
let puntajeIzquierda = 0;
let puntajeDerecha = 0;
let juegoTerminado = false;
let textoGanador = "";
let textoPerdedor = "";
let textoCreditosY = -100;
let grosorLinea = 6;
let fondoinicio;

function preload() {
  // Carga las imágenes
  fondoinicio = loadImage('fondoinicio.png');
}

function setup() {
  createCanvas(600, 400);
  reiniciarJuego();
}

function draw() {
  background(0);

  if (estado == ESTADO_INICIO) {
    // Pantalla de inicio
    image(fondoinicio, 0, 0);
  } else if (estado == ESTADO_JUEGO) {
    // Dibujar líneas en el centro
    stroke(255);
    strokeWeight(grosorLinea);
    for (let i = grosorLinea / 2; i < height; i += 40) {
      line(width / 2, i, width / 2, i + 20);
    }

    // Dibujar tablas
    noStroke();
    fill(0, 0, 255);
    rect(tablaIzquierdaX, tablaIzquierdaY, tablaAncho, tablaAlto);
    fill(211, 0, 162);
    rect(tablaDerechaX, tablaDerechaY, tablaAncho, tablaAlto);

    // Mover tablas izquierda
    tablaIzquierdaY += tablaIzquierdaVelocidadY;
    tablaIzquierdaY = constrain(tablaIzquierdaY, 0, height - tablaAlto);

    // Mover tabla derecha (computadora)
    if (pelotaY > tablaDerechaY + tablaAlto / 2) {
      tablaDerechaY += 5;
    } else if (pelotaY < tablaDerechaY + tablaAlto / 2) {
      tablaDerechaY -= 5;
    }
    tablaDerechaY = constrain(tablaDerechaY, 0, height - tablaAlto);

    // Dibujar pelota
    fill(255);
    ellipse(pelotaX, pelotaY, pelotaRadio * 2);

    // Actualizar pelota
    pelotaX += pelotaVelocidadX;
    pelotaY += pelotaVelocidadY;

    // Verificar colisiones
    if (
      pelotaX - pelotaRadio < tablaIzquierdaX + tablaAncho &&
      pelotaX + pelotaRadio > tablaIzquierdaX &&
      pelotaY > tablaIzquierdaY &&
      pelotaY < tablaIzquierdaY + tablaAlto
    ) {
      pelotaVelocidadX *= -1;
      pelotaColisionoTabla = true;
    } else {
      pelotaColisionoTabla = false;
    }

    if (
      pelotaX - pelotaRadio < tablaDerechaX + tablaAncho &&
      pelotaX + pelotaRadio > tablaDerechaX &&
      pelotaY > tablaDerechaY &&
      pelotaY < tablaDerechaY + tablaAlto
    ) {
      pelotaVelocidadX *= -1;
      pelotaColisionoTabla = true;
    } else {
      pelotaColisionoTabla = false;
    }

    // Verificar bordes
    if (pelotaY - pelotaRadio < 0 || pelotaY + pelotaRadio > height) {
      pelotaVelocidadY *= -1;
      pelotaColisionoBorde = true;
    } else {
      pelotaColisionoBorde = false;
    }

    // Actualizar puntaje
    if (pelotaX - pelotaRadio < 0) {
      puntajeDerecha++;
      reiniciarPelota();
    } else if (pelotaX + pelotaRadio > width) {
      puntajeIzquierda++;
      reiniciarPelota();
    }

    // Aumentar la velocidad de la pelota al colisionar
    if (pelotaColisionoTabla || pelotaColisionoBorde) {
      pelotaVelocidadX += pelotaVelocidadX > 0 ? 0.5 : -0.5;
      pelotaVelocidadY += pelotaVelocidadY > 0 ? 0.5 : -0.5;
    }

    // Mostrar puntajes
    fill(255);
    textSize(35);
    text(puntajeIzquierda, width / 4, 50); // Puntaje izquierda
    text(puntajeDerecha, (3 * width) / 4, 50); // Puntaje derecha

    // Determinar ganador
    if (puntajeIzquierda >= 3) {
      textAlign(CENTER);
      textFont("Press Start 2P");
      strokeWeight(2);
      textSize(40);
      fill(0, 0, 255);
      textoGanador = "¡Ganaste!";
      estado = ESTADO_FIN_GANAR;
    } else if (puntajeDerecha >= 3) {
      textAlign(CENTER);
      textSize(40);
      textFont("Press Start 2P");
      strokeWeight(2);
      fill(211, 0, 162);
      textoPerdedor = "¡La computadora gana!";
      estado = ESTADO_FIN_PERDER;
    }
  } else if (estado == ESTADO_FIN_GANAR || estado == ESTADO_FIN_PERDER) {
    // Pantalla de fin de juego
    if (estado == ESTADO_FIN_GANAR) {
      fill(0, 0, 255);
      text(textoGanador, width / 2, height / 2 - 50);
    } else {
      fill(211, 0, 162);
      text(textoPerdedor, width / 2, height / 2 - 50);
    }
    
    // Botón circular para ir a los créditos
    fill(90,90,90);
    ellipse(width / 2, height / 2 + 70, 70);
    fill(255);
    textSize(12);
    text("cre", width / 2, height / 2 + 80);
  } else if (estado == ESTADO_CREDITOS) {
    // Pantalla de créditos con texto en movimiento
    textAlign(CENTER); // Centrar horizontalmente
    
    
    textSize(12);
    fill(255);
    text("Presiona 'R' para reiniciar :)", width / 2, textoCreditosY + 50);


    textSize(14); 
    fill(255);
    text("Profesor: David Bedoian", width / 2, textoCreditosY + 150);

  
    textSize(10);
    fill(255);
    text("TP4 - Simone Ana - Tecno multimedia", width / 2, textoCreditosY + 300);

    // Aumentar la velocidad de desplazamiento del texto
    textoCreditosY += 1;
    if (textoCreditosY > height + 20) {
      textoCreditosY = -500;
    }
  }
}

function mousePressed() {
  if (
    (estado == ESTADO_FIN_GANAR || estado == ESTADO_FIN_PERDER) &&
    dist(mouseX, mouseY, width / 2, height / 2 + 50) < 25
  ) {
    estado = ESTADO_CREDITOS;
    textoCreditosY = -100; // Reiniciar la posición del texto de créditos
  }
}

function keyPressed() {
  if (estado == ESTADO_JUEGO) {
    if (keyCode === UP_ARROW) {
      tablaIzquierdaVelocidadY = -5;
    } else if (keyCode === DOWN_ARROW) {
      tablaIzquierdaVelocidadY = 5;
    }
  }

  if (estado == ESTADO_INICIO && keyCode == 32) {
    estado = ESTADO_JUEGO;
  } else if (estado == ESTADO_CREDITOS && keyCode == 82) {
    reiniciarJuego();
    estado = ESTADO_INICIO;
  }
}

function keyReleased() {
  if (estado == ESTADO_JUEGO) {
    if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
      tablaIzquierdaVelocidadY = 0;
    }
  }
}

function reiniciarJuego() {
  puntajeIzquierda = 0;
  puntajeDerecha = 0;
  juegoTerminado = false;
  textoGanador = "";
  textoPerdedor = "";
  tablaIzquierdaX = 20;
  tablaIzquierdaY = height / 2 - tablaAlto / 2;
  tablaDerechaX = width - 30;
  tablaDerechaY = height / 2 - tablaAlto / 2;
  reiniciarPelota();
}

function reiniciarPelota() {
  pelotaX = width / 2;
  pelotaY = height / 2;
  pelotaVelocidadX = random(3, 5) * (random() > 0.5 ? 1 : -1);
  pelotaVelocidadY = random(2, 4) * (random() > 0.5 ? 1 : -1);
  pelotaColisionoTabla = false;
  pelotaColisionoBorde = false;
}
