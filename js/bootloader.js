var lines = document.querySelectorAll('.line');
var delay = 150;

let delayUsed = 0;
let showLineSet = false;


function showLines() {
  for (var i = 0; i < lines.length; i++) {
    delayUsed += Math.floor(Math.random() * 150) + 10;
    (function(index) {
      setTimeout(function() {
        console.log(delayUsed);
        lines[index].classList.add('show');
        lines[index].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }, delayUsed);
    })(i);

  }
  setTimeout(function() {
    window.open("./game.html", "_self");
  }, delayUsed + 1000);
}
showLines();
