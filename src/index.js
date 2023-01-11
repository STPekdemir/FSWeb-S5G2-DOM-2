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

//resize event
window.addEventListener("resize", function () {
  if (window.innerWidth < 800) {
    document.querySelectorAll(".content-section").forEach(function (section) {
      section.style.flexDirection = "column";
    });
  } else {
    document.querySelectorAll(".content-section").forEach(function (section) {
      section.style.flexDirection = "";
    });
  }
});
//800 width altına inilirse content section flexi column olacak

//scroll event
document.addEventListener("wheel", function (event) {
  let elements = document.querySelectorAll(
    "p, h1, h2, h3, h4, h5, h6, span, a"
  );
  if (event.deltaY > 0) {
    elements.forEach((el) => (el.style.color = "orange"));
  } else {
    elements.forEach((el) => (el.style.color = "black"));
  }
});
//sayfayı aşşağı sürüklediğimizde tüm text renkleri turuncuya döner yukarı çevirdiğimizde siyaha döner

//dblclick event

document.addEventListener("dblclick", () => {
  document.body.style.animation = "dblClick 5s infinite";
  setTimeout(() => {
    document.body.style.animation = "";
  }, 5000);
});

// arka planın 5 saniye sarı olmasını sağlar

//drag / drop event
//focus event
let input = document.querySelector(".input");
setTimeout(() => {
  input.addEventListener("focus", () => {
    input.select();
  });
  input.focus();
}, 30000);
// 30 saniye sonra isminiz input elementine focus yaparak text şeklinde nput gşrmemizi sağlar (eğer keydown eventi çalıştıysa alert kapatılana kadar focus eventi gerçekleşmez)
//select  ilede eğer İsmini kısmına herhangi bir text girildiyse o texti otamatik olarak seçmemizi sağlar

//select event
const email = document.querySelector(".email");
email.addEventListener("select", function () {
  console.log("Emailinizi seçtiniz");
});
// Email inputu içerisindeki texti seçtiğinizde konsala "Emailinizi seçtiniz" yazdırır
