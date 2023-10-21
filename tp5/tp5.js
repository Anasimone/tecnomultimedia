//Ana Simone - Comision 3
//Prof: David Bedoian 
//TP5 - MiniJuego con POO orientado a la Aventura Gráfica
// YT LINK: 
let juego;
let imgJugador, imgEnemigo, imgObstaculo, imgFondo, imgInicio;
let pantalla;

function preload() {
  // Carga las imágenes
  imgJugador = loadImage('jugador.PNG');
  imgEnemigo = loadImage('lobo.PNG');
  imgObstaculo = loadImage('viento.PNG');
  imgFondo = loadImage('fondo.jpg.jpg');
imgInicio = loadImage('inicio.png');
}

function setup() {
  createCanvas(600, 400);
  juego = new Juego();
  pantalla = new Pantalla();
}

function draw() {
  // Mostrar fondo
  image(imgFondo, 0, 0, width, height);

  // Mostrar según el estado actual
  pantalla.mostrar();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
  juego.jugador.saltar(); }
  // Manejar eventos de teclado según el estado actual
  pantalla.keyPressed();
}
