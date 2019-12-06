import React from 'react';

function SearchForm() {
    return (
        <form className='search-form'>
            <input type='text' value='' placeholder='Search players by name' />
            <button>Search</button>
        </form>
    );
};

export default SearchForm;