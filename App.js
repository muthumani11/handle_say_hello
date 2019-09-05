import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.sayHello = this.sayHello.bind(this);
    }

    sayHello() {
      alert('Hello I am muthu!');
    }
    render() {
      return (
      <div>
      <button onClick={this.sayHello}>
          Click me
        </button>
      </div>
      );
    }
}
export default App;
