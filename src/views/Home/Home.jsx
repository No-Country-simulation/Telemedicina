import Presentacion from "../../../../telemedica/src/comp/presentacion"
import Profesionales from "../../../../telemedica/src/comp/profesionales"
import Servicios from "../../../../telemedica/src/comp/servicios"
import ShowDoctors from "./components/ShowDoctors"
import Testimonials from "./components/Testimonials/Testimonials"

const Home = () => {
  return (
    <>
    <Presentacion/>
    <Profesionales/>
    <Servicios/>
    <Testimonials/>
    <ShowDoctors/>
    </>
  )
}

export default Home