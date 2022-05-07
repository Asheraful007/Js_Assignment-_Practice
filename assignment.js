// ১. Variable কি ?
/*ans:  variable holo ek dhoroner container ,jar moddhe data store kora rakha jay .
 variable er maddhome boro kono data bar bar na lekha er ekta variable name set kore delai sei vaiable decliar kore code kora jay.
 .jar karone coding korar khetre time save hoy..variable decliar kora hoy var keyword lekhe .*/


// ২. Variable কিভাবে লিখতে হয় ?
/*ans:   variable lekhar neyom necha lekha holo,*/
var firstName = 'Ashraful Islam '
console.log(firstName);

var lastName = 'Badol'
console.log(lastName);

// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?
/*ans:  string type variable holo text er moto jake programeeing er vasay string bola hoy.
string type variable decliar kora hoy duble cotation ba single cotation er vitore .
duble ba single cotation vitore jei variable value store kora hobe setai string type variable bole gonno hobe .
jemon:*/
var mySchoolName = "Kashinath Alauddin High School And Collage "
console.log(mySchoolName);

var myCollageName = "BAF Shaheen Collage Samsernogor"
console.log(myCollageName);

// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?
/*ans:  numbe type variable holo kono variable er value jokhon number lekhe store kora hoy tokhon take number type variable bole. 
number type variable lekhar somoy kono prokar cotation bebohar kora jabe na . number type variable e cotation bebohar korle seta string type hoye jabe.
numbar tupe variable lekhar neom necha lekha holo */
var numbar1 = 100
console.log(numbar1);

var number2 = 200
console.log(numbar2);

var number3 = 400 
console.log(numbar3);

// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?
/*ans:  Boolean type variable bebohar kora hoy sotto and mettha jachai korar jonno .
 sotto hole true output asbe and mettha hole false output asbe. sudhu matro true and false output deya e boolean er kaj.
 boolean type variable jehetu js er resurvd keyword tar jonno true or false lekhar somoy kono cotation bebohar korte hoy na*/
 var mySchoolName = false
console.log(mySchoolName);

var myCollageName = true
console.log(typeof myCollageName);

// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 
/*ans:  toUpperCase bebohar kora hoy kono variable e store kora data er sob word ke capital korar jonno .
and toLowerCase bebohar kora hoy capital sob word ke small korar jonno. toUpperCase and toLowerCase er bebohar lekha holo*/
var myName = "ashraful islam badol "
console.log(myName.toUpperCase());

var myFriendName = "FAHIM JAHID"
console.log(myFriendName.toLowerCase());

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?
 /*ans:javascript e 2 dhoroner oparetor ache jemon:
 1.Arithmetic oparetor : + , - , * , / , % ,*/
 var x = 10
 var y = 20
 console.log(x + z);

 var x = 10
 var y = 20
 console.log(x - z);

 var x = 10
 var y = 20
 console.log(x * z);

 var x = 10
 var y = 20
 console.log(x / z);

 /*2.Assignment oparetor : += , -= , *= , /= , %=,  */
 var a = 50
 a = a + 30
 console.log(a);

 var a = 50
 a = a - 30
 console.log(a);

 var a = 50
 a = a * 30
 console.log(a);
// ৮. Math.abs() এর ব্যাবহার লিখুন । 
/*ans: Math.abs() jekono rinattok sonkha ke dhonattok kore deba..jemon -20 ke 20 kore deba .*/
var num5 = -10
var sum = Math.abs(num5);
console.log(sum);

// ৯. Math.celi()  এর ব্যাবহার লিখুন । 
/*ans: Math.ceil() holo kono sonkhar dosomik sonkha jodi .0001 hoy tahole take 1 kore deba.
jemon 1.00001 hoy tahole sei sonkhar .00001 ke 1 bareya deya 1.00001 ke 2 kore deba. */

var num6 = 5.00001
var sum = Math.ceil(num6);
console.log(num6);


// ১০. Math.Floor() এর ব্যাবহার লিখুন । 
/*ans: Math.Floor() er kaj holo kono dosomik sonkhar decimal sokha ke hisab kore na . 
jemon 10.9999 sonkha ta te Math.floor() use korle setar .9999 ke bad deya sudhu 10 output dekhabe .
Math.Floor() dosomik sonkhar khucra sonkha ke gonona kore na. */   
var num7 = 10.9999
var sum = Math.floor(num7);
console.log(sum);

// ১১. Math.round() এর ব্যাবহার লিখুন ।
/*ans: Math.round() holo kono sonkha 0.5 hole ba tar upore hole seta ke 1 kore deba. ar jode 0.5 ee niche hoy jemon 0.4
hoy tahole setake 0 kore deba .*/ 
var num8 = 1.600011
var sum = Math.round(num8);
console.log(sum);

var num9 = 1.400011
var sum = Math.round(num9);
console.log(sum);

// ১২. Math.random() এর ব্যাবহার লিখুন ।
 /* ans: Math.random() kichu ta lotarir moto kaj kore.*/
 var lotay = Math.random();
 console.log(lotay);

 var lotarir = Math.random()*50;
 console.log(lotay);
// asignment.js - GitHub Link 