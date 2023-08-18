var canv = document.getElementById("mycanva");
document.getElementById("line").addEventListener("click", function () {
  var ranx = Math.floor(Math.random() * 500) + 1;

  var rany = Math.floor(Math.random() * 500) + 1;
  var ranx2 = Math.floor(Math.random() * 500) + 1;
  var rany2 = Math.floor(Math.random() * 500) + 1;

  var cont = canv.getContext("2d");
  cont.moveTo(ranx, rany);
  cont.lineTo(ranx2, rany2);
  cont.stroke();

  canv.appendChild(cont);
});

//

document.getElementById("rect").addEventListener("click", function () {
  var ranx = Math.floor(Math.random() * 500) + 1;
  var rany = Math.floor(Math.random() * 500) + 1;
  var cont = canv.getContext("2d");
  cont.fillStyle = "orange";
  cont.fillRect(ranx, rany, 150, 75);

  canv.appendChild(cont);
});

//
document.getElementById("circle").addEventListener("click", function () {
  var ranx = Math.floor(Math.random() * 500) + 1;
  var rany = Math.floor(Math.random() * 500) + 1;
  var cont = canv.getContext("2d");
  cont.beginPath();
  cont.arc(ranx, rany, 40, 0, 2 * Math.PI);
  cont.fillStyle = "green";
  cont.fill();
  cont.stroke();

  canv.appendChild(cont);
});

// -------------------------
var firs = true;
document.getElementById("linwe").addEventListener("click", fun);
function fun() {
  var cont = canv.getContext("2d");
  var rect;
  canv.addEventListener("click", function (event) {
    if (firs) {
      rect = canv.getBoundingClientRect();
      var mouseX = event.clientX - rect.left;
      var mouseY = event.clientY - rect.top;
      cont.moveTo(Math.floor(mouseX), Math.floor(mouseY));
      firs = false;
    } else {
      var mouseX2 = event.clientX - rect.left;
      var mouseY2 = event.clientY - rect.top;
      cont.lineTo(Math.floor(mouseX2), Math.floor(mouseY2));
      cont.stroke();
      console.log(cont);
      canv.appendChild(cont);
      firs = true;
    }
  });
}
