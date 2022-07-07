let language = 'Japanese'; // ubah nilai expression disini
let greeting = null;

switch(language){
	case 'English':
		greeting = 'Good Morning';
		break;
	case 'French':
		greeting = 'Bonjour!';
		break;
	case 'Japanese':
		greeting = 'Ohayou Gozaimasu';
		break
	default:
		greeting = 'Selamat pagi';
}

console.log(greeting) // output adalah value dari greeting
