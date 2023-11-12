import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  //calling the api
  async function fetchData() {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
    } catch (error) {
      console.log("Error encounterd");
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-11/12 md:w-9/12 m-auto min-h-screen">
      {isLoading ? (
        <Spinner></Spinner>
      ) : posts.length > 0 ? (
        <div className="flex flex-wrap justify-evenly gap-y-10 ">
          {posts.map((post) => (
            <Product
              key={post.id}
              post={post}
              className="hover:drop-shadow-2xl"
            ></Product>
          ))}
        </div>
      ) : (
        <div>Data Not Found</div>
      )}
    </div>
  );
};

export default Home;
