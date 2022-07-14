/*
  Cara merubah value dari id attribute

*/

const dicoding = document.getElementById('links');
// kemudian masukan untuk perubahan text
dicoding.innerText = "Perubahan text";

// memasukan perubahan pada tag html
dicoding.innerHTML = '<i>Belajar Programming di Dicoding</i>';

// cara mengubah styling document css
const buttons = document.getElementsByClassName('button');
for(const button of buttons){
  console.log(button.children[0]);
}

// TODO setelah memasukan ke dalam list jadi bisa merubah keseluruhan list css
// TODO kode pada css di rubah menjadi camelCase karena mengikuti standar, font-size menjadi fontSize
for(const button of buttons){
  button.children[0].style.borderRadius = '10px';
}