import { useState } from 'react'
import './Header.css'
import { LINKS } from '../../const/links'

export function Header () {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = (e) => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png'
        width='80px'
      />
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
  const { text } = item
  return (
    <li>
      <a href=''>{text}</a>
    </li>
  )
}