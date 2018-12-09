import './dev.scss';
import Test from './main';
import PropTypes from 'prop-types';

/*===example start===*/

// install: npm install afeiship/test --save
// import : import Test from 'test'

class App extends React.Component {
  state = {
    memory: {
      test: 'initial test value'
    }
  };

  static childContextTypes = {
    memory: PropTypes.object,
    callback: PropTypes.func,
  }

  // 父组件提供一个函数，用来返回相应的 context 对象
  getChildContext() {
    return {
      callback: this.callback.bind(this),
      memory: this.state.memory
    }
  }

  // 所以这个一样子全部解决问题了：
  callback(inMemory) {
    this.setState({
      memory: inMemory
    })

    // object is not extensible
    // 由于上面那个特性，想直接操作 context 是不可能的；
    // this.context = Object.assign(this.context, {
    //   memory: inMemory
    // })
  }

  render() {
    return (
      <div className="hello-test">
        <Test ref='rc' >
          fsdfd - test value is : { this.state.memory.test }
        </Test>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
