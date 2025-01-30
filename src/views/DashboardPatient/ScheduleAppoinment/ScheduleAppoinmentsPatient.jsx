// import { Button } from "@mui/material"
// import { Link } from "react-router-dom"
import Calendar from '../../../assets/calendario.jpg'


const ScheduleAppoinmentsPatient = () => {
  return (
    <div className="mb-2 md:col-start-1 md:col-end-2 px-3 py-4">
      <h2 className='secondHeaders text-slate-900 text-center md:text-left md:text-sm py-3 md:py-0'>Programa tu proxima cita</h2>
      <figure>
        <img src={Calendar} alt="imagen calendario" />
      </figure>
     
    </div>
  )
}

export default ScheduleAppoinmentsPatient



{/* <Link to={'programar-cita'}>
<Button className="bg-blue-300">Programar cita</Button>
</Link> */}