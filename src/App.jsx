
import './App.css'
import Header from './components/Header/Header'
import Overview from './components/Overview/Overview'
import Datatable from './components/Datatable/Datatable'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <div className='container'>
      <Header/>
      <Overview/>
      <Datatable/>
      <Sidebar/>
      <Footer/>
   
    </div>

  )
}

export default App
