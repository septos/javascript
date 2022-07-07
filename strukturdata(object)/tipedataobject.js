const user = {no1:'value1', no2:'value2', no3:'value3'};

// key jangan menggunakan tanda petik kecuali nama key ada spasi
// misal 'Hair color':'Blue'

const nama = {
	firstName: 'Septo',   
	lastName: 'Suharyanto',   
	age: 19,   
	isJedi: true,
}


console.log('Halo, nama saya ' + nama.firstName + ' ' + nama.lastName);

// berikut cara merubah nilai value

console.log('Berikut cara merubah nilai value');
console.log('nama.firstName = \'Mumut\' atau menggunakan nama[\'firstName\'] = \'Sepia\'');

nama.firstName = 'Delon';
console.log(nama.firstName);
nama['age'] = 28;
console.log(nama.age);
