const d = document;
let x = 0, y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();


  console.log(e.keyCode);
  console.log(e.key);
  console.log(limitBall, limitStage);

  switch (e.keyCode) {
    case 37:

      e.preventDefault();
      if (limitBall.left > limitStage.left) x--;
      break;

    case 38:

      e.preventDefault();
      if (limitBall.top > limitStage.top) y--;
      break;

    case 39:

      e.preventDefault();
      if (limitBall.right < limitStage.right) x++;
      break;

    case 40:

      e.preventDefault();
      if (limitBall.bottom < limitStage.bottom) y++;

      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcuts(e) {
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(`ctrl: ${e.ctrlKey}`);
  // console.log(`alt: ${e.altKey}`);
  // console.log(`shift: ${e.shiftKey}`);
  // console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado")
  }

  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmación con el teclado")
  }

  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado una aviso con el teclado")
  }

}