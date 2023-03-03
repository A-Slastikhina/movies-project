import React, { useState } from 'react';

 const Search = (props) => {
  const {SearchMovie} = props;
const [search, setSearch]= useState('');
const [type,setType] = useState('all')

 const handleSearch = (evt) => {
    setSearch( evt.target.value );
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    SearchMovie(search, type);
  };
  const handleChange = (evt) => {
    setType( evt.target.value );
  };
 
    
    return (
      <form
        className="input-field col s12"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          value={search}
          className="validate"
          placeholder="What do you search?"
          onChange={handleSearch}
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
              onChange={handleChange}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              value="movie"
              onChange={handleChange}
              checked={type === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              value="series"
              onChange={handleChange}
              checked={type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </form>
    );
  }


export { Search };
