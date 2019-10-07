var myVarVariable = 666
const myConstVariable = 2;
console.log(myVarVariable); //  666
console.log(myConstVariable); // 2
myVarVariable = 888;
myConstVariable = 5;
console.log(myVarVariable); //
console.log(myConstVariable); // 报错

// 6.自定义一个对象：对象拥有年龄，学号，姓名，身高，体重，手机号等属性(这个代码敲三遍，创建3个不同的对象，非常重要)
// 要求：
//   1. 通过2种方式定义对象
//   2. 通过2种方式给对象添加一个属性 gender,值是"男"
//   3. 获取属性姓名和年龄的值
//   4. 删除属性体重

// var age = 18

// var obj = {
//   name: '张三',
//   age: 18,
//   colors: {

//   }

// }

// 4.声明两个变量,第一个变量为num1,值为123,第二个变量为num2,值为456,实现两个变量值的交换,即让num1为456,让num2为123;
// 要求，用2种方式实现
// var num1 = 123;
// var num2 = 456;
// var num3
//  num2= 456;
//  num1= 123;



var obj = {
  name:"zs",
  age:18
}

console.log(obj.age)
console.log(obj['age'])


obj.gender="男"
obj['height'] = 180
// console.log(obj)

// var attName = 123
// obj[‘attName’] = "wahah"
// console.log(obj)

// 品质
var liulanNumber = 1;
var liulianName = "榴莲";
var liulianPrice = 32.0;
var liulianUnit = '公斤';
var liulianLevel = 'A';

// 2.同理做苹果
var AppleNumber = 2;
var AppleName = "苹果";
var ApplePrice = 6.5;
var AppleUnit = '公斤';
var AppleLevel = 'B';

// 3.同理做猕猴桃
var mihoutaoNumber = 3;
var mihoutaoName = "猕猴桃";
var mihoutaoPrice = 6.0;
var mihoutaoUnit = '公斤';
var mihoutaoLevel = 'A';

// 4.使用输出语句，把结果按照案例效果图，输出到控制台中
console.log("水果编号    水果名称    水果单价    计价单位    品质");
// console.log(liulanNumber + "           "+liulianName+'        '+liulianPrice+"          "+liulianUnit+'        '+liulianLevel);
// console.log(AppleNumber + "           "+AppleName+'        '+ApplePrice+"         "+AppleUnit+'        '+AppleLevel);
// console.log(mihoutaoNumber + "           "+mihoutaoName+'      '+mihoutaoPrice+"           "+mihoutaoUnit+'        '+mihoutaoLevel);