function ucapan(nama, language){
	if(language === 'English'){
		console.log('Good Morning ' + nama + '!');
	}
	else if(language === 'Deutsch'){
		console.log('Guten Morgen ' + nama + '!')
	}
	else {
		console.log('Selamat pagi ' + nama + '!');
	}
}

ucapan('Septo', 'Deutsch');
