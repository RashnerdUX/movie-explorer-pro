import React from 'react'

const Search = ({searchTerm, setsearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src='./search.svg' alt='search icon'></img>
            <input type='search' placeholder='Enter movie title here.' value={searchTerm} onChange={(event) => setsearchTerm(event.target.value)}/>
        </div>
    </div>
  )
}

export default Search