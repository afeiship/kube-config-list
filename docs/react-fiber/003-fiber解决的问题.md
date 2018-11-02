# fiber 是如何解决这个问题的：

## 解决问题的方式：
加入fiber的react将组件更新分为两个时期
phase 1
phase 2

## 这两个时期以render为分界
1. render 前的生命周期为phase1,
2. render 后的生命周期为phase2

## 关于 phase1 和 phase2 的解释：
phase1的生命周期是可以被打断的，每隔一段时间它会跳出当前渲染进程，去确定是否有其他更重要的任务。此过程，React 在 workingProgressTree （并不是真实的virtualDomTree）上复用 current 上的 Fiber 数据结构来一步地（通过requestIdleCallback）来构建新的 tree，标记处需要更新的节点，放入队列中。

phase2的生命周期是不可被打断的，React 将其所有的变更一次性更新到DOM上。

这里最重要的是phase1这是时期所做的事。因此我们需要具体了解phase1的机制。

如果不被打断，那么phase1执行完会直接进入render函数，构建真实的virtualDomTree
如果组件再phase1过程中被打断，即当前组件只渲染到一半（也许是在willMount,也许是willUpdate~反正是在render之前的生命周期），那么react会怎么干呢？ react会放弃当前组件所有干到一半的事情，去做更高优先级更重要的任务（当然，也可能是用户鼠标移动，或者其他react监听之外的任务），当所有高优先级任务执行完之后，`react通过callback回到之前渲染到一半的组件，从头开始渲染`。（看起来放弃已经渲染完的生命周期，会有点不合理，反而会增加渲染时长，但是react确实是这么干的）

## 新构架带来的问题：
也就是 所有phase1的生命周期函数都可能被执行多次，因为可能会被打断重来
这样的话，就和react16版本之前有很大区别了，因为可能会被执行多次，那么我们最好就得保证phase1的生命周期每一次执行的结果都是一样的，否则就会有问题，因此，最好都是纯函数。

## 现在的 react 并没有开发fiber 特性：
所以react16目前都没有把fiber enable，其实react16还是以 同步的方式在做组建的渲染，因为这样的话，很多我们用老版本react写的组件就有可能都会有问题,包括用的很多开源组件，但是后面应该会enable,让开发者可以开启fiber异步渲染模式~