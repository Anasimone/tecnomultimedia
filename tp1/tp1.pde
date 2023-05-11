//TP#1 — Variables y Condicionales
//Ana simone
//Comision 3
//Profesor:David Bedoian

int cuentaFotograma;
PFont miFuente;
String estado, parrafo1;
PImage foto0, foto1, foto2, foto3, foto4;

void setup () {
  size (640, 480);
  //asignamos valor a nuestros estados,etc
  cuentaFotograma = 0;
  //Cargo mis imagenes
  foto0 = loadImage("Foto0.png");
  foto1 = loadImage("foto1.jpg");
  foto2 = loadImage("foto2.jpg");
  foto3 = loadImage("foto3.jpeg");
  foto4 = loadImage("foto4.png");


  //pantalla de inicio
  estado= "comenzar";
  frameRate(40);
}

void draw () {

  //pagina de inicio
  if (estado.equals("comenzar") ) {
    image (foto0, 0, 0, 640, 480);
    fill(#373C43);
    stroke(0);
    circle (width/4*3, height/4*3, 40);
    fill(255);
    text("Tp1 \n Instruments for Inquiring into the Wind \n and the Shaking Earth de Andrea Galvani", 250, 370);
    textSize(20);


    //Pagina 1
  } else if (estado.equals("pagina1")) {
    image (foto1, 0, 0, 640, 480);
    //fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    textSize(15);
    fill(255, map(cuentaFotograma+70, 0, 150, 0, 255));
    text("Esta obra fue creada por, Andrea Galvani \n y premiada en 2018 en la séptima edición \n del prestigioso Audemars Piguet Prize", width/2, cuentaFotograma);

    //incremento del contador:
    cuentaFotograma++;
    //cuentaFotograma = cuentaFotograma+1;
    if ( cuentaFotograma>= 500 ) {
      estado = "pagina 2";
      cuentaFotograma = 0;
    }

    //Pagina 2
  } else if (estado.equals("pagina 2")) {
    image (foto2, 0, 0, 640, 480);
    fill(0, map(cuentaFotograma+70, 0, 150, 0, 255));
    text("Consiste en una instalación desarrollada junto a científicos \n y matemáticos en la se evoca la magia de lo desconocido, \n el carácter temporal de las teorías científicas \n y los intentos de los investigadores —a los que rinde homenaje— \n por desvelar lo incierto", cuentaFotograma+20, height/4);

    cuentaFotograma++;
    if ( cuentaFotograma>= 700 ) {
      estado = "pagina 3";
      cuentaFotograma = 0;
    }
    //Pagina 3
  } else if (estado.equals("pagina 3")) {
    image (foto3, 0, 0, 640, 480);
    textAlign(200, 100);
    textSize(15);
    fill(0, map(cuentaFotograma, 0, 150, 0, 255));
    text("Ha sido expuesta en museos, instituciones y bienales de todo el mundo \n —como el Whitney Museum de Nueva York, la cuarta Bienal \n de Moscú, la Mediations Bienal de \n Poznań (Polonia), la novena Bienal \n de Nicaragua o la Aperture Foundation de Nueva York— \n ", width/5, height/5 );

    cuentaFotograma++;
    if ( cuentaFotograma>= 500 ) {
      estado = "pagina 4";
      cuentaFotograma = 0;
    }
    //Pagina 4
  } else if (estado.equals("pagina 4")) {
    image (foto4, 0, 0, 640, 480);
    textAlign(CENTER);
    textSize(15);
    text("y forma parte de importantes colecciones públicas y privadas, \n como la colección permanente del Dallas Museum of Art, \n la Deutsche Bank Collection, el Artist Pension \n Trust y la Contemporary Art Society", width/2, cuentaFotograma+20 );


    cuentaFotograma++;
    if ( cuentaFotograma>= 500 ) {
      estado = "finalgracias";
      cuentaFotograma = 0;
    }
    //Pagina 5
  } else if (estado.equals("finalgracias")) {
    background (0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(45);
    text("Gracias por ver:)", width/2, height/3, 100);
    textSize(25);
    text("--toca para reiniciar--", width/2, height/2, 160);

    //botones
    //final:
    fill(#676D74);
    circle(width/2, height/4*3, 70);
    if (mousePressed) {
      if (dist(250, 350, mouseX, mouseY)<70/2);
      {
        fill(0, 255, 0);
        circle(550, 180, 50);
        estado = "comenzar";
      }
      cuentaFotograma++;
      if ( cuentaFotograma>= 500 ) {
        estado = "comenzar";
        cuentaFotograma = 0;
      }
    }
    println(estado);
  }
}
//inicio:
void mousePressed() {
  if ( estado.equals("comenzar") ) {
    if ( dist(width/4*3, height/4*3, mouseX, mouseY) < 40/2 ) {
      estado = "pagina1";
    }
  }
}
