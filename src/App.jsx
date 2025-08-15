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
import Cyber from "./components/cyber";
import AI from "./components/ai"
import DATASC from "./components/datas"
import OS from "./components/os"
import BIGDATA from "./components/big";
import DEEPLER from "./components/deep"

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


                                       <Route path="/Cyber" element={
                <>
                <Cyber/>                
                </>
              }/>

                                       <Route path="/AI" element={
                <>
                <AI/>                
                </>
              }/>

                                    <Route path="/DATASC" element={
                <>
                <DATASC/>                
                </>
              }/>

                                 <Route path="/BIGDATA" element={
                <>
                <BIGDATA/>                
                </>
              }/>

                                 <Route path="/DEEPLER" element={
                <>
                <DEEPLER/>                
                </>
              }/>

                                 <Route path="/OS" element={
                <>
                <OS/>                
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
