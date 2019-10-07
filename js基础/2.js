// 1. 世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：华氏度=(9/5)*摄氏度+32
//    利用JavaScript编写程序，要求：当用户输入摄氏度，向用户提示出对应的华氏温度
// 2. 交换两个变量的值，假如a=1,b=2,那么现在请通过编写程序实现b=1,a=2
// 3. 给两个不同的数字分别赋值num1 和 num2，求出最大值。（三元表达式实现）
// 4. 如果用户的年龄小于18, 那么打印出来: "长大再来,网吧不欢迎你",否则打印, "欢迎光临，聚缘网吧给你家的温暖！"
// 5. 定义成绩变量 a=60  b=38  使用三元运算符如果成绩大于等于60返回"及格",否则返回不"及格"
// 6. 录入两个整数a和b,若a+b大于100,则输出a+b大于100的部分,否则输出两数之和.
  var a= confirm("请输入一个数字")-0;
  var b = confirm('请输入一个数字')-0;
  var c= a+b>100?a+b-100:a+b;
  console.log(c)
// 7. 在网页中输入名字, 年龄， 地址，打印出:我是XXX,今年XX岁了，我来自XXX。
// 8. 接收用户输入的数字，判断是奇数还是偶数 ，要求，使用三元运算的方式解决
// 9. 接收用户输入的数字，使用三元运算符如果成绩大于等于60返回"及格",否则返回"不及格"
// 10.接收用户输入的数字，计算并返回 a b 的最大的数
// 11.接收用户输入的数字，计算并返回 a b c的最大的数
// 9. 求值
// var a = 1; var b = ++a + ++a;   console.log(b);  //  
// var a = 1; var b = a++ + ++a;   console.log(b);  //
// var a = 1; var b = a++ + a++;   console.log(b);  //
// var a = 1; var b = ++a + a++;   console.log(b);  //
// 10.输出下面的结果:
console.log ( NaN == NaN );// false
console.log ( undefined == null );// true
console.log ( 1 + "true" ); //  1true
console.log ( 1 + true );  //2
console.log ( "abc" > "b" ); //false
console.log ( "abc" > "aad" ); //true

// 对象之间比较的是引用，所以是false
console.log ( [] == [] ); //false 
// 因为逻辑！的优先级高于==,所以![]会先转换成 false,之后 [] == false然后false会转成 0, []转数字也是0  0==0
console.log ( [] == ! [] ); // true
// 表示的是先将数据转换成字符串调用toString()方法，""然后转成数字是 0==0，所就是true
console.log ( [] == 0 );// true   "" ==0
// 下面的这个比较先进行!的转换，是false,转数字之后就是0 0==0  true
console.log ( ! [] == 0 );//true
// 先进行转换，!{} === false,然后将fasle转成0，然后{}转数字是NaN,所以结果就是false
console.log({} == !{})  // false

/**
 *  1.如果操作中有一个是布尔值，则比较相等性之前先将布尔值转换成数值 true=1,false =0
 *  2.如果一个操作数是对象，另一个操作数不是，则调用对象valueOf()方法，得到的基本类型进行比较
 *  3.若其中一个数据类型为数值，那么另一个数据类型会先转换成数值然后再与之比较
 *  4.数组、对象和函数在与其他基本数据类型进行比较时都会先转换为字符串，然后再转换为相应的数据类型
 *  5.特殊：
 *     NaN不与任何值相等，甚至包括它自己
 *     null和undefined不能进行数据转换
 *     null== undefined为true
 * 
 * 6. 数组与数组比较，比较的是其引用
 * 7.不同类型比较，遇数值则转数值，布尔值自身转数值
 * 
 * 
 *  * */





 /**
  * 运算符优先级，++优先级最高，接下来是算数运算符，接下来是比较运算符，接下来是逻辑运算符(非>或>与)
  * 与是前面是true,那么输出后面的，前面为假输出前面的
  * 或是前面是 true,输出前面的，前面为假输出后面的
  * 
  * 
  * 
  */

console.log(3+2||0&&true)  // 
console.log(undefined&&5) // 
console.log(1&&2&&3) //
console.log(1&&0&&3) //
console.log(1||0||3) // 
console.log(''||0||2) //
console.log(!"") // 
console.log(!123) //
console.log(2+3>1&&!""|| 4&&5%6) // 
console.log(5+10/2&&4>3||7-4)  //


console.log(Number(null)) // 0
console.log(String({}))  // "[object Object]"
