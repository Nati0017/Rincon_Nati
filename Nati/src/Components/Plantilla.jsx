import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"






const Plantilla = () => {
    return ( 
        <> 
        <NavBar/>
        <Outlet/>
        </>

    )

}


export default Plantilla