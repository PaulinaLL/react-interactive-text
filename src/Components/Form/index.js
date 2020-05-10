import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      words: [],
    };
    this.inputChange = this.inputChange.bind(this);
    this.addWordClick = this.addWordClick.bind(this);
  }

  inputChange(e) {
    this.setState({
      word: e.target.value,
    });
  }

  addWordClick(e) {
    e.preventDefault();
    this.setState({
      words: [...this.state.words, this.state.word],
      word: "",
    });
    this.props.parentTrigger(this.state.words);
  }

  render() {
    console.log(this.state.words);
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
        <div className="buttons">
          <button>Show me the message</button>
          <button onClick={this.addWordClick}>Add new word</button>
        </div>
      </form>
    );
  }
}

export default Form;
