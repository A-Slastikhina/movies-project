import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };
  handleSearch = (evt) => {
    this.setState({ search: evt.target.value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.SearchMovie(this.state.search, this.state.type);
  };
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    const { type } = this.state;
    return (
      <form
        className="input-field col s12"
        onSubmit={this.handleSubmit}
      >
        <input
          type="search"
          value={this.state.search}
          className="validate"
          placeholder="What do you search?"
          onChange={this.handleSearch}
        />
        <button
          className="btn search-btn blue darken-4"
          type="submit"
          value="Search"
        >
          Search
        </button>
        <div className='type-container'>
          <label>
            <input
              name="type"
              type="radio"
              value="all"
              onChange={this.handleChange}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              value="movie"
              onChange={this.handleChange}
              checked={type === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              value="series"
              onChange={this.handleChange}
              checked={type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </form>
    );
  }
}

export { Search };
