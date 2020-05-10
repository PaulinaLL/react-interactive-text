import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        index:
          this.state.index === this.props.words.length - 1
            ? 0
            : this.state.index + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="cover">
        <div className="coverContentWrapper">
          <button className="backToForm" onClick={this.props.showForm}>
            X
          </button>
          <h2>
            I am a <span>{this.props.words[this.state.index]}</span>
          </h2>
        </div>
      </div>
    );
  }
}

export default Message;
