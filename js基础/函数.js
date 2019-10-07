// 1.给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]


// var twoSum = function(nums, target) {
//     for(var i=0;i<nums.length;i++){
//         for(var j = i+1;j<nums.length;j++){
//             if(nums[i]+nums[j] == target){
//                  return [i,j]
//             }
//         } 
//     } 
// };

// // console.log(twoSum([3,2,4],6))
// console.log(twoSum([2,7,11,15],9))




// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。


// var reverse = function(x) {
//   var bai = parseInt(x/100)
//   var shi = parseInt(x%100/10) 
//   var ge = parseInt(x%10)
//   if(x>0){
//       return `${ge}${shi}${bai}`
//   }else{
//       return "-"+ge*(-1)+shi*(-1)+bai*(-1)
//   }
// }
// console.log(reverse(-123))