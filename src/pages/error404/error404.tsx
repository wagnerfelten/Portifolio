import { Link } from "react-router-dom";
import imgChoro from "../../assets/img/bighead.svg";
import "./style.css";

const errorPage = () => {
  return (
    <div className="content-container">
      <h1>ERROR 404 </h1>

      <img src={imgChoro} alt="Boneco cancelado" />

      <div>
        <Link to="/"> To go back</Link>
      </div>
    </div>
  );
};

export default errorPage;
