import Hero from '../components/Hero.jsx'
import Nosotros from '../components/Nosotros.jsx'
import ListaNutricionistas from '../components/ListaNutricionistas.jsx'

function Inicio() {
  return (
    <main className="inicio-main">
      <Hero />
      <Nosotros />
      <ListaNutricionistas />
    </main>
  )
}

export default Inicio