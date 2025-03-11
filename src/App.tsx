import CofeeCard from "./components/cofeeCard"
import './App.css'

function App() {

  return (
    <>
      <CofeeCard coffeeName='Capuchino' price={5.2} reviews={3.4} votes={140} disponible={true} url = "https://th.bing.com/th/id/R.618d65b48109afab15e8c63ead59f78b?rik=U121Gcu9DBouow&riu=http%3a%2f%2fokoffe.ru%2fwp-content%2fuploads%2f2018%2f06%2fNapitok-Latte.jpg&ehk=VKMwVmTRgefRc39Qmbvy%2bSvEosoC%2fCBk24bQp%2bBvWJw%3d&risl=&pid=ImgRaw&r=0"></CofeeCard>
    </>
  )
}

export default App
