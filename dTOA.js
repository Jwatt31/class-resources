//let a = 1;
//let b = a++;
//let c = ++a;
// what is the value of a, b, and c?
// a=3 b=1 c=3
//console.log(a = 1)
//console.log(b= a++) //post increment (before the a++ is added +0 *enter +1)
//console.log(c = ++a) //pre increment (after the ++a is added +1)
///////////////////
//let d = "hello";
//let e = false;

//d++;
//e++;
//"hello" false
//////////////////
//let perplexed; // perplexed is undefined (no value is assigned)
//perplexed + 2;
// undefined
//////////////////
//et price = 2.7;
//price.toFixed(2);
// 2.70
//////////////////
//console.log(let price = "2.7";
//price.toFixed(2);)
// false
//////////////////
isNaN(0)
//false

isNaN(1)
//false
isNaN("")
//true
isNaN("string")
//true
isNaN("0")
//false
isNaN("1")
//false
isNaN("3.145")
//false
isNaN(Number.MAX_VALUE)
//false
isNaN(Infinity)
//flase
isNaN("true")
//true
isNaN(true)
//true
isNaN("false")
//true
isNaN(false)
//true
// to illustrate why the isNaN() function is needed:
NaN == NaN
//true
///////////////////////

//!true
//false
//!false
//true
//!!true
//true
//!!false
//false
//!!0
//false
//!!-0
//true
//!!1
//false
//!!-1
//true
//!!0.1
//false
//!!"hello"
//true
//!!""
//false
//!!''
//flase
//!!"false"
//true
//!!"0"
//true
//////////////////
 let sample = "hello codeup"
//console.log(sample.length) // 12
 //sample .toUpperCase //"HELLO CODEUP"
 //sample .toLowerCase(sample)//"hello codeup"
 //sample .substring("hello codeup", "hello codeup students")
//sample .replace(.indexOf("c"))
//sample .replace(.indexOf("C"))
console.log(sample.indexOf("c"))
console.log(sample.indexOf("p"))
console.log(sample.substring(6,12))
///////////////////
//let p= 3
//let tLM = p * 3
//let bB = p * 5
//let hUR = p * 1
//console.log(bB + hUR + tLM)
// total = 27
//let gOO = 400
//let aMA = 380
//let fAC = 350
//console.log((gOO*6)+(aMA*4)+(fAC*10))
///////////////////
let username = 'codeup';
let password = 'notastrongpassword'
console.log(password.length >= 5)
console.log(username.substring(0))
console.log(password === '')
console.log(username.length <= 20)
console.log(username.trim() && password.trim())
