// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type


    })
    setTimeout(() => {
      setAlert (null)
      
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark Mode has been Enabled","success")
      document.title =`Text Utility - Dark`
    }
    else{
      setMode("light")
      document.body.style.backgroundColor ='white'
      showAlert("Light Mode has been Enabled", "success")
      document.title =`Text Utility - Light`
    }
  }
  // const txtCol = ()=>{
  //   if(col==='dark'){
  //     setCol('light')
  //   }
  //   else{
  //     setCol("dark")
  //   }
  // }
  return (
    
    <>
    {/* <Router> */}
      
      <Navbar title="TxtU" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <h1>Shri GAnesh</h1> */}
      <div className="container my-3">
         
         {/* <Switch>
          <Route exact path="/about"> */}
              {/* <About/> */}
          {/* </Route>
          <Route exact path="/"> */}
              <TextForm  heading="Enter Your Text to analyze" mode={mode} showAlert={showAlert}/>
          {/* </Route>
        </Switch> */}
      </div>
      
      
    
{/* </Router> */}
</>
  );
}

export default App;
