// secara asynchronous
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}
 
 
orderCoffee(coffee => {
    console.log(coffee);
});

// sebelum asynchronous
/*
const orderCoffee = () => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        // tambahkan perintah callback function
    }, 3000);
    return coffee;
}
//  rubah menjadi perintah panggil khusus callback function
const coffee = orderCoffee();
console.log(coffee);
*/