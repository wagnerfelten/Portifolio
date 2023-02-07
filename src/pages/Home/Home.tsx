import { Link } from "react-router-dom";
import imgHome from "../../assets/img/eu.svg";
import "./style.css";




function Home() {
  
  return (
    <div className="home-container">
      <div className="content">
        <p>
          My name is , I started programming 1
          year and a half ago with HTML and CSS. <br />
          Javascript currently studying 6 months just with React. I study at
          Rocketseat FullStack school and at DevSuperior studying React-js.
          <br />I am looking for an opportunity to show my skills.
        </p>

        <Link to={""}>Academic Training</Link>
      </div>
      <div>
        <img src={imgHome} alt="imgDeMim" />
      </div>
    </div>
  );
}

export default Home;
