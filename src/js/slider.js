(function() {
  let point = document.querySelector("body > slider .point");
  var slider = document.querySelector("body > slider");
  //point.onmousedown = downHandler;
  slider.onmouseup = upHandler;
})();

function mouseOut(event) {
  console.log("moved");
}

function downHandler(event) {
  console.log("mousedown");
  console.log(event.clientX);
  //move(this, 1);
}

function upHandler(event) {
  console.log("mouseup");
  console.log(event.clientX);
  let line = document.querySelector("body > slider .line");
  let point = document.querySelector("body > slider .point");
  const width = event.clientX - line.offsetLeft;
  point.style.left = width + 'px';
  let pointValue = document.querySelector("body > slider .point div");
  pointValue.innerText = Math.round(width * 100 / line.offsetWidth);

}

function move(element, positionX) {
  let style = window.getComputedStyle(element);
  let prevLeft = Number.parseInt(style.left.replace('px', ''));
  element.style.left = prevLeft + positionX + 'px';
}
