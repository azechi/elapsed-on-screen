
const btn = document.getElementById("start")!;
const s = document.getElementById("seconds")!;
const ms = document.getElementById("milliseconds")!;

let base: DOMHighResTimeStamp = 0.0;
let stop: boolean = true;

function draw(now: DOMHighResTimeStamp) {
  const elapsed = Math.abs(Math.trunc(now - base)).toString().padStart(5, "0");
  s.textContent = elapsed.slice(-5, -3);
  ms.textContent = elapsed.slice(-3, -1);

  if (!stop) {
    requestAnimationFrame(draw);
  }
}

btn.addEventListener("click", () => {
  base = performance.now() + 3000.0;
  stop = !stop;
  requestAnimationFrame(draw);
});
