import React, {Component} from 'react';
import Foo from './foo.jsx';

export default class MyComponent extends Component {
  render() {
    return <div>
      <span className="icon-star">*</span>
      <div>{this.props.children}</div>
      <Foo />
      <Foo />
      <Foo onButtonClick={e => this._onButtonClick(e)}/>
    </div>
  }

  _onButtonClick() {
    alert('Foo clicked!');
  }

}