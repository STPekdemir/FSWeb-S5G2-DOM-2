import "./less/index.less";

// keydown event
let time = 0;
setInterval(function () {
  time += 1000;
  if (time === 10000) {
    alert("Hala buradaysan bir tuşa bas!!!");
  }
}, 1000);
document.addEventListener("keydown", () => (time = 0));
// sayfada 10 saniye hiçbir tuşa basmadan durulursa çalışır bir tuşa basıldığında sıfırlanır. Çalıştığında alert içerisinde bir string verir.

//wheel event
let image = document.querySelectorAll("img");
image.forEach(function (img) {
  img.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
      img.style.transform = "scale(2)";
    } else {
      img.style.transform = "scale(1)";
    }
  });
});
// resilere zoom yapar.
