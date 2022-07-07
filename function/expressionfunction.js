/* expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.

Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak bernama juga dikenal dengan anonymous function. Berikut ini merupakan contoh penulisan expression function:
*/

const greeting = function(name, language) {
  if(language === 'English') {
    return 'Good Morning ' + name + '!';
  } else if (language === 'French') {
    return 'Bonjour ' + name + '!';
  } else {
    return 'Selamat Pagi ' + name + '!';
  }
}

console.log(greeting('Ron', 'English'));

/* Output:
Good Morning Ron!
 */
