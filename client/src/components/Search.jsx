import React from 'react';

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" value={props.search} onChange={props.handleSearchInput} />
    <button className="btn hidden-sm-down" onClick={props.handleSearchSubmit}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;