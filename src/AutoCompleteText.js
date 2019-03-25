import React, { Component } from "react";
import "./AutoCompleteText.css";

class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.items = ["amril", "nabila", "aisyah", "fitri"];
    this.state = {
      suggestions: [],
      text: ""
    };
  }
  onChangeText = e => {
    const value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  renderSuggestion = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  };
  render() {
    const { text } = this.state;
    return (
      <div className="AutoCompleteText">
        <input value={text} onChange={this.onChangeText} type="text" />
        {this.renderSuggestion()}
      </div>
    );
  }
}

export default AutoCompleteText;
