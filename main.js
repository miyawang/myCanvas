var yyy = document.getElementById("xxx");
// 控制画布的宽高
setCanvasSize();
window.onresize = function() {
  setCanvasSize();
};
function setCanvasSize() {
  var pageWidth = document.documentElement.clientWidth;
  var pageHeight = document.documentElement.clientHeight;
  // yyy.width = pageWidth;
  // yyy.height = pageHeight;
}

// 监听
var context = yyy.getContext("2d");

function drawCircle(x, y, radius) {
  context.beginPath();
  context.fillStyle = "red";
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}
var using = false;
var lastPoint = { x: undefined, y: undefined };

yyy.onmousedown = function(aaa) {
  var x = aaa.clientX;
  var y = aaa.clientY;
  if (eraserEnabled) {
    using = true;
    context.clearRect(x-5, y-5, 10, 10);
  } else {
    using = true;

    lastPoint = { x: x, y: y };
  }

  // console.log(lastPoint);
  // drawCircle(x, y, 2.5);
};
yyy.onmousemove = function(aaa) {
  var x = aaa.clientX;
  var y = aaa.clientY;
  if (eraserEnabled) {
    if (using) {
      context.clearRect(x-5, y-5, 10, 10);
    }
  } else {
    if (using) {
      var newPoint = { x: x, y: y };
      // drawCircle(x, y, 2.5);
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
      lastPoint = newPoint;
    }
  }
};
yyy.onmouseup = function(aaa) {
  using = false;
};

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "red";
  context.moveTo(x1, y1);
  context.lineWidth = 5;
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
// context.fillStyle = "pink";
// context.fillRect(0, 0, 100, 100);
// 填充一个矩形
// context.strokeStyle = "blue";
// context.strokeRect(0, 0, 100, 100);
// 绘制一个矩形
// context.fillStyle = 'red'
// context.beginPath();
// context.moveTo(240,240);
// context.lineTo(300,240);
// context.lineTo(300,300);
// context.fill()

// 做个橡皮擦

var eraserEnabled = false;
eraser.onclick = function() {
  eraserEnabled = !eraserEnabled;
};
