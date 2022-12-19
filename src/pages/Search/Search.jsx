import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="search__container">
        <div className="search__wrapper">
          <div className="search__input">
            <div className="form__input">
              <input type="text" required/>
              <span>Product name ...</span>
            </div>
            <button>Search</button>
          </div>
        </div>
        <div className="title">
          <h1>Search Result</h1>
        </div>
        <div className="search__content">
          <div className="search__filter">
            <i className="fa-solid fa-filter"></i>
            <span>filter</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search