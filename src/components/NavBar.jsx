import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
            <header className="header">
                <div className="header__container">
                    <div className="header__Brand">
                    <h1>Chrono-store</h1>
                    </div>
                    <div>
                    <nav className="header__navBar">
                        <a href="">Plataforma</a>
                        <a href="">RPG</a> 
                        <a href="">Carreras</a>
                        <a href="">Retro</a>
                        <a href="">Acción</a>
                    </nav>
                    </div>
                    </div>
                    <CartWidget />
            </header>
            
    )
}

export default NavBar