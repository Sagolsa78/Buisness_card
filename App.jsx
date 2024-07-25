
import Info from "./components/info"
import About from "./components/about"
import Interest from './components/interest'
import Footer from "./components/footer"

import './App.css'

function App() {
  
  return (
    <div className="main">
    <main >
      <section className='main_section'>
        <Info/>
        <About/>
        <Interest/>
        <Footer/>

      </section>
    </main>
    </div>
  )
}

export default App
