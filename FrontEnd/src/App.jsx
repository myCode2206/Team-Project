import React from 'react'
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from './Component/Footer/Footer'
import Login from './Component/Login/Login';

function App() {
  return (
     <Router>
     <Login/>
     {/* <Footer/> */}
    </Router>
  )
}

export default App