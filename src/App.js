import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import  {useState}  from 'react';
import * as React from "react";

import * as ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter }  from "react-router-dom";
import { Switch }  from "react-router-dom";
 
import {
  createBrowserRouter,
  RouterProvider,
  Route, Routes, 
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert , setAlert]= useState(null)


 
   const toggleMode  = () => {
          if(mode==='light'){
          setMode('dark');
           document.body.style.backgroundColor = 'grey';
           document.body.style.color = 'white';
           showAlert("Dark mode has been enabled" , "success");
          
            
          document.title="Textutils - Dark mode is enabled"
            
           setTimeout(()=>{
 
               
          document.title="Textutils - Home"

            },2500)
}
          
          
          
          
          
          
          else{
             setMode('light');
             document.body.style.backgroundColor = 'white';
             document.body.style.color = 'black';
             showAlert("Light mode has been enabled" , "success")         
             document.title="Textutils - Light mode is enabled"
            
             setTimeout(()=>{
   
                 
            document.title="Textutils - Home"
  
              },2500)
            }
}

    const showAlert = (message , type )=>{
          setAlert({
                  msg:message , type:type
          })
          setTimeout(()=>{
                setAlert(null);    

          },2500)
    }
 
  return (<>
 
     <Router>
 
    <Navbar title="TextUtils" aboutText="About Text" mode={mode} toggleMode={toggleMode} />
 
 
    <Alert alert={alert}/>

    {/* <About/> */}
    {/* <Textform  mode={mode} showAlert={showAlert} /> */}
     <div className="container">
     <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<Textform  mode={mode} showAlert={showAlert} /> }/>
    </Routes>


     </div>

    </Router>

  </>);
 }

export default App;


