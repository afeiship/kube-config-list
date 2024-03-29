# kube-config-list
> k8s config list.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

![snapshot](https://tva1.sinaimg.cn/large/e6c9d24egy1h232tpsv0gj20ge05k3yl.jpg)

## installation
```shell
npm i -g @jswork/kube-config-list
```

## usage
```shell
Usage: kube-config-list [options]

Options:
  -V, --version  output the version number
  -b, --boot     Create "boot.sh" to ~/.kube dir (default: false)
  -h, --help     display help for command

# create boot.sh file
kube-config-list -b

# add alias to .bashrc/.zshrc
alias kcl="kube-config-list && source ~/.kube/boot.sh";
```

## license
Code released under [the MIT license](https://github.com/afeiship/kube-config-list/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/kube-config-list
[version-url]: https://npmjs.org/package/@jswork/kube-config-list

[license-image]: https://img.shields.io/npm/l/@jswork/kube-config-list
[license-url]: https://github.com/afeiship/kube-config-list/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/kube-config-list
[size-url]: https://github.com/afeiship/kube-config-list/blob/master/dist/kube-config-list.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/kube-config-list
[download-url]: https://www.npmjs.com/package/@jswork/kube-config-list
