import "./App.css"

import Banner from './assets/coffee_banner.jpg'

function App() {
  return (
    <>
      <main>
        <section className="hero">
          <h1>Coffee Listing</h1>
          <img src={Banner} alt="Coffee Listing" />
        </section>
      </main>
    </>
  )
}

export default App
