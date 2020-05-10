import React from "react";
import "./App.css";
import Message from "./Components/Message";
import Form from "./Components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      showResult: false,
    };

    this.parentTrigger = this.parentTrigger.bind(this);
    this.showForm = this.showForm.bind(this);
  }
  parentTrigger(wordsArray) {
    this.setState({
      words: wordsArray,
      showResult: wordsArray.length >= 3 ? true : false,
    });
  }

  showForm() {
    this.setState({
      words: [],
      showResult: false,
    });
  }

  render() {
    return (
      <div className="App">
        <main className="App-main">
          {this.state.showResult ? (
            <Message words={this.state.words} showForm={this.showForm} />
          ) : (
            <Form parentTrigger={this.parentTrigger} />
          )}
        </main>
      </div>
    );
  }
}

export default App;
