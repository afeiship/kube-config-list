# lifecycle
> Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
- https://www.w3schools.com/react/react_lifecycle.asp

## Updating(更新)
- The next phase in the lifecycle is when a component is updated.
- A component is updated whenever there is a change in the component's state or props.
- React has five built-in methods that gets called, in this order, when a component is updated:

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

- 这个是当一个组件更新的时候处理的一些阶段
- 当组件的 state/props 发生改变的时候会走上面一些对应的生命周期
- 上面就是按顺序执行的一些生命周期函数


### static getDerivedStateFromProps
- Also at updates the `getDerivedStateFromProps` method is called. 
- This is the first method that is called when a component gets updated.
- This is still the natural place to set the state object based on the initial props.

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
```

### shouldComponentUpdate
- In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
- The default value is `true`.


```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

  shouldComponentUpdate() {
    return false;
  }

  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }

  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```

### getSnapshotBeforeUpdate

In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

The example below might seem complicated, but all it does is this:

When the component is mounting it is rendered with the favorite color "red".

When the component has been mounted, a timer changes the state, and after one second, the favorite color becomes "yellow".

This action triggers the update phase, and since this component has a getSnapshotBeforeUpdate() method, this method is executed, and writes a message to the empty DIV1 element.

- 取dom的一些状态 `check what the values were before the update`

### componentDidUpdate()
- The componentDidUpdate method is called after the component is updated in the DOM.
- The example below might seem complicated, but all it does is this:
- When the component is mounting it is rendered with the favorite color "red".
- When the component has been mounted, a timer changes the state, and the color becomes "yellow".

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="mydiv"></div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```



