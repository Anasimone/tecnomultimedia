class Juego {
  constructor(f, p) {
    this.player = new Player();
    this.obstaculos = [];
    this.lives = 3;
    this.startTime = 0;
    this.gameDuration = 30;
    this.gameStarted = true;
    this.speed = 6;
    this.obstacleSpeed = this.speed;
    this.minObstacleSpacing = 900;
    this.maxObstacleSpacing = 1300;
    this.nextObstacleTime = 0;
    this.speedIncreased = false;
    this.gameEnded = false;
    this.instrucciones = true;
    this.speedIncreaseTime = 0;
    this.fuente = f;
    this.p = p;
 
  }

  mostrar() {
 console.log()
    //text("x:" + mouseX + ",y:" + mouseY, mouseX, mouseY);
    image (this.p[20], 0, 0, width, height);
    textAlign(LEFT, CENTER);
    let currentTime = (millis() - this.startTime) / 1000;
    let timeLeft = this.gameDuration - currentTime;
    textSize(32);
    fill(255);
    text(`Time: ${timeLeft.toFixed(1)}`, 10, 30);
    text(`Lives: ${this.lives}`, 10, 70);
    this.player.mostrar(patroclo);
    this.player.actualizar();


    if (this.gameEnded) {
      
      return;
    }
    if (currentTime >= 5 && currentTime < 10) {
      this.speed = 7;
    } else if (currentTime >= 10 && currentTime < 15) {
      this.speed = 8;
    } else if (currentTime >= 15 && currentTime < 20) {
      this.speed = 9;
    } else if (currentTime >= 20 && currentTime < 25) {
      this.speed = 10;
    } else if (currentTime >= 25) {
      this.speed = 11;
    }

    if (this.obstacleSpeed !== this.speed) {
      this.obstacleSpeed = this.speed;
      this.speedIncreased = true;
      for (let obstaculo of this.obstaculos) {
        obstaculo.actualizarVelocidad(this.obstacleSpeed);
      }
    }

    if (millis() >= this.nextObstacleTime) {
      this.obstaculos.push(new Obstaculo(this.obstacleSpeed));
      this.nextObstacleTime = millis() + Math.floor(random(this.minObstacleSpacing, this.maxObstacleSpacing));
    }

    for (let i = this.obstaculos.length - 1; i >= 0; i--) {
      if (this.obstaculos[i]) {
        this.obstaculos[i].mostrar(flecha);
        this.obstaculos[i].actualizar();

        if (this.player.colision(this.obstaculos[i])) {
          this.lives--;
          this.obstaculos.splice(i, 1);
        }

        if (this.obstaculos[i] && this.obstaculos[i].fueraDePantalla()) {
          this.obstaculos.splice(i, 1);
        }
      }
    }
}
  gano() {
    let currentTime = (millis() - this.startTime) / 1000;
    let timeLeft = this.gameDuration - currentTime;

    if (timeLeft <= 0) {
      this.gameEnded = true;
    }
  }

  perdio() {
    if (this.lives <= 0) {
      this.gameEnded = true;
    }
  }
  
   actualizar() {
  if (this.estado === 1 && !this.gameStarted) {
    this.gameStarted = true;
  }
}

    reiniciarJuego() {
      this.gameEnded = false;
      this.lives = 3;
      this.speed = 6;
      this.obstacleSpeed = 6;
      this.startTime = 0;
      this.nextObstacleTime = 0;
      this.speedIncreased = false;
      this.obstaculos = [];
      this.estado = 1;
      this.gameStarted = true;
      this.player.velocity = 0;
      this.player.x = 100;
      this.player.y = height - this.player.height;
    }

    teclado() {
      if (keyCode === 32) {
        this.player.saltar();
      }
    }
  }
