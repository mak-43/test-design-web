import { Routes,Route } from "react-router-dom";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";


function App() {


  return (
    <div className="">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
