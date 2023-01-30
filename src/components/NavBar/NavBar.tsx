import "../NavBar/style.css"


function Nav() {
  return (
    <header className="header-container">
      <div>
        <h1>Bem Vindo ao meu portifólio</h1>
      </div>

      <nav className="nav-container">
        <a href="/Projector">Projetos</a>
        <a href="/contact">Contato</a>
      </nav>
    </header>
  );
}

export default Nav;
