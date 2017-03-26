import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import Header from './components/header'; // eslint-disable-line no-unused-vars
import Input from './components/input'; // eslint-disable-line no-unused-vars
import Display from './components/display'; // eslint-disable-line no-unused-vars

class App extends Component {
  constructor() {
    super();
    this.state = {
        text: "",
    };
  }

  handleAddInput = (input) => {
    this.setState({
      text: input
    });
  }// eslint-disable-next-line
  render() {
    const { text } = this.state;

    return (
      <div className="container">
      <Header />
      <Input
        handleAddInput={this.handleAddInput}
        text={text}
      />
      <Display text={text} />
      </div>
    );
  }
}

export default App;
