// console.log('#####################################################');
// console.log('Week 5')
// console.log('Tuwaiq Academy JS')
// console.log('#####################################################');

/* 
Node JS Installation , Applying JS code inside Node JS
Create JS file and adding some programming instructions
run this file with Node JS , export and import functions
from any files to any file and use it 
*/

/*
Express JS
يعتبر الإكسبرس من اشهر الويب فريموركس الخاصة بالنود والتي تساعدنا على تطوير مواقع الويب و APIs

وايضاً يزودنا بالعديد من الخصائص مثل التعامل مع الريكويست الي بتجينا بمختلف انواعها زي الجيت والبوست ومختلف المسارات او الروابط . بين قوسين . تحديد رد او ريسبونس مناسب لها سواء كان الرد بعرض صفحة فيو او غيرها مثل الرد من خلال إرسال البيانات بصيغة JSON

Postman || nodemon || npm run
*/


// NPM ==> Node Package Manager

// commands for day 1
// npm init ==> Initiate package json file
/* 
npm -v  ==>  get version number
*/


// import function/library
const square2 = require('./square')

console.log('product of square 5 is ',square2(5))

// import function/library
const subFun = require('./sub')

console.log('8 - 3 = ',subFun(8, 3))

// import function/library
const multiple = require('./multiple')

console.log('10 * 3 = ',multiple(10, 3))