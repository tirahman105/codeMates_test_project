import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" mt-4 text-white font-bold  h-[80px] bg-blue-500 rounded-[600px] mx-auto flex justify-evenly items-center">
      <div className="  ">
        <ul className="flex items-center gap-6">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About Us</li>
          </Link>

          <Link to="/shop">
            <li> Shop</li>
          </Link>

          <Link to="/allfruits">
            <li>All Fruits</li>
          </Link>
        </ul>
      </div>

      <div>
        <h1 className="text-4xl">Fruit Burst! Yaaammee</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search"
          className="rounded-[600px] px-8 py-4"
        />
      </div>
    </div>
  );
};

export default Navbar;
