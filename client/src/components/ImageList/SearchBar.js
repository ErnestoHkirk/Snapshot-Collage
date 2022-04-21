import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input
                type="text"
                placeholder="Reclaim your past."
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
