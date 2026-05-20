import Navbar from "./components/Navbar";
import {useState} from "react";
import UserCard from "./components/UserCard";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="">
       <div>
        <Navbar/>
      </div>
      <div className="flex justify-center items-center">
        <UserCard name="Ashik khan" role="Admin"/>
        <UserCard name="Shakila Akter" role="User"/>
      </div>
      <h1>{count}</h1>
      <button className="bg-black text-blue-500 px-5 py-2 rounded-xl hover:bg-black hover:text-white transition duration-300" onClick={()=> setCount(count+1)}>+</button>
        
      </div>
    </>
  );
}

export default App;
