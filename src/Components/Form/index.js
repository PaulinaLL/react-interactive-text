import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      words: [],
      noError: true,
    };
    this.inputChange = this.inputChange.bind(this);
    this.addWordClick = this.addWordClick.bind(this);
    this.showMessage = this.showMessage.bind(this);
  }

  inputChange(e) {
    this.setState({
      word: e.target.value,
      noError: true,
    });
  }

  addWordClick(e) {
    e.preventDefault();
    this.setState({
      words: [...this.state.words, this.state.word],
      word: "",
      noError: true,
    });
  }

  showMessage(e) {
    e.preventDefault();
    this.setState({
      noError: this.state.words >= 3 ? true : false,
    });
    this.props.parentTrigger(this.state.words);
  }

  render() {
    return (
      <form>
        <label htmlFor="words">Add words</label>
        <input
          type="text"
          name="words"
          id="words"
          onChange={this.inputChange}
          value={this.state.word}
        ></input>
        {this.state.noError ? "" : <p>Add at least 3 words to continue</p>}
        <div className="buttons">
          <button type="button" onClick={this.showMessage}>
            Show me the message
          </button>
          <button onClick={this.addWordClick}>Add new word</button>
        </div>
      </form>
    );
  }
}

export default Form;
