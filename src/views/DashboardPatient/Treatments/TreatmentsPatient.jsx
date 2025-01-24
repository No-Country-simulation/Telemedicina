import { Button } from "@mui/material"
import { Link } from "react-router-dom"


export const TreatmentsPatient = () => {
  return (
    <div>Tratamientos y Recetas
      <Link to={'historial-medico/tratamientos'}>
      <Button className="bg-blue-300">Ver tabla de tratamientos</Button>
      </Link>
    </div>
  )
}
