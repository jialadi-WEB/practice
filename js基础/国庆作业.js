//兔子的规律为数列，1，1，2，3，5，8，13，21    斐波那契系数 前两个数的和等于后一个  (拔高题)
// var n1 = 1;
// var n2 = 1;
// var n3;
// for(var i =3;i<=12;i++){
//    n3 = n1 +n2;
//    n1 = n2;
//    n2= n3
// }

// console.log(n3)  // 144


// 打印平行四边形
// for(var i =1;i<=6;i++){
//   var str = ""
//   for(var j =1;i<=6;j++){
//    str += "*"
//   }
//   console.log(str)
// }




// 入职薪水10K，每年涨幅5%，输出50年后工资多少
// var salary = 100000;
// for(var i =1;i<=50;i++){
//   salary *= (1+0.05)
// }
// console.log(salary.toFixed(2))  // 1146739.9785753696

// 49.控制台输出：求1 x 2 x 3 x 4 x ... x 19 x 20的结果
// var ji = 1;
// for(var i=1;i<=50;i++){
//   ji  *= i
// }
// console.log(ji)

// 50.控制台输出：从100到500所有自然数中不含数字4的自然数共有多少个？
// var count = 0;
// for(var i=100;i<=500;i++){
//   var ge = parseInt(i%10);
//   var bai = parseInt(i/100);
//   var shi  = parseInt(i%100/10)
//   if(ge!==4&&shi!==4&&bai!==4){
//      count ++
//   }
// }

// console.log(count);  // 244


// 26.利用JavaScript编写程序实现如下功能；普通顾客购物满 100 元打 9 折；会员购物打 8 折；会员购物满 200 打 7.5 折。
// var price = 100;
// var guest = "vip";
// if (price >= 200 && guest === "vip") {
//   console.log(price * 0.75)
// } else if (price < 200 && guest === "vip") {
//   console.log(price * 0.8)
// } else if (price >= 100 && guest !== 'vip') {
//   console.log(price * 0.9)
// } else {
//   console.log(price)
// }



// 12.用户定义一个数字，数字的范围在 1-9999之间，
// 然后输入的数字是 3，则前面补全 3个0，使之成为”0003”
// 如果输入的数字是25，则前面补全2个0,  使之成为”0025”
// 如果输入的数字是146，则前面补全1个0，使之成为”0146”
// 如果输入的数字是1235，则不用补全。
// 最后将结果打印出来。

// var num = 1000;
// if(num<10){
//   console.log('000'+num)
// }else if(num>10&&num<100){
//   console.log('00'+num);
// }else if(num>100&&num<1000){
//   console.log('0'+num);
// }else if(num>1000&&num<9999){
//   console.log(num)
// }else{
//   console.log('输入的数字不在合理范围内')
// }


//34. 企业发放的奖金根据利润提成。利润(I)低于或等于10万元时，奖金可提10%；利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；
// 20万到40万之间时，高于20万元的部分，可提成5%；40万到60万之间时高于40万元的部分，可提成3%；60万到100万之间时，高于60万元的部分，
// 可提成1.5%，高于100万元时，超过100万元的部分按1%提成，用户定义变量，输入当月利润I，求应发放奖金总数？
// var money = 60;
// var total = 1;
// if (money <= 10) {
//   total *= (1 + 0.1);
// } else if (money <= 20) {
//   // (money-10)*(1+0.075)  高于10万元的部分
//   // 10*(1+0.1)   低于10万元的部分
//   total *= ((money - 10) * (1 + 0.075) + 10 * (1 + 0.1))
// } else if (money <= 40) {
//   // (money-20)*(1+0.05)
//   total *= ((money - 20) * (1 + 0.05))
// } else if (money <= 60) {
//   // (money-40)*(1+0.03)
//   total *= ((money - 40) * (1 + 0.03))
// } else if (money <= 100) {
//   // (money-60)*(1+0.015)
//   total *= ((money-60)*(1+0.015))
// } else {
//   // (money-100)*(1+0.01)
//   total *= ((money-100)*(1+0.01))
// }

// console.log(total)




// 47.猴子偷桃  第一天吃一半+1个，第二天吃剩下的一半+1个，以后都吃剩下的一半+1个 到第10天只剩一个了 问第一天摘了多少桃子？  // 1534

// 采用倒推的方式, 第10天还剩个一个，倒推第九天吃了 (left+1)*2 = 4 ,根据第九天倒推第八天， (4+1)*2= 10;依次类推
// 第十天剩下的
var left = 1;
// 第一天总共的
var total;
// 从第九天开始倒推
for (var i = 9; i > 0; i--) {
  total = (left + 1) * 2;
  left = total;
}
console.log(total); // 1534



// 有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？  // 24个

// 第一种方式
// var count = 0;
// var ge, shi, bai;
//   for(var ge =1;ge<=4;ge++){
//     for(var shi = 1;shi<=4;shi++){
//        if(shi === ge){
//          continue;
//        }else{
//          for(var bai =1;bai<=4;bai++){
//            if(shi===bai || ge ===bai){
//              continue;
//            }else{
//              count ++;
//              console.log(ge+''+shi+''+bai)
//            }
//          }
//        }
//     }
//   }

//   console.log(count)


// 第二种方式
// var count = 0;
// var ge, shi, bai;
// var total = 4 * 4 * 4;
// for (var ge = 1; ge <= 4; ge++) {
//   for (var shi = 1; shi <= 4; shi++) {
//     for (var bai = 1; bai <= 4; bai++) {
//       if (ge == shi || ge == bai || shi == bai || ge == shi && ge == bai &&shi == bai) {
//         count++
//       }
//     }
//   }
// }
// console.log(total - count) // 24







// 7.求两个正数的最大公约数
// var num1 = 21;
// num2 = 14;
// var big;
// if (num1 < num2) {
//   // num1里面放最大的值，num2里面放最小的值
//  var temp = num1;
//   num1 = num2;
//   num2 = temp;
// }
// // 然后从小的开始循环
// for (var i = num2; i > 0; i--) {
//   if (num1 % i == 0 && num2 % i == 0) {
//     big = i;
//     console.log(big);  // 这个i就是最大公约数   7
//     break;
//   }
// }


// 8.求两个正数的最小公倍数
// 最小公倍数的算法，是将2个数相乘之后/最大公约数
// var small = num1*num2/big
// console.log(small)   // 42





// 36.利用JavaScript编写程序实现如下功能，五个小朋友排成一队。
// 问第一个多大了，第一个说比第二个大两岁，
//   问第二个，第二个说比第三个大两岁，以此类推。
//   问第五个小朋友几岁了，第五个小朋友说3岁了。
//   问第一个小朋友几岁了？
// 要求：控制台输出第一个小朋友的年龄是几岁
//  var age = 3;
//  for(var i=1;i<5;i++){
//    age += 2;
//  }
//  console.log(age)  // 11岁



// 使用for循环语句计算3+6+9+12+……+99的结果
// var sum = 0;
// for (var i = 3; i < 100; i += 3) {
//     sum += i;
// }
// console.log(sum)   // 1683




// 求出1-1/2+1/3-1/4…..-1/100的和（拔高题）

// 第一种方法
// var sum = 0;
// var j = 1;
// for(var i = 1;i<=100;i++){
//    sum += j*1/i;
//    j = -j;
// }
// console.log(sum);  // 0.688172179310195

// 第二种方法
// var sum = 0;
// for(var i=1;i<=100;i++){
//   if(i%2==0){
//     sum += (-1)*1/i
//   }else{
//     sum += 1/i
//   }
// }
// console.log(sum);  // 0.688172179310195





// 控制台输出：计算 1+1/2!+1/3!+1/4!+...1/20!的和
// var sum = 0;
// var jieceng = 1;
// for(var i=1;i<=4;i++){
//   jieceng = jieceng *i;
//   sum += 1/jieceng
// }

// console.log(sum);  // 




// 把1-100之间的数字，10个数字为一组，在控制台打印出每组的和，例如，1-10的和为一组，输出来，11-20的和为一组输出来，依次类推
// var sum = 0;
// for (var i = 1; i <= 100; i++) {  
//   sum += i;
//   if(i%10==0){
//     console.log(sum);
//     sum = 0;
//   }

// }




// 计算从1到100临近两个整数的合并依次输出3(1+2),第二次输出5(2+3),最后一次输出199(99+100)

// 方法一
// var n1;
// var n2;
// for(var i=1;i<100;i++){
//   var sum = 0;
//   n1 = i;
//   n2 = i+1;
//   sum = n1+n2;
//   console.log(sum)
// }

// 方法二
// for(var i=1;i<100;i++){
//    var s ;
//    s = i+(i+1)
//    console.log(s)
// }


// 53. 输入一个数，判断这个数是否是素数；
// var num = 15;
// var flag = false;
// for(var i=2;i<num;i++){
//   if(num%i==0){
//     flag = true;
//   }
// }
// if(flag){
//   console.log(num+'不是素数')
// }else{
//   console.log(num+'是素数')
// }


// 54. 找出一个数的所有因子数
// var num = 12;
// for(var i =1;i<9;i++){
//   if(num%i==0){
//     console.log(i);
//   }
// }


// 55.输入一个整数放入到变量n中，如果这个整数大于0，那么计算1+2+3+……+(n-1)+n的结果，否则输出“输入的数据有错误
//  var n = 25;
//  var sum = 0;
//  if(n>0){
//   for(var i=1;i<=n;i++){
//     sum +=i;
//   }
//   console.log(sum)
//  }else{
//    console.log('输入的数据有错误')
//  }

// 58.求任何一个数的阶乘
// var num = 5;
// var jieceng = 1;
// for(var i=1;i<=5;i++){
//    jieceng *= i;
// }
// console.log(jieceng)


// 59.在控制台倒序输出100,99,98,97,96,95.....1
// for(var i=100;i>0;i--){
//   console.log(i)
// }


// 60.计算10个99相加后的值并输出。
// var num = 99;
// var sum = 0;
// for(var i=1;i<=10;i++){
//    sum += num;
// }

// console.log(sum);  // 990