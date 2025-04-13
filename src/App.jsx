
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Overview from './Components/Overview/Overview'
import Sidebar from './Components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import "./App.css"
function RouterSetup() {
  return (
    <div className='app'>
      <Header />
      <Overview />
      <Content />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default RouterSetup;
