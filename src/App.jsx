import Navbar from "./components/Navbar";
import { useState } from "react";
import UserCard from "./components/UserCard";

const user = ["Ashik khan", "Shakila Akter", "Rafiq", "Karim", "Jamal"];

function App() {
  const [count, setCount] = useState(0);
  const userList = [
    {
      id: 1,
      name: "Ashik khan",
      role: "Admin",
    },
    {
      id: 2,
      name: "Shakila Akter",
      role: "User",
    }
  ]
  return (
    <>
      <div className="">
        <div>
          <Navbar />
        </div>
        <div className="flex justify-center items-center">
         {
          userList.map((u)=>(
            <UserCard key={u.id} name={u.name} role={u.role}/>
          ))
         }
          
        </div>
        <div>
          <h1>{count}</h1>
          <button
            className="text-2xl bg-black mr-2 text-blue-500 px-5 py-2 rounded-xl hover:bg-black hover:text-white transition duration-300"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className="text-2xl bg-black text-blue-500 px-5 py-2 rounded-xl hover:bg-black hover:text-white transition duration-300"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
        <div className="newSection">
          {
            user.map((u)=>(
              <h1>{u}</h1>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
