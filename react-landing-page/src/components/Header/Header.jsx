import "./Header.css"

const links = [
    {
        id: crypto.randomUUID(),
        text: "Sobre Nosotros"
    },
    {
        id: crypto.randomUUID(),
        text: "Servicios"
    },
    {
        id: crypto.randomUUID(),
        text: "Contactenos"
    }
]

export function Header(){
    /* ! Hola */
    return(
        <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" 
             width="80px" />
        <nav>
            <ul>
                {
                    links.map(({ id, text}) => {
                        return (
                            <li key={id}>{text}</li>
                        )
                    })
                }
            </ul>
        </nav>
        <button id="hamburguer-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" 
                alt="Hamburger button"
                width="30px" />
            </button>
    </header>
    )
}