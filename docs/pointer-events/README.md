# poniter-events-api:

## Pointer Events api

Pointer Events API 是 Hmtl5 的事件规范之一，它主要目的是用来将鼠标（Mouse）、触摸（touch)和触控笔（pen）三种事件整合为统一的 API

## React pointer events
React 提供了以下 api 来支持 pointer events

onPointerDown
onPointerMove
onPointerUp
onPointerCancel
onGotPointerCapture
onLostPointerCapture
onPointerEnter
onPointerLeave
onPointerOver
onPointerOut
需要注意的是， 上述 api 只在支持 pointer events 的浏览器中使用， react 官方推荐当你在使用这个特性的时候， 使用第三方 polyfill 保证其兼容性, 经过对比之后，PEP 这个插件很好的支持了我们的需求

接下来看一段示例

```jsx
class Index extends Component {
  overHandler(event) () {}
  render () {
    return (
      <div onPointerOver={this.overHandler.bind(this)}></div>
    )
  }
 }
```

可以看到， pointer events 的用法和 onClick 类似的， 熟练使用 react 的同学上手不会有什么问题
