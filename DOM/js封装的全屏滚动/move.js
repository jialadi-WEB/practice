/*
	注释：
	动画封装函数
	Element：代表要移动的元素
	targetVal：目标距离
	speed：移动距离速度
 */
//定义变量为定时器名

// var dsq;
// function moveElement (Element,targetVal,speed) {
// 	window.clearInterval(dsq);
// 	//启动定时器【定时器命名】
// 	dsq = window.setInterval(function (){

// 		//获取前一次的位置【距离左端位置】
// 		var leftVal = Element.offseTop;
// 		//判断是否到达目标位置
// 		if(leftVal == targetVal){
// 			//清除定时器
// 			window.clearInterval(dsq);
// 			return;
// 		}

// 		//剩余的距离够不够再挪动一次
// 		if(Math.abs(targetVal - leftVal) < speed){
// 			Element.style.top = targetVal + 'px';
// 		}else{
			
// 			//每次在原有位置再挪动
// 			if(targetVal - leftVal > 0){
// 				leftVal = leftVal + speed;
// 			}else{
// 				leftVal = leftVal - speed;
// 			}
// 			//再把新的值赋值给div
// 			Element.style.top = leftVal + 'px';

// 		}
		

// 	},100);
// }




//变速动画函数封装增加任意多个属性和回调函数及层级还有透明度
  //element元素 json对象 存储属性与值 fn为回调函数
  // function animate(element, json, fn) {
  //   //清理定时器
  //   clearInterval(element.timeid);
  //   //设置定时器
  //   element.timeid = setInterval(function () {
  //     //假设全部到达目标
  //     var f = true;
  //     //循环去获取传入的数据
  //     for (var i in json) {
  //       //判断传入的值 是不是opacity
  //       if (i == 'opacity') {
  //         //获取当前opacity的值 并且放大100倍
  //         var current = getStyle(element, i) * 100;
  //         //把目标值也放大100倍
  //         var target = json[i] * 100;
  //         //移动的步数
  //         var step = (target - current) / 10;
  //         //判断是不是为0
  //         step = step > 0 ? Math.ceil(step) : Math.floor(step);
  //         //移动后的位置
  //         current += step;
  //         //移动元素属性
  //         element.style[i] = current / 100;
  //         //判断属性是不是zIndex
  //       } else if (i == 'zIndex') {
  //         //直接设置zIndex
  //         element.style[i] = json[i];
  //       } else {
  //         //普通属性获取（转化成数字）
  //         var current = parseInt(getStyle(element, i));
  //         //目标属性值
  //         var target = json[i]
  //         //移动的步骤（渐变）
  //         var step = (target - current) / 10;
  //         //判断移动的值取整
  //         step = step > 0 ? Math.ceil(step) : Math.floor(step);
  //         //移动后的位置
  //         current += step;
  //         //移动元素
  //         element.style[i] = current + 'px';
  //       }
  //       //只要有一个没达到目标就设置F为false
  //       if (current != target) {
  //         f = false;
  //       }
  //       //目标到达 清理定时器 判断有没有回调函数
  //       if (f) {
  //         clearInterval(element.timeid);
  //         if (fn) {
  //           fn();
  //         }
  //       }
  //     }
  //     // console.log("目标:" + target + ",当前:" + current + ",每次的移动步数:" + step);
  //   }, 20)
  // }


  // //获取任意一个元素的任意一个属性的当前的值---当前属性的位置值
  // function getStyle(element, attr) {
  //   return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr] || 0;
  // }


  // 匀速运动
//   function animate(element, target) {
//     //设置一个定时器让他循环去增加
//      element.timeid = setInterval(function () {
//         //拿到当前的位置（纯数字）
//         var current = element.offsetTop;
//         //每次要移动的像素current
//         var step =50;
//         //注意 这里是判断到底往那边走 如果当前的位置大于目标位置那么就往回走（往左边走 就是负的像素）
//         //否则 当前位置小于目标地址 就继续往右走（正数的像素）
//          step = current > target ? -step : step;
//         //这里是移动之后的位置
//          current += step;
//         //判断目标位置-当前的位置是否大于每次走的像素
//         if (Math.abs(target - current) > Math.abs(step)) {
//             //继续移动
//             element.style.top = current + 'px';
//         } else {
//             //目标位置-当前的位置小于每次走的像素.清理定时器 然后让它直接移动到目标的位置
//             clearInterval(element.timeid);
//             element.style.top = target + 'px';
//         }
//     }, 20)
// }