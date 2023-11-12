import { useDispatch, useSelector } from "react-redux";
import {BsCurrencyDollar} from "react-icons/bs"
import {add,remove} from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";
const Product = ({post}) => {
  const {cart}  = useSelector((state)=>state)
  const dispatch = useDispatch();
  const title = (post.title).substring(0,17);
  const description = (post.description).substring(0,50); 
  function addItem()
  { 
    console.log("item added");
    dispatch(add(post));
    toast.success("Item Added");
    
    console.log(cart);
  }
  function removeItem()
  {
    dispatch(remove(post.id));
    toast.error("Item Removed");
  }
  return (
    
        <div className="w-[264px] h-[374px] bg-white shadow-lg border border-slate-300 rounded-md flex flex-col items-center hover:drop-shadow-2xl hover:transition-all hover:scale-105 hover:duration-500 pt-4">
          <div className="text-[#374151] font-bold">{title}...</div>
          <div className="text-[10px]  text-[#9CA3AF] text-left m-auto w-7/12">{description}...</div>
          <div className="h-[180px] flex  justify-center items-center m-auto">
            <img src={post.image} alt="img" className="h-[180px]" />
          </div>
          <div className="flex justify-between items-center pb-3 gap-10">
            <div className="flex items-center text-green-500 font-bold"><BsCurrencyDollar></BsCurrencyDollar>{post.price}</div>
            <div>
              {
                cart.some((p)=>p.id === post.id) ? (<button onClick={removeItem} className="border-2 border-slate-800 rounded-2xl px-5 py-1 focus:bg-slate-800 focus:text-white">Remove Item</button>) :(<button onClick={addItem} className="border-2 border-slate-800 rounded-2xl px-5 py-1 focus:bg-slate-800 focus:text-white">Add To Cart</button>)
              }
            </div>
          </div>
        </div>

    )
};

export default Product;
