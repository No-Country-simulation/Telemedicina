import { Button } from "@mui/material"
import { Link } from "react-router-dom"


const DiagnosticsPatient = () => {
  return (
    <div className="mt-2  bg-red-200 md:col-start-4 md:col-end-6 ">Resumen y Diagnostico

    <Link to={'historial-medico/diagnosticos'}>
    <Button className="bg-blue-300">Ver Diagnosticos</Button>
    </Link>
    </div>
  )
}

export default DiagnosticsPatient