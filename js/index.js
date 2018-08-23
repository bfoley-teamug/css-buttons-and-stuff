var button = document.querySelector('.button');

button.addEventListener('mousemove', function (e) {
  var sensitivity = 30;var
  offsetX = e.offsetX,offsetY = e.offsetY;var _e$target =
  e.target,offsetHeight = _e$target.offsetHeight,offsetWidth = _e$target.offsetWidth;

  var y = -(offsetX / offsetWidth - 0.5) * sensitivity;
  var x = (offsetY / offsetHeight - 0.5) * sensitivity;

  button.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(0) scale(1.2)';
});

button.addEventListener('mouseout', function () {
  button.style.transform = "scale(1.0) rotateX(0) rotateY(0)";
});