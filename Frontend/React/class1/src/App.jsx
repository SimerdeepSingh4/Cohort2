import Navbar from './components/navbar'
import Sections from './components/Sections'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <Sections>
      <h1>Halku re</h1>
      <h1>Batman re</h1>
       </Sections>
      <Footer />
    </div>
  )
}

export default App