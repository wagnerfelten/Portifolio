import imgChoro from "../../assets/img/bighead.svg";
import "./style.css"

const errorPage = () => {
    return(
        <div className="content-container">
            <h1>ERROR 404 </h1>

            <img src={imgChoro} alt="Boneco cancelado" />
        </div>
    )
}

export default errorPage;