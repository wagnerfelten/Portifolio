import "../NavBar/style.css";
import wfr from "../../assets/img/logo-wfr.svg";
import { Link} from "react-router-dom";


function Nav() {
  
  return (
    <header className="header-container">
      <div>
        <img src={wfr} alt="" />
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
