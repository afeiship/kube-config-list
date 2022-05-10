# kube-config-list
> k8s config list.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

![snapshot](https://tva1.sinaimg.cn/large/0081Kckwgy1gk87ynhkbaj30u60asasp.jpg)

## installation
```shell
git clone https://github.com/afeiship/kube-config-list.git
cd kube-config-list
npm i && npm link
```

## usage
```shell
__USAGE__

# create boot.sh file
kube-config-list -b

# add alias 
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
