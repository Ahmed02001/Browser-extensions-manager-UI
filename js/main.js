const modeIcon = document.getElementById("mode-icon");

window.addEventListener("load", function () {
  modeIcon.addEventListener("click", function (e) {
    if (this.src.includes("icon-sun.svg")) {
      this.src = "../assets/images/icon-moon.svg";
      document.body.classList.add("dark-mode");
    } else {
      this.src = "../assets/images/icon-sun.svg";
      document.body.classList.remove("dark-mode");

      console.log(this);
    }
  });
}); //end of load
