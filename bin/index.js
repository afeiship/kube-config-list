#!/usr/bin/env node
const { Command } = require('commander');

// next packages:
require('@jswork/next');
require('@jswork/next-absolute-package');

const { version } = nx.absolutePackage();
const program = new Command();
const globby = require('globby');
const ipt = require('ipt');
const path = require('path');
const fs = require('fs');
const homedir = require('os').homedir();
const KUBE_HOME = process.env['KUBE_HOME'] || `${homedir}/.kube`;
const KUBE_BOOT = `${KUBE_HOME}/boot.sh`;
const opts = { stdin: process.stdin, stdout: process.stdout };
const gpt = ['*', '!boot.sh'];
const gopts = { onlyFiles: true, cwd: KUBE_HOME };

program.version(version);
program.option('-b, --boot', 'Create "boot.sh" to ~/.kube dir', false).parse(process.argv);

nx.declare({
  statics: {
    init() {
      const app = new this();
      app.start();
    }
  },
  methods: {
    start() {
      if (program.boot) return this.boot();
      const names = this.names();
      ipt(names, opts).then((file) => {
        const cmd = `export KUBECONFIG=${KUBE_HOME}/${file}`;
        fs.writeFileSync(KUBE_BOOT, cmd, { flag: 'w' });
        console.log(`🥬 ENV: '${file}' has been set!`);
      });
    },
    names() {
      const files = globby.sync(gpt, gopts);
      return files.map((file) => path.parse(file).name);
    },
    boot() {
      if (fs.existsSync(KUBE_BOOT)) return console.log(`File: ${KUBE_BOOT} existes, ignore.`);
      fs.writeFileSync(KUBE_BOOT, '', { flag: 'w' });
    }
  }
});
