import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cover">
        <button onClick={this.props.showForm}>X</button>
        <h2>
          I am a <span>{this.props.words}</span>
        </h2>
      </div>
    );
  }
}

export default Message;
