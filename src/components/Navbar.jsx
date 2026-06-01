function Navbar() {
  return (
    <>
      <nav className="bg-green-500 p-3 text-bold text-white">
        <ul className="flex justify-center items-center ">
          <li className="text-sm p-3 hover:bg-black  transition duration-300">
            Home
          </li>
          <li className="text-lg p-3 hover:bg-black transition duration-300">
            About
          </li>
          <li className="text-xl p-3 hover:bg-black  transition duration-300">
            Contact
          </li>
          <button className=" bg-white text-blue-500 px-5 py-2 rounded-xl hover:bg-black hover:text-white transition duration-300">
            Click Me
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
