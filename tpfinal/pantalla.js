class Pantalla {
  constructor(p) {
    this.p = p;
    this.c = 20;
    this.indexP = 0;
    this.x1 = 0;
    this.y1 = 0;
    this.ancho1 =0;
    this.alto1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.ancho2 = 0;
    this.alto2 = 0;
    this.width = width;
    this.height = height;
    this.textos = new Array(2);
    this.textos[0] = new Array(this.c);
    this.textos[1] = new Array(this.c);
    for (let i = 0; i < this.c; i++) {
      this.textos[0][i] = "";
      this.textos[1][i] = "";
    }
    this.textos[0][0] = "";
    this.textos[1][0] = "";
    this.textos[0][1] = "Tiana, una joven camarera de Nueva Orleans";
    this.textos[1][1] = "Es invitada a un baile de disfraces por su mejor amiga, Charlotte";
    this.textos[0][2] = "Tiana va al baile y esa noche conoce a Naveen, un príncipe que fue convertido en sapo por el hombre sombras.";
    this.textos[1][2] = "Él le pide que le dé un beso, porque si besa a una princesa, se romperá el hechizo";
    this.textos[0][3] = "Tiana lo besa, pero en vez de romper el hechizo, ella también se convierte en rana.";
    this.textos[1][3] = "Ambos se embarcan en una aventura en busca de Mama Odie, una hechicera que puede ayudarlos a revertirlo";
    this.textos[0][4] = "Tiana decide no besarlo y regresa al baile con su mejor amiga, Charlotte";
    this.textos[1][4] = "Decide concentrarse por completo en su sueño de abrir su propio restaurante";
    this.textos[0][5] = "Un día descubre un libro antiguo en la biblioteca de su ciudad que contiene recetas secretas de la realeza. Fascinada por la oportunidad de compartir la historia culinaria,";
    this.textos[1][5] = "Decide escribir su propio y publicarlo. El libro se convierte en un éxito y Tiana se convierte en una famosa autora de libros de cocina";
    this.textos[0][6] = "En el transcurso del viaje, se encuentran con Louis el cocodrilo y Ray la luciérnaga, quienes van a ayudarlos a encontrar a Mama Odie";
    this.textos[1][6] = "Pero lo que no se esperaban es que el señor sombras mandara a sus amigos del más allá a buscarlos";
    this.textos[0][7] = "Tiana y Naveen finalmente llegan con Mama Odie, quien les enseña lo que es el verdadero amor y que la importancia de los deseos desinteresados son la clave para romper el hechizo";
    this.textos[1][7] = "Junto con canciones y bailes, creen entender lo que necesitan";
    this.textos[0][8] = "Tiana y Naveen son capturados por el señor sombras";
    this.textos[1][8] = "Pero aún tenían esperanzas de que sus amigos los ayudarían";
    this.textos[0][9] = "Ray y Louis consiguen la ayuda de todos los amigos del bosque";
    this.textos[1][9] = "y se preparan para liberar a la parejita";
    this.textos[0][10] = "Naveen se da cuenta de que está enamorado de Tiana, por lo que decide declararse";
    this.textos[1][10] = "Se arma de valor y le prepara una cena romántica para confesarse y esperar respuesta";
    this.textos[0][11] = "El señor sombras se da cuenta de lo que intentan hacer, por lo que comienza una batalla";
    this.textos[1][11] = "Llama a sus amigos del más allá y prepara toda una tropa para derrotarlos";
    this.textos[0][12] = "Al poder liberarlos, la pareja se une a sus amigos para terminar con el señor sombras";
    this.textos[1][12] = "Y con la ayuda de Mama Odie y todas las criaturas del bosque";
    this.textos[0][13] = "Tiana le dice que también lo ama y que no le importa cómo luce";
    this.textos[1][13] = "Quería estar junto a él toda su vida";
    this.textos[0][14] = "Tiana lo rechaza porque no quiere quedar como rana toda su vida";
    this.textos[1][14] = "Esto hace que Naveen se sienta muy triste, por lo que se distancia de Tiana y decide seguir siendo un sapo solo";
    this.textos[0][15] = "Terminan con el hechizo de una vez por todas y deciden casarse en el bosque con todos sus amigos";
    this.textos[1][15] = "Al besarse, se rompe el hechizo de sapos y ranas y viven felices por siempre";
    this.textos[0][16] = "Por lo que deciden vivir junto a sus amigos del bosque y ser felices";
    this.textos[1][16] = "Sin importar que van a ser animales por todo su vida, al menos estaban juntos";
    this.textos[0][17] = "Por suerte, Mama Odie los ayuda, y con el poder del amor y la amistad, luchan fuertemente contra el señor sombras";
    this.textos[1][17] = "Era una batalla muy dura, pero no estaban asustados";
    this.textos[0][18] = "Después de todo, logran vencer al señor sombras y liberarse del mal";
    this.textos[1][18] = "Para festejar, se casan en una gran ceremonia, felices y juntos...";
    this.textos[0][19] = "Creado por Simone Ana y Villarreal Candelaria";
    this.textos[1][19] = "Profe: David Bedoian";
    this.textos[0][20] = "Ayuda a Tiana y Naveen a escapar de las sombras y llegar con Mama Odie.";
    this.textos[1][20] = "Deberas presionar ESPACIO para saltar. Cuentas con 3 vidas y tienes que sobrevivir 30 segundos para llegar a destino";
  }

  mostrar(indexP, x1, y1, ancho1, alto1, x2, y2, ancho2, alto2) {
    this.indexP = indexP;
    this.x1 = x1;
    this.y1 = y1;
    this.ancho1 = ancho1;
    this.alto1 = alto1;
    this.x2 = x2;
    this.y2 = y2;
    this.ancho2 = ancho2;
    this.alto2 = alto2;
    noStroke();
    image (this.p[indexP], 0, 0, this.width, this.height);
    fill(255, 100);
    rect(this.x1, this.y1 - 5, this.ancho1, this.alto1);
    rect(this.x2, this.y2 - 5, this.ancho2, this.alto2);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(15);
    text(this.textos[0][this.indexP], this.x1, this.y1 - 5, this.ancho1, this.alto1);
    text(this.textos[1][this.indexP], this.x2, this.y2 - 5, this.ancho2, this.alto2);
  }
}
