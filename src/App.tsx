import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import './index.css'

import { Outlet} from "react-router-dom";

function App() {

  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
