import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbarlist from "./componentes/navbar/navbarList"
import Home from "./componentes/home/home"
import Profesionales from "./componentes/perfilListContainer/perfilListContainer"
import DetalleListContainer from "./detalleListContainer/detalleListContainer"
import Admin from "./componentes/admin/admin"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbarlist />
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/perfiles" element = {<Profesionales/>} />
          <Route exact path="/perfiles/:datosId" element={<DetalleListContainer/>}/>
          <Route exact path="/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
