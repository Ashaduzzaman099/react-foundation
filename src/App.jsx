import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserCard from "./components/UserCard";

function App() {
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
        
      </div>
    </>
  );
}

export default App;
