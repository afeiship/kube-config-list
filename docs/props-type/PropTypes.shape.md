# PropTypes.shape
> 结构体

## 比如：定义一个结构体
```js
object:PropTypes.shape({
    name:PropTypes.string,
    age:PropTypes.number
})
```


```js
import React from 'react'
import PropTypes from 'prop-types';
class Son extends React.Component{
     render(){
        return (
            <div style ={{padding:30}}>
            {'我的名字叫' + this.props.object.name}
            <br/>
            {'我的年龄是' + this.props.object.age}
            </div>
        )
    }
}

Son.propTypes = {
    object:PropTypes.shape({
        name:PropTypes.string,
        age:PropTypes.number
    })
}

class Father extends React.Component{
    render(){
       return (
           <div>
                <Son object = {{name:'彭湖湾',age:20}}/>
            </div>
        )
    }
}
```