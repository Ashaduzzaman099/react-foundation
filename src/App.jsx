import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="">
       <div>
        <Navbar/>
      </div>
      <div>
        <Sidebar/>
      </div>
      <div className="w-full h-screen mt-10 text-white bg-black">
        <h1 className="text-white text-9xl">Hello React js</h1>
      </div>
        
      </div>
    </>
  );
}

export default App;
