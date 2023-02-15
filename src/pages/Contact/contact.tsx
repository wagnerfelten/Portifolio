import { Link } from "react-router-dom";
import "./style.css"

import github from "../../assets/img/github.png";
import linkdin from "../../assets/img/linkedin.png"
import email from "../../assets/img/email.png"
import whast from "../../assets/img/whatsapp.png"

const Contact = () => {
    return(
      <main className="main-container">
        <Link to="https://github.com/wagnerfelten">
            <img src={github} alt="Github" />
            <h4>Github</h4>
        </Link>

        <Link to="https://www.linkedin.com/in/wagner-rodrigues-352587b4/">
            <img src={linkdin} alt="Linkdin" />
            <h4>Linkdin</h4>
        </Link>

        <div className="telephone">
        <img src={whast} alt="" />
        <h4> whast</h4>
        </div>

        <div className="email">
        <img src={email} alt="email"/>
        <h4>E-mail</h4>
        </div>

      </main>
    )
    }
    
    export default Contact;