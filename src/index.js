import "./less/index.less";

// keydown event

let time = 0;
setInterval(function () {
  time += 1000;
  if (time === 20000) {
    alert("Hala buradaysan bir tuşa bas!!!");
  }
}, 1000);
document.addEventListener("keydown", () => (time = 0));

// sayfada 20 saniye hiçbir tuşa basmadan durulursa çalışır bir tuşa basıldığında sıfırlanır. Çalıştığında alert içerisinde bir string verir.

//wheel event

let image = document.querySelectorAll("img");
image.forEach(function (img) {
  img.addEventListener(
    "wheel",
    function (event) {
      if (event.deltaY < 0) {
        img.style.transform = "scale(2)";
      } else {
        img.style.transform = "scale(1)";
      }
    },
    true
  );
});

// resilere zoom yapar.

// load event

window.addEventListener("load", function () {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "";
  }, 1000);
});

// sayfa yüklendiğinde 2 saniyeliğine arka plan rengini kırmızı yapar

//mouseover event

let paragraf = document.querySelectorAll("p");
paragraf.forEach(function (p) {
  p.addEventListener("mouseover", function () {
    p.style.fontSize = "2em";
  });
  p.addEventListener("mouseout", function () {
    p.style.fontSize = "";
  });
});

// paragraf elementleri üzerine gelindiğinde büyütür üzerinden çekilindiğinde normal haline geri döner

//focus event
//resize event
//scroll event
//select event

//dblclick event

document.addEventListener("dblclick", () => {
  document.body.style.animation = "dblClick 5s infinite";
  setTimeout(() => {
    document.body.style.animation = "";
  }, 5000);
});

// arka planın 5 saniye sarı olmasını sağlar

//drag / drop event
