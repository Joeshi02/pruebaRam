import { Link } from "react-router-dom";

// JSX
const Navbarlist = () => {
    return (
      <nav className="navBar">
        <Link to="/"><img className="logo" src="imagenes/RAM.Color.png" alt="logo" /> </Link>
        <ul className="navBar">
          <li className="margenes"><Link className="fontNav" to="/">Inicio</Link></li>
          <li className="margenes"><Link className="fontNav" to="/perfiles">Profesionales</Link></li>
          <li className="margenes"><Link className="fontNav" to="/">Nosotros</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbarlist;
  