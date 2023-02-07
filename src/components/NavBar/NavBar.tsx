import "../NavBar/style.css";

import { Link} from "react-router-dom";


function Nav() {
  
  return (
    <header className="header-container">
      <div>
        <h1 >Welcome to my portfolio</h1>
      </div>

      <nav className="nav-container">
        <Link to="/">Home</Link>
        <Link to="/Project">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
}

export default Nav;
