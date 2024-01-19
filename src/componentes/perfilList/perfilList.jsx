import Perfil from "../perfiles/perfiles";

export default function PerfilList ({datos})  {
    return(
        <div>
            {datos.map((item) => (
                <Perfil key={item.id} item={item}/>
                
        ))}
        </div>
    )
}