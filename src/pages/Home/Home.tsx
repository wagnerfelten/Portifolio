import { Link } from "react-router-dom";
import TypeIt from "typeit-react";
import imgHome from "../../assets/img/eu.svg";
import "./style.css";

function Home() {
  return (
    <div className="home-container">
      
        <div className="animationName">
          <TypeIt
            options={{
              strings: ["This will be typed!"],
              loop: true,
              waitUntilVisible: true,
            }}>
            <h3>Wagner Felten Rodrigues</h3>
          </TypeIt>
        </div>
        <div className="content">
        <p>
          I started programming 1 year and a half ago with HTML and CSS. <br />
          Javascript currently studying 6 months just with React. I study at
          Rocketseat FullStack school and at DevSuperior studying React-js.
          <br />I am looking for an opportunity to show my skills.
        </p>

        <Link to={""}>Academic Training</Link>
      </div>
      <div className="myAnimation">
        <img src={imgHome} alt="imgDeMim" />
      </div>
    </div>
  );
}

export default Home;
