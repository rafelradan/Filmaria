import { Link } from 'react-router-dom'

import './header.css'

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Filmaria
      </Link>

      <div>
        <Link className="favoritos" to="/searchonyoutube">
          Procurar no YouTube
        </Link>

        <Link className="favoritos" to="/favorits">
          Favoritos
        </Link>
      </div>
    </header>
  )
}
