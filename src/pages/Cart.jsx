import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import {BsCurrencyDollar} from "react-icons/bs"
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("in the Cart ", cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(Math.floor(cart.reduce((acc, curr) => acc + curr.price, 0)));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex w-11/12 md:w-8/12 m-auto justify-evenly px-1">
          <div>
            {cart.map((item, index) => (
              <CartItem item={item} key={item.id} itemIndex={index}></CartItem>
            ))}
          </div>
          <div className="w-6/12 flex flex-col justify-between">
            <div className="flex items-start flex-col">
              <div className="text-3xl text-green-800 font-semibold">
                {" "}
                Your Cart{" "}
              </div>
              <div className="text-4xl text-green-900 font-semibold uppercase">
                {" "}
                Summary{" "}
              </div>
              <p className="my-3">
                <span className="font-bold text-lg ">
                  Total Item :{" "}
                  <span className="font-semibold">{cart.length}</span>
                </span>{" "}
              </p>
            </div>
            <div className="flex justify-end flex-col">
              <div className="mb-3">
                <p className="font-bold text-lg flex items-center text-slate-700">
                  Total Amount : {" "} <span className="font-extrabold text-black"><BsCurrencyDollar></BsCurrencyDollar></span>
                  <span className="font-bold text-xl text-black ">{totalAmount}</span>
                </p>
              </div>
              <div className="self-stretch bg-green-700 hover:bg-slate-100 hover:text-green-700 transition-all duration-500 py-2 rounded-md font-bold text-white text-lg capitalize tracking-wider border-2 border-green-500 cursor-pointer">
                Checkout Now
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[80vh] justify-center items-center flex-col gap-2">
          <p>Your Cart is empty!</p>
          <NavLink to="/">
            <div className="bg-green-500 text-white rounded-md font-semibold px-6 py-2 cursor-pointer">
              Shop Now
            </div>{" "}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
