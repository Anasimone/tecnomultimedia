let aventura;
let pantallas = [];
let fuente;
let patroclo = [];
let flecha;
let sapoImage;
function preload() {
  flecha = loadImage('flecha.png');
  sapoImage = loadImage('sapo.png');   
  for ( let i = 0; i < 21; i++ ) {
    pantallas[i] = loadImage("pantalla"+ i +".png");
  }
}

function setup() {
  createCanvas(600, 600);
  aventura = new Aventura();
}

function draw() {
  aventura.mostrar();
  //text("x:"+ mouseX + ",y:"+ mouseY, mouseX, mouseY);
}

function mousePressed() {
  aventura.interactuar();
}

function keyPressed() {
  aventura.teclado();
}
