// 4.声明两个变量,第一个变量为num1,值为123,第二个变量为num12,值为456,实现两个变量值的交换,即让num1为456,让num12为123;
// 要求，最少用2种方式实现

var num1 = 123;
var num12 = 456;

// // 第一种方法
// var temp;
// temp = num1;
// num1 = num12;
// num12 = temp
// console.log(num1,num12)

// 第二种方法
num1 = num1 + num12;
num12 = num1 - num12;
num1 = num1 - num12;
console.log(num1, num12)
console.log(333)



//  num1ber(true)  // ? 1
//  num1ber(false) // ? 0
//  num1ber(" ") // ? 0
//  num1ber( [] ) //? 0
//  num1ber({})   //?  NaN
//  num1ber("3.14") //? 3.14
//  number(undefined) //? false
//  num1ber("12456aaaa") //?NaN
//  String({}) // ? ""
//  String([]) // ?  0
//  String(123) //? "123"
//  String(false) //? "false"
//  undefined.toString() //? 报错
//  null.toString()  //?  报错
//  Boolean(0) // ?  false
//  Boolean("") //?  false
//  Boolean(undefined) //? false
//  Boolean(null) //? false
//  Boolean(NaN) //? false
//  Boolean({}) // ? true
//  Boolean([])  // ?  true

//  const AA = 3.14
//  AA = 55   // 这个结果是报错，因为常量不可以更改  Assignment to constant variable.

var name = '中"国"'
name = "我是\"中国人\""
// console.log(name)

// var name3 = "\"哈哈哈\""
// console.log(name3)