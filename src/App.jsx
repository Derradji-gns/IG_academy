import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'
import Header from './components/header'
import Board from './components/board'
import Stat from './components/stat'
import Join from './components/join'
import Footer from './components/footer'
import Form from "./components/form";
import Auth from "./components/auth";
import Fields from "./components/fields";
import Feed from "./components/feed";
import Page from "./components/page";
import Contr from "./components/contr";
import Docs from "./components/docs";

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
              <Footer/>
              
              </>
            }
              />

            <Route  path="/Form" element={
              
              <>
      
      <Form/>
      </>
      
            }/>            <Route path="/Auth" element={
              <>
              <Auth/>
                </>
            } />

                        <Route  element={
              <>
              <Page/>
              </>   }>




            <Route path="/Fields" element={
              <>
              <Fields/>
              </>
            }/>



            <Route path="/Feed" element={
              <>
              <Feed/>
              </>
            }/>
                          <Route path="/Contr" element={
                <>
                <Contr/>
                </>
              }/>
                                          <Route path="/Docs" element={
                <>
                <Docs/>                
                </>
              }/>

              </Route>

              <Route path="/Page" element={
                <>
                <Page/>                
                </>
              }/>

         </Routes>
         
        </Router>
       
    </div>
  )
}

export default App
