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
- static getSnapshotBeforeUpdate()
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

