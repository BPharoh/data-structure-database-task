import React, {Component} from 'react';

class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  isPalindrome(word) {
    word = word.toLowerCase();
    return (
      word.length > 1 &&
      word ===
        word
          .split("")
          .reverse()
          .join("")
    );
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
      result: this.isPalindrome(event.target.value)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Palindrome</h1>
        <h2>Enter a word to check if it's a Palindrome!</h2>
        <input type="text" onChange={this.onChange} value={this.state.value} />
        <h2 className={this.state.result ? "result-success" : "result-danger"}>
          {this.state.result
            ? "It's a Palindrome!!!"
            : "No, it's not ... try again"}
        </h2>
      </div>
    );
  }
}

export default Palindrome;