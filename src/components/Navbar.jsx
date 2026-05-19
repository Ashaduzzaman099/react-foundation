
function Navbar() {
  return (
   <nav className=" rounded-3xl  bg-red-200 p-3 text-bold text-white">
        <ul className="flex justify-center items-center">
            <li className="text-sm p-3 hover:bg-green-500 transition duration-300">Home</li>
            <li className="text-lg p-3 hover:bg-green-500 transition duration-300">About</li>
            <li className="text-xl p-3 hover:bg-green-500 transition duration-300">Contact</li>
        </ul>
   </nav>
  )
}

export default Navbar