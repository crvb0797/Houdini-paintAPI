class BoxPainter {
  static get inputProperties() {
    return ["--line-with", "--stroke-color"];
  }
  paint(ctx, size, props) {
    /* console.log("Hola paint api"); */
    ctx.lineWidth = props.get("--line-with");
    ctx.strokeStyle = props.get("--stroke-color");

    /* Dibuja una linea desde arriba a la izquierda, hasta abajo a la derecha */
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(size.width, size.height);
    ctx.stroke();

    /* Dibuja una linea desde arriba a la derecha, hasta abajo a la izquierda */
    ctx.beginPath();
    ctx.moveTo(size.width, 0);
    ctx.lineTo(0, size.height);
    ctx.stroke();
  }
}

registerPaint("boxPainter", BoxPainter);
