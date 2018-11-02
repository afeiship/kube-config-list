# 使用createPortal将组件渲染到当前组件树之外
> 可以更加合理的方式在 DOM 中去组织 HTML

Portals机制提供了一种最直接的方式可以把一个子组件渲染到父组件渲染的DOM树之外。默认情况下，React组件树和DOM树是完全对应的，因此对于一些Modal,Overlay之类的组件，通常是将它们放在顶层，但逻辑上它们可能只是属于某个子组件，不利于组件的代码组织。通过使用createPortal，我们可以将组件渲染到我们想要的任意DOM节点中，但该组件依然处在React的父组件之内。带来的一个特性就是，在子组件产生的event依然可以被React父组件捕获，但在DOM结构中，它却不是你的父组件。对于组件组织，代码切割来说，这是一个很好的属性。
```jsx
//实现一个简易蒙层效果，抽象出一个通用的Overlay组件
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Overlay extends Component {
    constructor(props) {
        super(props);
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
    }
    componentWillUnmount() {
        document.body.removeChild(this.container);
    }
    render() {
        return ReactDOM.createPortal(
            <div className='overlay'>
                <span className='overlay-close' onClick={this.props.onClose}>&times;</span>
                {this.props.children}
            </div>,
            this.container
        )
    }
}
//该组件对应的样式如下
.overlay{
    box-sizing:border-box;
    position: fixed;
    top:50%;
    left:50%;
    width:260px;
    height:200px;
    margin-left:-130px;
    margin-top:-100px;
    padding:10px;
    background-color: #fff;
    outline: rgba(0,0,0,.5) solid 9999px;
}
.overlay-close{
    position: absolute;
    top:10px;
    right:10px;
    color:red;
    cursor: pointer;
}
使用方式如下：

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayActive: false
    }
    this.closeOverlay = this.closeOverlay.bind(this);
    this.showOverlay = this.showOverlay.bind(this);
  }
  closeOverlay() {
    this.setState({ overlayActive: false })
  }
  showOverlay() {
    this.setState({ overlayActive: true })
  }
  render() {
    return (
      <div className="App">
        <div>hello world!</div>
        {this.state.overlayActive &&
          <Overlay onClose={this.closeOverlay}>overlay content</Overlay>}
        <button onClick={this.showOverlay}>show</button>
      </div>
    );
  }
}
```
作者：弧度里的微笑
链接：https://www.jianshu.com/p/af0ae26eac18
來源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。