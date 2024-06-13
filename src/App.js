
import About from "./Pages/About";
import Contactus from "./Pages/Contactus";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Nopage from "./Pages/Nopage";
import Services from "./Pages/Services";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


  
const  App = () =>{
  

  // const [values, setValues] = useState("nothinf");
  return (
    
    // <main>
    //   <Navbar />
    //   <Home para="this is a paragraph" />
    //   <About />
    //   <Services />
    //   <Contactus />
    // </main>
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Home/>} />
    //     <Route path="/About" element={<About />} />
    //     <Route path="/Services" element={<Services />} />
    //     <Route path="/Contactus" element={<Contactus />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="Services" element={<Services/>} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;