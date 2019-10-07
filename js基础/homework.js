// 1.在控制台打印输出目前所学的所有数据类型的类型
// 2.数据类型的相互转换:
//  Number(true)  // ?
//  Number(false) // ?
//  Number(" ") // ?
//  Number( [] ) //?
//  Number(['1','2']) //?
//  Number([1]) // ?
//  Number({})   //?
//  Number({a:1}) // ?
//  Number("3.14") //?
//  Number(null) // ?
//  Number(undefined) //?
//  Number("12456aaaa") //?
//  String({}) // ?
//  String([]) // ?
//  String(123) //?
//  String(false) //?
//  String(null) //?
//  String(undefined) //?
//  undefined.toString() //?
//  null.toString()  //?
//  Boolean(0) // ?
//  Boolean("") //?
//  Boolean(undefined) //?
//  Boolean(null) //?
//  Boolean(NaN) //?
//  Boolean({}) // ?
//  Boolean([])  // ?
// 3. 将下列结果打印出来下面的题的结果


var num1 = 123;
var num2 ="123"
console.log(num1+num2)  // ?  123123
console.log(num1 + +num2)  // ? 246
console.log(num1 + !!num2)  // ?123 + true  124
console.log(num1+Number(num2))  // ? 246



// 4. 求值

                    
// var a = 1; var b = ++a + ++a;   console.log(b);  //  5
// var a = 1; var b = a++ + ++a;   console.log(b);  // 4
// var a = 1; var b = a++ + a++;   console.log(b);  // 3
// var a = 1; var b = ++a + a++;   console.log(b);  // 4



// 5.输出下面的结果:
// console.log ( NaN == NaN );//？false
// console.log( NaN === NaN ); //？ false


console.log ( undefined == null );//？  true
console.log ( undefined === null );//？  false


// console.log ( "abc" > "b" ); //？ false
// console.log ( "abc" > "aad" ); //？ // true


// 数据类型  简单(5)+复杂(object)  number,string,boolean,undefined,null   object array  
// console.log(typeof array)    // object


//  记住一句话，复杂数据类型 在 == 的时候是false

console.log ( [] == [] ); //？   false

console.log ( [] === [] ); //？   false

// 复杂数据类型在转布尔值等时候是true
console.log([])  // true
console.log({})   // true
 

// 当我等号进行比较的时候，如果有一方是布尔值，我会先把布尔值转换成数字 
// 当我进行等号比较的时候，如果有一方是数字，那么另一方也要转数字 

console.log ( [] == ! [] ); // ？  [] == false    [] == 0    0 == 0       true

console.log ( [] == 0 );// true

console.log ( ! [] == 0 );//true    false == 0      0==0



// 6.输出下面的结果:

// var a = (10 * 3 - 4 / 2 + 1) % 2,  // a =1
// 　  b = 3;
// b %= a + 3; // b = b%(a+3)   b=3
// console.log(a++); // ？1 2
// console.log(--b); // ？ 2  2


// 7.输出下面的结果:
 console.log(3+2||0&&true)  // ？



  // 一假则假

// console.log(false && true)  // false
// console.log(true&&true) // true
// console.log(true&&false)  // false
// console.log(false&&false)  //false 



// 在&&运算得时候，如果两边都不是布尔值，比较的时候

 console.log(undefined&&5) // ？  undefined
 console.log(5&&undefined)   // undefined
 console.log(0&&undefined)


console.log(1&&2) // 2



 console.log(1&&2&&3) //？3
 console.log(1&&0&&3) //？0



 console.log(2+3>1&&4|| 4&&5%6) // ？  4||5     4
 console.log(5+10/2&&4>3||7-4)  //？  5+5&&4>3 ||3   10&&4>3||3   10&&true||3   ture||3  true


// 8. 输出下面的结果:
// var num1 = 20;
// var num2 = 30
// console.log(num1%num2);  // 20
// num1 += num2 // num1 = num1 +num2
// console.log(num1);  // 50
// num1 = num1- num2;  // 将这段代码改写   num1 -= num2
// console.log(num1);  // 20


// 9.世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：华氏度=(9/5)*摄氏度+32
//    利用JavaScript编写程序，要求：当输入不同摄氏度，提示出对应的华氏温度
// var tem = 32
// var htem = (9/5)*tem+32
// console.log(htem)  // 



// // 10.在定义变量名字, 年龄,地址，打印出:我是XXX,今年XX岁了，我来自XXX。
// var name = "zs";
// var age = 18;
// var address = "山西省"

// // +
// console.log("我是"+name+",今年"+age+'岁了,我来自'+address)  // 我是zs,今年18岁了,我来自山西省

// // ``
// console.log(`我是${name},今年${age}岁了,我来自${address}`)


