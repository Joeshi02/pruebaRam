import { InlineWidget } from "react-calendly"


export default function Detalle  ({datos})  {
    
    return (
            <div className="perfil">

                <div className="card">
                    <div className="card-content">
                        <img src={datos.img} alt={datos.nombre} className="imgEdt" />
                        <h2>{datos.nombre}</h2>
                        <h4 className="margenes">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima iure quasi, ea in quis sed? Veniam quidem magnam distinctio inventore quasi ratione ea vero! Voluptatibus ipsam voluptates quaerat harum quisquam.</h4>
                        <hr/>
                        <h3 className="margenes">{datos.especialidad}</h3>
                        <span className="habilidad margenes">habilidad</span>
                    </div>
                    <div className="margenes">
                        <InlineWidget url="https://calendly.com/joaco-escobar-h/prueba"
                        
                        pageSettings={{
                            hideEventTypeDetails: true,
                            hideGdprBanner: true,
                            hideLandingPageDetails: true
                        }}/>
                        
                    </div>
                </div>
            </div>
    )
}
