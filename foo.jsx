import React, {Component} from 'react';

export default class Foo extends Component {
  render() {
    const {onButtonClick} = this.props;
    return <div>
      <button onClick={onButtonClick}>button</button>
    </div>
  }
}