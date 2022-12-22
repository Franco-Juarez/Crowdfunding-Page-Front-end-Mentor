import AboutSection from './components/aboutSection'
import { FrontCard, CountCard } from './components/cards'
import Navbar from './components/navBar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <FrontCard />
      <CountCard />
      <AboutSection/>
    </div>
  )
}

export default App
