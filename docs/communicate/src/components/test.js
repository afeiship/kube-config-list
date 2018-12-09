import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
  };

  static contextTypes = {
    memory: PropTypes.object,
    callback: PropTypes.func,
  }

  static defaultProps = {
    value: null,
    onChange: noop
  };
  /*===properties end===*/

  onClick1 = inEvent => {
    this.context.callback({
      test: Math.random()
    })
  };

  render() {
    const { className, children, ...props } = this.props;
    return (
      <div className={classNames('test', className)} {...props}>
        <button className="button" onClick={this.onClick1}>Test click change color</button>
        { children }
      </div>
    );
  }
}
