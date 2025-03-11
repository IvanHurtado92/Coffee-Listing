import "./App.css"
import { About } from "./components/About"
import { Hero } from "./components/Hero"

function App() {
  return (
    <>
      <main>
        <Hero />
        <section className="content">
          <About />

          {/* Contenido del Iván */}
        </section>
      </main>
    </>
  )
}

export default App
