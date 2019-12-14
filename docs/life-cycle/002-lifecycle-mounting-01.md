# lifecycle
> Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
- https://www.w3schools.com/react/react_lifecycle.asp


## Mounting(挂载)

- constructor()
- getDerivedStateFromProps()
- render()
- componentDidMount()

### 01-constructor
> The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.
> The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

- 构造方法，最先调用。
- 组件初始化的时候，一般用来初始化 state 和组件内 this 的一些内部变量等。
- 参数中自带 props，初始化的时候，必须带上 super(props) 保证 parent 的方法、参数能顺利执行


```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}
ReactDOM.render(<Header />, document.getElementById('root'));
```

### static getDerivedStateFromProps
- The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
- This is the natural place to set the state object based on the initial props.
- It takes state as an argument, and returns an object with changes to the state.
- The example below starts with the favorite color being "red", but the getDerivedStateFromProps() method updates the favorite color based on the favcol attribute:

1. 在 render dom 之前执行
2. 会在这个时机修改 state ，根据外部传入的 props 来修改, 返回 null 表示不做任何事情
3. 这里接改两个参数  (inProps, inPreviousState) 

```jsx
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}
ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));
```

### render
> The render() method is required, and is the method that actual outputs HTML to the DOM.

- 这个没什么好说的，输出到 dom 到html中去

```jsx
class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}
ReactDOM.render(<Header />, document.getElementById('root'));
```

### componentDidMount
- The componentDidMount() method is called after the component is rendered.
- This is where you run statements that requires that the component is already placed in the DOM.

- 这个是在 render 过程结束之后执行
- 这个方法也就是类似于 domReady 的方法，这个时候如果有需要，需要进行 dom 操作可以在这里进行


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
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
```