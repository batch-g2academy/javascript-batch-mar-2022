let email = 'test@mail.com';
let uang;
let pilihan = 'soda';



// var usia = 55;
// // private int usia = 55;

// var tinggi = 173.2;
// // private double tinggi = 173.2

// var nama = "Rhaya";
// var firstName = `G2Academy`;
// //private String nama = "Rhaya"

// console.log(firstName);

// // DI JAVASCRIPT, DOUBLE QUOTE DAN SINGLE QUOTE ITU SAMA2 MEREPRESENTASIKAN STRING

// //BOOLEAN => true or false 
// var isActive = true;

// console.log(typeof isActive);

// var lastname;

// console.log(lastname); //null kalo di JAVA SEDANG DI JS akan bernilai "undefined"
// console.log("type: ", typeof lastname)

// var address = null;
// console.log(address);
// console.log("type: ", typeof address);
// console.log("-----------------------");


// // 3 WAYS TO CREATE VARIABLE IN JS

// //1. using var keyword
//     // variable global
//     // bisa di re-declared dan bisa re-assign
//     var address; //re-declared
//     address = "Cohive 101 Lt.2"; //re-assign
//     console.log(address);

// //2. using let keyword
//     // scope nya itu terdekat dengan scope function/conditional/loop
//     // TIDAK BISA di re-declared tapi bisa di re-assign;
//     let email = 'irsyah@g2academy.co';
//     console.log(email);
//     email = 'irsyahms@g2academy.co';
//     console.log(email);

// //3. using const keyword
//     // scope sama dengan var, tetapi nilainya tidak bisa diubah/konstanta
//     // TIDAK BISA di re-declared ataupun di re-assign
//     const password = 'pass12345';
//     console.log(password);
//     // password = 'pass';


// CONDITIONAL
let angka = 5;

if (angka === 6) { // 5 == '5' ? false
    console.log('Angka adalah angka 5');
} 

// PERBEDAAN == DAN ===
// kalo == selama value nya sama walaupun berbeda type, itu dianggap TRUE

// kalo === value dan type akan dicek

let username = 'Komar';

console.log(username);

// if (username === undefined || username === '' || username === null) {
//     console.log('Silakan tulis username');
// } else {
//     console.log('Hello ' + username);
// }

//truthy falsy
// if (!username) {
//     console.log('Silakan tulis username');
// } else {
//     console.log('Hello ' + username);
// }

if (username) { //selama variabel tersebut ada nilainya: true
    console.log('ada value dari variabel ini');
    console.log('valuenya adalah: ' + username);
} else {
    console.log('tidak ada value');
    // null
    // undefined
    // false
    // 0
    // ''
    // NaN
}

(username) ? console.log('hai') : console.log('please input your username');

// switch case
let type = 'ADD_TODO';
let luckyNumber = 5;

switch (luckyNumber) {
    case '7':
        console.log('the lucky number 7');
        break;
    case '13':
        console.log('youre lucky 13');
        // break;
    default:
        console.log('not your day');
        break;
}

