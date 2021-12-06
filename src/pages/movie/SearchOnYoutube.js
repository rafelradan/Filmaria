import { useState } from 'react'

export function SearchOnYoutube() {
  const [search, setSearch] = useState()

  return (
    <div className="pgYT">
      <h1>ASSISTA ONLINE</h1>
      <h2>Pesquisar filme no YouTube</h2>

      <input
        className="inpYT"
        placeholder="Digite o nome do filme"
        type="text"
        onChange={e => setSearch(e.target.value)}
      />

      <button className="btnYT">
        <a
          className="aYT"
          target="_blank"
          rel="noreferrer"
          href={`https://youtube.com/results?search_query=${search} Filme completo`}
        >
          {' '}
          Pesquisar
        </a>
      </button>
    </div>
  )
}

export default SearchOnYoutube
