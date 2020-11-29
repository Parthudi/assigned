import React, { Component } from 'react';
import SignUp from '../src/components/signup/signup'
import SignIn from '../src/components/signin/signin'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SignIn /> <br/><br/><br/><br/>
          <SignUp />
      </div>
    );
  }
}

export default App;
