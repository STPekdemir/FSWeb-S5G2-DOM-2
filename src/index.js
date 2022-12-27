import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });
// keydown event
let time = 0;
setInterval(function () {
  time += 1000;
  if (time === 10000) {
    alert("Hala buradaysan bir tuşa bas!!!");
  }
}, 1000);
document.addEventListener("keydown", () => (time = 0));

// Kodlar buraya gelecek!
