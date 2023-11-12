import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Info from "./pages/Info.jsx";
import { Routes,Route } from "react-router-dom";
const App = () => {
  return(
      <div className="text-center overflow-x-hidden mb-5">
        <div className="mb-5">
          <Navbar></Navbar>
        </div>
        <Routes>
          <Route path="/" element={<Info></Info>}/>
          <Route path="/home" element={<Home></Home>}/>

          <Route path="/Cart" element={<Cart></Cart>}/>
          <Route path="/Info" element={<Info></Info>}/>
        </Routes>
      </div>
    );
};

export default App;
