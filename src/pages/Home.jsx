import Navbar from "../components/Navbar";
import { useState } from "react";
import UserCard from "../components/UserCard";
import InputForm from "../components/InputForm";
import UseApi from "../components/UseApi";

const user = ["Ashik khan", "Shakila Akter", "Rafiq", "Karim", "Jamal"];
const products = [];

function Home() {
  const [count, setCount] = useState(0);
  const userList = [
    {
      id: 1,
      name: "Ashik khan",
      email: "ashik@example.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Shakila Akter",
      email: "shakila@example.com",
      role: "User",
    },
  ];
  return (
    <>
      <div className="">
        <div>
          <Navbar />
        </div>
        <div className="flex mt-5 p-5 justify-center items-center">
          {userList.map((u) => (
            <UserCard key={u.id} name={u.name} email={u.email} role={u.role} />
          ))}
        </div>
        <div className="mt-5 p-4">
          <InputForm />
        </div>
        <div className="mt-5 p-4">
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
          ></button>
        </div>
        <div className="mt-5 p-5">
          {user.map((u) => (
            <h1>{u}</h1>
          ))}
          {/* If products exist, display them; otherwise, show a message */}
          <h1 className="text-2xl bold">Product List</h1>
          {products.length === 0 ? (
            <h1>No products available</h1>
          ) : (
            products.map((p) => <h1>{p}</h1>)
          )}
        </div>

        <div className="mt-5 p-5">
          <h1 className="text-2xl mt-5">Fatch Data From Api</h1>
          <UseApi />
        </div>
      </div>
    </>
  );
}

export default Home;
