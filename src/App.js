
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';

import Header from "./component/Header";
import Signup from "./component/Signup";
import Login from "./component/Login";


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
        <Routes>
          
          <Route element={<Login></Login>} path="login" />
          <Route element={<Signup />} path="Signup" />  
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;