try {
    console.log('coba try and catch');
    erorcode;
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}