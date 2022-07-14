/*
    Methode yang digunakan pada console
    .log()   Menampilkan pesan secara umum ke console browser.
    .info()   Menampilkan pesan berisikan informasi penting ke console browser
    .warn()   Menampilkan pesan berisikan informasi  dalam bentuk peringatan ke console browser
    .error()   Menampilkan pesan berisikan informasi dalam bentuk error ke console browser

hati hati mendefinisikan method alert karena
alert() bersifat global
    */


function alert(nama){
    console.log('hati hari ' + nama);
}

alert('Coffe');

window.alert('Ini juga sama');