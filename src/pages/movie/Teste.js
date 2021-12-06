import { useState } from 'react'

export function Test() {
  const [search, setSearch] = useState()

  return (
    <div>
      <h1>ASSISTA ONLINE</h1>
      <h2>Pesquisar filme no YouTube</h2>

      <input type="text" onChange={e => setSearch(e.target.value)} />

      <button>
        <a
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

export default Test
