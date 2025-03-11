import { useState } from "react"
import "./App.css"
import { About } from "./components/About"
import CoffeeCard from "./components/cofeeCard"
import { Hero } from "./components/Hero"
import { useCoffee } from "./hooks/useCoffee"

function App () {
  const coffees = useCoffee()
  const [onlyAvailable, setOnlyAvailable] = useState(false)

  return (
    <>
      <main>
        <Hero />
        <section className="content">
          <About />
          <div className="coffee-filter-container">
            <p>Filters</p>
            <button
              className="coffee-filter"
              onClick={() => setOnlyAvailable(!onlyAvailable)}
            >
              Only Available
            </button>
          </div>
          <div className="coffees-list">
            {
              coffees.map((coffee, idx) => {
                if (onlyAvailable && !coffee.available) return
                return <CoffeeCard key={idx} {...coffee} />
              })
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default App
