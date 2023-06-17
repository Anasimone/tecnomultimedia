void resetColor() {
  for (int i = 0; i < cant; i++) {
    if (i % 2 == 0) {
      circleColor[i] = color(0);
    } else {
      circleColor[i] = color(255);
    }
  }
}

void changeRandomColor() {
  for (int i = 0; i < cant; i++) {
    circleColor[i] = color(random(255), random(255), random(255));
  }
}
