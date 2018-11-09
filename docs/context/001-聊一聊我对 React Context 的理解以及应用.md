# 聊一聊我对 React Context 的理解以及应用
+ https://www.jianshu.com/p/eba2b76b290b
> Context被翻译为上下文，在编程领域，这是一个经常会接触到的概念，React中也有。

## description:
在 React 的官方文档中，Context 被归类为高级部分(Advanced)，属于 React 的高级API，但官方并不建议在稳定版的App中使用Context。
```conf
The vast majority of applications do not need to use content.
If you want your application to be stable, don't use context. 
It is an experimental API and it is likely to break in future releases of React.
```
不过，这并非意味着我们不需要关注Context。事实上，很多优秀的React组件都通过 Context 来完成自己的功能，比如 `react-redux` 的 `<Provider />` ，就是通过Context提供一个全局态的store，拖拽组件 `react-dnd`，通过Context在组件中分发DOM的Drag和Drop事件，路由组件 `react-router` 通过Context管理路由状态等等。在React组件开发中，如果用好Context，可以让你的组件变得强大，而且灵活。

今天就想跟大家聊一聊，我在开发当中，所认识到的这个Context，以及我是如何使用它来进行组件开发的。

## 层层传值，还可以用这种方式:
简单说就是，当你不想在组件树中通过逐层传递props或者state的方式来传递数据时，可以使用 `Context` 来实现跨层级的组件数据传递。


## 官方对于Context的定义
React文档官网并未对Context给出“是什么”的定义，更多是描述使用的Context的场景，以及如何使用Context。

官网对于使用Context的场景是这样描述的：

In Some Cases, you want to pass data through the component tree without having to pass the props down manuallys at every level. you can do this directly in React with the powerful "context" API.

简单说就是，当你不想在组件树中通过逐层传递props或者state的方式来传递数据时，可以使用Context来实现跨层级的组件数据传递。