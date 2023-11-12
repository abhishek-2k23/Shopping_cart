import {FaShoppingCart} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import logo from './logo.png'
import { useSelector } from "react-redux";
import { useState } from "react";
const Navbar = () => {
  const {cart} = useSelector((state) => state);
  const [navClick,setNavClick] = useState("")
  const navigate = useNavigate();
  function clickHandler()
  {
    setNavClick("Home")
    navigate("/home");
  }
  function cartClick(){
    navigate("/Cart");
    setNavClick("Cart");
  }
  function InfoClick(){
    navigate("/Info");
    setNavClick("Info");
  }
  return (<div className="bg-[#0F172A] w-screen  text-white " >
      <div className="flex md:w-8/12 w-11/12 bg-transparent m-auto justify-between items-center h-20">
          <div onClick={clickHandler} className="cursor-pointer">
            <img src={logo} alt="logo" width="172px" height="56px" />
          </div>
          <div className="gap-8 flex ">
            <p className="hover:text-green-500 cursor-pointer" onClick={InfoClick}>Owner</p>
            <p className="hover:text-green-500 cursor-pointer" onClick={clickHandler}>Home</p>
            <div className="relative">
              {cart.length > 0 && <div className="absolute w-5 h-5 rounded-full bg-green-500 -right-2 -top-1 animate-bounce flex justify-center items-center text-sm">{cart.length}</div>}
            <FaShoppingCart className={`text-3xl hover:text-green-500 cursor-pointer active:text-green-500 ${navClick === "Cart" ? ("text-green-500"):("text-white")}`} onClick={cartClick}/>
            </div>
          </div>
      </div>
  </div>)
};

export default Navbar;
