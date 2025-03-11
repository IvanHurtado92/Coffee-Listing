import "./App.css"
import { About } from "./components/About"
import CoffeeCard from "./components/cofeeCard"
import { Hero } from "./components/Hero"
import { useCoffee } from "./hooks/useCoffee"

function App () {
  const coffees = useCoffee()

  return (
    <>
      <main>
        <Hero />
        <section className="content">
          <About />
          {
            coffees.map((coffee, idx) => (
              <CoffeeCard key={idx} {...coffee} />
            ))
          }
          {/* Contenido del Iván */}
        </section>
      </main>
    </>
  )
}

export default App
