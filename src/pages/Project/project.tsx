import { Link } from "react-router-dom";
import Bisco from "../../assets/img/biscoito.png";

const Project = () => {
return(
    <main className="main-container">
      <div className="Bisco">
        <img src={Bisco} alt="img-biscoito" />
        <Link to="https://wagnerfelten.github.io/BiscoitoDaSorte/">
        <h3>Projeto Biscoito da sorte</h3>
        </Link>
        <p>JS - CSS - HTML</p>
      </div>

       
    </main>
)
}

export default Project;