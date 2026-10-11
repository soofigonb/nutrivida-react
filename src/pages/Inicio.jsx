import Hero from '../components/Hero.jsx'
import Nosotros from '../components/Nosotros.jsx'
import ListaNutricionistas from '../components/ListaNutricionistas.jsx'
import PlanesServicios from '../components/PlanesServicios.jsx'
import ListaBlogs from '../components/ListaBlogs.jsx'

function Inicio() {
  return (
    <main className="inicio-main">
      <Hero />
      <Nosotros />
      <ListaNutricionistas />
      <PlanesServicios />
      <ListaBlogs />
    </main>
  )
}

export default Inicio