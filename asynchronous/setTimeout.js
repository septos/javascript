/*
synchronous  = menjalankan barisan program code secara berurutan
asynchronous = menjalankan barisan program sekaligus tanpa antri sesuai urutan
*/


console.log("Selamat datang!");
setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?");