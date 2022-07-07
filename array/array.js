/*
	Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel
	Array disusun berurutan dan berindex
	Menambahkan data di dalam array menggunakan namaarray.push(argumen)
	Mengeluarkan data dari elemen terakhir di dalam array menggunakan .pop()
	Menambahkan element di awal array  .unshift()
	Mengeluarkan element di awal array  .shift()	
	Cara menghapus/delete data di dalam array  delete myArray[1]
	Menghapus element berdasarkan posisi	myArray.splice(2, 1)   // menghapus dari index 2 sebanyak 1 element
*/


let myArray = ['Cokelat', 42.5, 22, true, 'Programming']
console.log(myArray)
console.log(`berikut adalah nomer index ke 2: `,myArray[2])

myArray.push('Javascript')
console.log(myArray)
console.log()
console.log()
console.log('dibawah ini cara menambah element di awal array')
myArray.unshift('Tambah data awal')
console.log(myArray)
console.log()
console.log()
console.log('dibawah ini cara mengeluarkan element di awal array')
myArray.shift()
console.log(myArray)
