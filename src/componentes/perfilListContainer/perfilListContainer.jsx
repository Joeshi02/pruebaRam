import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import PerfilList from '../perfilList/perfilList';
// import PerfilList from '../perfilList/perfilList';

const Profesionales = () => {
    const [datos, setDatos] = useState([]);
  
    useEffect(() => {
      const db = getFirestore();
        const profesionalRef = collection (db, "prueba")
        getDocs(profesionalRef)
        .then((snapshot) => {
            setDatos (
                snapshot.docs.map ((doc) =>({id: doc.id, ...doc.data()})))
        })
      
    }, []);
    console.log(datos);

  return (
    <div>
        <h1 className='perfil'>Nuestros Profesionales</h1>
        <PerfilList datos={datos}/>
    </div>
  );
};

export default Profesionales;
