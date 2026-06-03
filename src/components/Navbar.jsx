import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-green-500 p-3 text-bold text-white">
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}

export default Navbar;
