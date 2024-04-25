import { useState } from 'react'
import './Header.css'
import { LINKS } from '../../const/links'
import { Link, NavLink } from 'react-router-dom'

export function Header () {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = (e) => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png'
          width='80px'
        />
      </Link>
      <Menu
        items={LINKS}
        showMenu={showMenu}
      />
      <button
        id='hamburguer-btn'
        onClick={handleShowMenu}
      >
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'
          alt='Hamburger button'
          width='30px'
        />
      </button>
    </header>
  )
}

function Menu ({ items, showMenu }) {
  return (
    <nav className={!showMenu ? 'hidden' : ''}>
      <ul>
        {
            items.map((item) =>
              <MenuItem
                item={item}
                key={item.id}
              />)
          }
      </ul>
    </nav>
  )
}

function MenuItem ({ item }) {
  const { text, url } = item
  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive }) => isActive ? 'active' : ''}
        state={{ estado: 'Hola' }}
      >{text}
      </NavLink>
    </li>
  )
}
