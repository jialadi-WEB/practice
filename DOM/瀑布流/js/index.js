// for (var i = 0; i < 5; i++) {
//   // 设置左边的位置,先将第一排排好，然后获取第一排的所有高度，放到数组
//   item[i].style.left = (itemwidth + dismarright) * i + 'px';
//   heightarr.push(item[i].offsetHeight)
// }

// for (var j = 5; j < 10; j++) {
//   // 接下来开始排第五个，从告诉最低的开始排
//   item[j].style.left = (itemwidth + dismarright) * (j - 5) + 'px';
//   item[j].style.top = (heightarr[j - 5] + dismarright) + 'px';
//   // 高度进行累加
//   heightarr[j - 5] += item[j].offsetHeight + dismarright

// }
// for (var j = 10; j < 15; j++) {
//   // 接下来开始排第五个，从告诉最低的开始排
//   item[j].style.left = (itemwidth + dismarright) * (j - 10) + 'px';
//   item[j].style.top = (heightarr[j - 10] + dismarright) + 'px';
// }



    for (var i = 0; i < item.length; i+5) {
      for (var j = 0; j < 5; j++) {
        item[i].style.left = (itemwidth + dismarright) * i + 'px';
        heightarr.push(item[i].offsetHeight)
      }
      for (var k = i; k < i + 5; k++) {
        item[j].style.left = (itemwidth + dismarright) * (k - i) + 'px';
        item[j].style.top = (heightarr[k - i] + dismarright) + 'px';
        // 高度进行累加
        heightarr[k - i] += item[k].offsetHeight + dismarright

      }
    }
