const fs = require('fs');

test('change ', () => {
  // todo: how to test this cli program?
  const res = require('../bin');
  var stdin = process.openStdin();
  require('tty').setRawMode(true);

  stdin.on('keypress', function (chunk, key) {
    process.stdout.write('Get Chunk: ' + chunk + '\n');
    if (key && key.ctrl && key.name == 'c') process.exit();
  });
  process.stdin.emit('keypress', '', { name: 'enter' });
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
