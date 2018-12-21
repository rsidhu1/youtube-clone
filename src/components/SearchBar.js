import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      term: ""
    };
  }

  //change the state when inputing into search bar
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
      event.preventDefault()
      // make sure we call callback from parent component
      // to tell app that form is submitted
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              placeholder="..."
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
