const fs = require('fs');

test('change ', () => {
  // todo: how to test this cli program?
  const res = require('../bin');
  process.stdout.write(' -b');
  // process.stdin.emit('keypress', '', { name: 'enter' });
  // process.stdin.emit('keypress', '', { name: 'enter' });
  // process.stdin.on('readable', function () {
  //   var chunk = process.stdin.read(); // 获取到输入的信息
  //   console.log('chunk:', chunk);
  //   process.stdin.emit('end'); // 触发end事件
  // });
  // ks.sendKeys([' ','-', 'b', 'enter']);
  // console.warn('res:', console.log.mock.calls);
  // console.log(process.env);
  process.stdin.emit('end');
});
