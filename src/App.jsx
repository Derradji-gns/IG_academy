import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'
import Header from './components/header'
import Board from './components/board'
import Stat from './components/stat'
import Join from './components/join'
import Footer from './components/footer'
import Form from "./components/form";

function App() {
 

  return (      
     <div>
      <Router>
          
          
          
          <Routes>
            <Route path="/IG_academy" element={
              <>
              <Nav/>
              <Header/>
              <Board/>
              <Stat/>
              <Join/>
              
              </>
            }
              />

            <Route  path="/Form" element={
              
              <>
      
      <Form/>
      </>
            }/>
         </Routes>
         <Footer/>
        </Router>
       
    </div>
  )
}

export default App
