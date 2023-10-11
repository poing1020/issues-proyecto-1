import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState('')
  return (
    <div className='search-bar'>
      <h1>lista de issues</h1>
      <input
        className='search-input'
        type='text'
        placeholder='¿Que deceas buscar?'
        name='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        className='search-button'
        type='button'
        onClick={() => handleSearch(search)}
      >
        Buscar
      </button>

    </div>
  )
}

export default SearchBar
