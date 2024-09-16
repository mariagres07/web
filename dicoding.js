const age = 10;
const name = 'Dicoding';
console.org('Aku ${name}, umurku${age} tahun.');

//const tidak dapat diinisialisasi ulang
//let bisa diganti

let nama = 'macan';
console.log('sebelum diubah:', nama);
name1 = 'maria';
console.log('setelah diubah:', nama);

const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}
//Properti yang diberi nilai undefined tidak 
//akan tampak ketika diubah ke JSON karena JSON 
//tidak mendukung tipe data undefined. Oleh karena itu, 
//null lebih standar untuk menunjukkan nilai kosong.

const number = 123;
//const boolean = true;

//const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

const strNumber = '123';
const strFloat = '3.14';
const boolean = true;//bernilai 1 jika true dan 0 jika false

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);

//fungsi parselnt() str jadi int
const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM);//20
console.log(intFromPX);//64

//parseFloat() str jadi float

const desimalCM = '20.55cm';
const desimalPX = '64.23px';

const floatFromCM = parseFloat(desimalCM);
const floatFromPX = parseFloat(desimalPX);

console.log(floatFromCM);
console.log(floatFromPX);

const kosong = null;

const boolFromNull = boolean(kosong);

console.log(boolFromNull);

const umurKu = 19;
const pesan = 'umurku ' + umurKu;
console.log(pesan);

const bool = true;
const result = 1 + bool;

console.log(result); // output: 2