import React, { Component, KeyboardEvent } from 'react';

class SearchComponent extends Component {
  searchAnimal = (event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    const animals = document.getElementsByClassName('animals');

    for (let i = 0; i < animals.length; i++) {
      if (!animals[i].innerHTML.toLowerCase().includes(input)) {
        animals[i].classList.add('hidden');
      } else {
        animals[i].classList.remove('hidden');
      }
    }
  };

  render() {
    return (
      <div className="search position-relative text-center px-4 py-3 mt-2">
        <input
          id="searchbar"
          name="search"
          type="text"
          className="form-control w-100 border-0 bg-transparent"
          placeholder="Search here"
          onKeyUp={this.searchAnimal} 
        />
      </div>
    );
  }
}

export default SearchComponent;
