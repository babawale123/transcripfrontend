import './asset/js/jquery.min.js';
import './asset/css/bootstrap.min.css'
import './asset/css/styles.css'
import './asset/js/bootstrap.min.js'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

function App() {

  return (
    <>
    
      <Routes>
      <Route path='/' exact element = {<Login />} />
      <Route path='/home' exact element = {<Home />} />
      </Routes>
    </>
  )
}

export default App
