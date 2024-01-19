import { Link } from "react-router-dom";

export default function Perfil({ item }) {
  return (
    <div className="perfiles">
      <div className="card">
        <Link to={`/perfiles/${item.id}`}>
          <img className="imgEdt" src={item.img} alt="foto profesional" />
          <h5>{item.nombre}</h5>
          <p>Especialidad: {item.especialidad}</p>
        </Link>
      </div>
    </div>
  );
}











