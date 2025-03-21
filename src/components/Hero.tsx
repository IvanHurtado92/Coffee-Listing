import Banner from "../assets/coffee_banner2.jpg"

export function Hero() {
  return (
    <section className='hero'>
      <h1>Coffee Listing</h1>
      <img
        src={Banner}
        alt='Coffee Listing'
      />
    </section>
  )
}
