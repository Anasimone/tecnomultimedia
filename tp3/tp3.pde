//Ana Simone
//TP3 - Aventura Gráfica - LOS TRES CERDITOS
//Comision 3, profesor David Bedoian
// LINK A VIDEO EXPLIACION YT:https://youtu.be/0kbaxv1j-Ns
float y;
int estado = 0;
int c = 17;
PImage[] fondo = new PImage[c];
String[] textos = new String[c];
void setup(){
size (600,600);
 // Carga de imágenes
  for (int i = 0; i < c; i++ ) {
    fondo[i] = loadImage("fondo_" + i + ".jpg");
  }
  // Carga de textos
  textos[0] = "Los tres cerditos deciden hacerse una casa propia";
  textos[1] = "El primer cerdito, El más perezoso, decidió construir una casa de paja";
  textos[2] = "El segundo cerdito, un poco más inteligente, optó por una casa de madera.";
  textos[3] = "Y el tercer cerdito, el más trabajador, decidió construir una casa de ladrillos la más fuerte y segura de todas.";
  textos[4] = "El lobo feroz se acercó a la casa del primer cerdito y llamó a la puerta; el cerdito se nego, y el lobo sopló y sopló";
  textos[5] = "Como la casa no se derrumbó, el lobo se fue a buscar comida por otro lado";
  textos[6] = "La casa de paja se derrumba, pero el cerdito huye a la casa de madera de su hermano.";
  textos[7] = "El lobo feroz se acercó a la casa de madera y llamó a la puerta; los cerditos se negaron, y el lobo sopló y sopló";
  textos[8] = "La casa de madera se derrumba, pero los cerditos corrieron con su hermano mayor a la casa de ladrillo.";
  textos[9] = "El lobo se dirige a la casa de ladrillo y los cerditos se niegan a dejarlo entrar. Entonces el lobo, sopló y sopló. Pero no se derribo";
  textos[11] = "Entonces el lobo intenta subir por el techo y se desliza por la chimenea.";
  textos[12] = "Pero el tercer cerdito, fue más inteligente y dejó una olla hirviendo, entonces el lobo se quema la cola";
  textos[13] = "El lobo se rinde, y decide hacerse vegetariano y ser amigo de los cerditos";
  textos[14] = "El lobo logra entrar a la casa, y se come a los cerditos";
  y=0;
}

void draw(){
textSize(25);
  textAlign(CENTER, CENTER);

  switch(estado) {
  case 0:
    // Estado 0: Estado inicial del juego. Muestra una imagen de fondo y un botón. Al hacer clic en el botón, el estado cambia a 1.
    image(fondo[0], 0, 0);
    boton(530, 530, 100);
    break;

  case 1:
    // Estado 1: Muestra una pantalla con texto. Al hacer clic en el botón, el estado cambia a 2.
    pantalla(0, 10, 10, 580, 120);
    boton(530, 530, 100);
    break;

  case 2:
    // Estado 2: Muestra otra pantalla con texto. Al hacer clic en el botón, el estado cambia a 3.
    pantalla(1, 10, 10, 580, 120);
    boton(530, 530, 100);
    break;

  case 3:
    // Estado 3: Muestra otra pantalla con texto. Al hacer clic en el botón, el estado cambia a 4.
    pantalla(2, 10, 10, 580, 120);
    boton(530, 530, 100);
    break;

  case 4:
    // Estado 4: Muestra otra pantalla con texto. Al hacer clic en el botón, el estado cambia a 5.
    pantalla(3, 10, 10, 580, 120);
    boton(530, 530, 100);
    break;

  case 5:
    // Estado 5: Muestra una pantalla con texto y opciones. Dependiendo de la opción seleccionada (SI o NO), el estado cambia a 6 o 7 respectivamente.
    pantalla(4, 10, 0, 580, 120);
    fill(#FF52EE);
    rect(150, 390, 295, 30);
    fill(255);
    text("LA CASA SE DERRUMBA?", 300, 400);
    fill(255);
    text("SI", 200, 470);
    text("NO ", 400, 470);
    boton3(400, 550, 70);
    boton3(200, 550, 70);
    break;

  case 6:
    // Estado 6: Muestra otra pantalla con texto. Al hacer clic en el botón, el estado cambia a 8.
    pantalla(6, 10, 10, 580, 120);
    boton(530, 530, 100);
    break;

  case 7:
    // Estado 7: Muestra una pantalla final con opciones para reiniciar (R) o cerrar (C) el juego.
    textSize(25);
    pantalla(5, 10, -10, 590, 150);
    textSize(50);
    fill(0);
    rect(250, 535, 100, 50);
    fill(255);
    text("FIN", 300, 550);
    botonesFinales();
    break;

  case 8:
    // Estado 8: Muestra otra pantalla con texto. Al hacer clic en el botón, el estado cambia a 9.
    pantalla(7, 10, 10, 580, 120);
    boton(530, 530, 100);
    break;

  case 10:
    // Estado 10: Muestra una pantalla con texto y opciones. Dependiendo de la opción seleccionada (SI o NO), el estado cambia a 11 o 6 respectivamente.
    image(fondo[9], 0, 0 );
    fill(0);
    rect(55, 50, 500, 130);
    fill(255);
    text(textos[7], 80, 60, 440, 120);
    fill(#FF52EE);
    rect(150, 390, 295, 30);
    fill(255);
    text("LA CASA SE DERRUMBA?", 300, 400);
    fill(255);
    text("SI", 200, 470);
    text("NO ", 400, 470);
    boton3(400, 550, 70);
    boton3(200, 550, 70);
    break;

  case 11:
    // Estado 11: Muestra otra pantalla con texto. Al hacer clic en el botón, el estado cambia a 12.
   image(fondo[10], 0, 0 );
    fill(0);
    rect(55, 25, 500, 160);
    fill(255);
    text(textos[9], 80, 20, 440, 170);
    boton(530, 530, 100);
    break;

  case 12:
    // Estado 12: Muestra otra pantalla con texto. Al hacer clic en el botón, el estado cambia a 13.
    image(fondo[12], 0, 0 );
    fill(0);
    rect(0, 0, 450, 100);
    fill(255);
    text(textos[11], 0, 00, 420, 100);
     fill(#FF52EE);
    rect(150, 390, 295, 30);
    fill(255);
    text("ELEGI UNA OPCION", 300, 400);
    fill(255);
    text("A", 200, 470);
    text("B", 400, 470);
    boton3(400, 550, 70);
    boton3(200, 550, 70);
    break;


  case 13:
    // Estado 13: Muestra otra pantalla con texto. Al hacer clic en el botón, el estado cambia a 15.
    image(fondo[13], 0, 0 );
    fill(0);
    text(textos[12], 0, 00, 420, 100);
    boton(530, 530, 100);
    break;

  case 14:
    // Estado 14: Muestra una pantalla final con opciones para reiniciar (R) o cerrar (C) el juego.
    image(fondo[14], 0, 0 );
    fill(0);
    text(textos[13], 0, 00, 420, 100);
    textSize(50);
    fill(0);
    rect(250, 535, 100, 50);
    fill(255);
    text("FIN", 300, 550);
    botonesFinales();
    break;

  case 15:
    // Estado 15: Muestra otra pantalla final con opciones para reiniciar (R) o cerrar (C) el juego.
    image(fondo[15], 0, 0 );
    fill(0);
    text(textos[14], 0, 00, 420, 100);
    textSize(50);
    fill(0);
    rect(250, 535, 100, 50);
    fill(255);
    text("FIN", 300, 550);
    botonesFinales();
    break;

  case 16:
    // Estado 17: Muestra los créditos del juego en pantalla.
    fill(255);
    background(0);
    textSize(30);
    y = y + 2;
    text("LOS TRES CERDITOS ", 300, y);
    if (y > 150) {
      text("TP3 - Simone Ana - Tecno multimedia", 300, y - 150);
    }
    if (y > 300) {
      text("Profesor: David Bedoian", 300, y - 300);
    }
    if (y > 450) {
      text("Gracias por ver :)", 300, y - 450);
    }
    if ( y > 900) {
      botonCuadrado();
    }
    break;
  }
}

void mousePressed() {
  //INICIO
  if (estado == 0 && zonaCircular(530, 530, 100)) {
    estado = 1;
  } else if (estado == 1 && zonaCircular(530, 530, 100)) {
    estado = 2;
  } else if (estado == 2 && zonaCircular(530, 530, 100)) {
    estado = 3;
  } else if (estado == 3 && zonaCircular(530, 530, 100)) {
    estado = 4;
  } else if (estado == 4 && zonaCircular(530, 530, 100)) {
    estado = 5;
  }
  //SE DERRUMBO CASA DE PAJA
  if (estado == 5 && zonaCircular (200, 550, 70)) {
    estado = 6;
  } else if (estado == 6 && zonaCircular(530, 530, 100)) {
    estado = 10;
  }
  //NO SE DERRUMBO
  if (estado == 5 && zonaCircular (400, 550, 70)) {
    estado = 7;
  }

  //NO SE DERRUMBO
  if (estado == 10 && zonaCircular(400, 550, 70)) {
    estado = 7;
  }
  //SE DERRUMBO CASA DE MADERA
  if (estado == 10 && zonaCircular(200, 550, 70)) {
    estado = 11;
  } else if (estado == 11 && zonaCircular(530, 530, 100)) {
    estado = 12;
  }
   //A
  if (estado == 12 && zonaCircular(200, 550, 70)) {
    estado = 13;
     } else if (estado == 13 && zonaCircular(530, 530, 100)) {
    estado = 14;
  }
  //B
  if (estado == 12 && zonaCircular (400, 550, 70)) {
    estado = 15;

  }

  //A
  if (estado == 12 && zonaCircular(200, 550, 70)) {
    estado = 15;
  }
 
  //BOTONES FINALES
  if (estado == 7 && zonaCircular(450,555,70)) {
    estado = 16;
  }
  if (estado == 14 && zonaCircular(450,555,70)) {
    estado = 16;
  }
  if (estado == 15 && zonaCircular(450,555,70)) {
    estado = 16;
  }
  
  if (estado == 7 && zonaCircular(150, 555, 70)) {
    estado = 0;
  }
  if (estado == 14 && zonaCircular(150, 555, 70)) {
    estado = 0;
  }
 if (estado == 15 && zonaCircular(150, 555, 70)) {
    estado = 0;
  }
  
  if (estado == 16 && zonaCircular(300, 300, 200)){
    y = 0;
    estado = 0;
    
}
}  
