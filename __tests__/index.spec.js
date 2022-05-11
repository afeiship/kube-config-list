const fs = require('fs');
const { exec } = require('child_process');

describe('boot.sh exists/not exists', () => {
  test('boot should be not override when boot.sh exists.', (done) => {
    exec(`node ./bin/index.js -b`, (err, stdout, stderr) => {
      expect(stdout.includes('/.kube/boot.sh existes, ignore.')).toBe(true);
      done();
    });
  });

  test('boot should be created when boot.sh not exists', (done) => {
    const homedir = require('os').homedir();
    const kube_boot = `${homedir}/.kube/boot.sh`;
    // delete when exist
    if (fs.existsSync(kube_boot)) fs.rmSync(kube_boot);

    expect(fs.existsSync(kube_boot)).toBe(false);

    exec(`node ./bin/index.js -b`, (err, stdout, stderr) => {
      console.log(stdout);
      expect(fs.existsSync(kube_boot)).toBe(true);
      done();
    });
  });
});
