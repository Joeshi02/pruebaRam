import { doc, getDoc, getFirestore } from "firebase/firestore";
import Detalle from "../componentes/detalle/detalle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function DetalleListContainer ({}) {
    const [datos , setDatos] = useState ([]);
    const {datosId} = useParams ()
    
    useEffect (() => {
        const db = getFirestore()
        const detalleRef = doc(db, "prueba", datosId)
        getDoc(detalleRef).then((snapshot) => {
            setDatos({id:snapshot.id, ...snapshot.data()})
        })
    },[datosId])
    console.log(datos);
    return (
        <div>
            <Detalle datos= {datos}/>
        </div>
    )

}