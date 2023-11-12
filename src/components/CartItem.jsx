import {BsCurrencyDollar} from "react-icons/bs"
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
const CartItem = ({item}) => {
  const dispatch = useDispatch();
  function removeItem()
  { 
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }
  const description = (item.description).substring(0,81); 
  return (
    <div className="w-10/12 bg-white flex justify-between border-b-2 border-slate-800 pb-7 mb-5">
      <div className="flex justify-evenly gap-10">
        <img src={item.image} alt="img" className="h-[232px] max-w-[250px]"/>
        <div className="flex flex-col gap-5 text-left">
            <p className="text-slate-700 text-lg font-semibold">{item.title}</p>
            <p className="text-md font-thin"> {description}....</p>
            <div className="flex justify-between">
              
              <div className="flex items-center text-green-500 font-bold"><BsCurrencyDollar></BsCurrencyDollar>{item.price}</div>
              
            <div className="w-10 h-10 rounded-full bg-red-300 hover:bg-red-400 flex justify-center items-center" onClick={removeItem}>
              {" "}
              <MdDelete></MdDelete>
            </div>
            </div>
        </div>
      </div>

    </div>
  )
};

export default CartItem;
