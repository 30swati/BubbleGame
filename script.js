var timer = 60;
var score = 0;
var HitRn = 0;
gsap.from(".bubble", {
   opacity: 0,
   x: -60,
   duration: 3,
})
gsap.from(".game", {
   opacity: 0,
   x: 60,
   duration: 3,
})
gsap.from("span", {
   opacity: 0,
   y: 40,
   duration: 3,
   delay: 2
})
function animateVic() {
   gsap.from(".sec2", {
      opacity: 0,
      y: 40,
      duration: 2,
      delay: 0.5
   })
}
function animateGame() {
   gsap.from(".ptop", {
      opacity: 0,
      y: -10,
      delay: 0,
      duartion: 0.5
   })
   gsap.from(".bubble", {
      opacity: 0,
      y: 30,
      duration: 0.5,
   })
   gsap.from(".heading h4", {
      opacity: 0,
      y: -10,
      duration: 1,
   })
}

document.querySelector("#startGame").addEventListener("click", () => {
   document.querySelector(".about").style.display = "none";
   document.querySelector(".context").style.display = "flex"
   document.querySelector(".main").style.display = "block"
   document.querySelector(".heading").style.display = "block"
   runTimer();
   animateGame();
})
function makeBubble() {
   var cluster = "";
   for (var i = 0; i <= 125; i++) {
      cluster += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
   }
   document.querySelector(".pbottom").innerHTML = cluster;
}
function runTimer() {
   var Timvalue = setInterval(function () {
      if (timer > 0) {
         timer--;
         document.querySelector("#timerValue").textContent = timer;
      }
      else {
         clearInterval(Timvalue);
         document.querySelector(".pbottom").innerHTML = " ";
         document.querySelector(".sec2").style.display = "flex";
         animateVic()
      }
   }, 1000);
}
function Hit() {
   HitRn = Math.floor(Math.random() * 10);
   document.querySelector("#hitValue").textContent = HitRn;
}
function increaseScore() {
   score += 5;
   document.querySelector("#scoreValue").textContent = score;
   document.querySelector(".totalScore").innerHTML = score;
}

document.querySelector(".pbottom").addEventListener("click", function (dets) {
   var clickVal = Number(dets.target.textContent);
   if (HitRn === clickVal) {
      Hit();
      increaseScore();
      makeBubble();
   }
});
function restVal() {
   timer = 60;
   score = 0;
   document.querySelector("#scoreValue").textContent = score;
}
document.querySelector(".again").addEventListener("click", () => {
   restVal();
   runTimer();
   makeBubble();
   document.querySelector(".sec2").style.display = " none";
   document.querySelector(".totalScore").innerHTML = score;
})
Hit();
makeBubble();
