import { Button } from "@mui/material"
import { Link } from "react-router-dom"


const ScheduleAppoinmentsPatient = () => {
  return (
    <div className="mb-2">Programa tu proxima cita
      <Link to={'programar-cita'}>
      <Button className="bg-blue-300">Programar cita</Button>
      </Link>
    </div>
  )
}

export default ScheduleAppoinmentsPatient