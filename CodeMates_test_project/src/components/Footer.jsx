import React from "react";

const Footer = () => {
  return (
    <div className="h-[400px]  bg-black mx-auto mt-48  text-white fle">
      <div className=" py-28">
        <h1 className="text-4xl text-center font-bold">Fruit Burst</h1>
        <div className="flex flex-col items-center justify-center gap-8 mt-8">
          <ul className="flex gap-10">
            <li>Home</li>
            <li>About Us</li>
            <li>Shop</li>
            <li>All Fruits</li>
            <li>Support</li>
            <li>My Account</li>
          </ul>

          <div className="flex gap-10">
            <div className="p-2 text-black h-8  bg-white w-8 rounded-full">Fb</div>
            <div className="p-2 text-black h-8 bg-white w-8 rounded-full">Ig</div>
            <div className="p-2 text-black h-8 bg-white w-8 rounded-full">X</div>
            <div className="p-2 text-black h-8 bg-white w-8 rounded-full">Yt</div>
            <div className="p-2 text-black h-8 bg-white w-8 rounded-full">A</div>
            <div className="p-2 text-black h-8 bg-white w-8 rounded-full">In</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
