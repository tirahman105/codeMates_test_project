import React from "react";

const Shop = () => {
  return (
    <div>
      <h1 className="text-center">This is shop</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 ">
        <div className="md:col-span-2 h-screen bg-red-500">
          <h1 className="">Left </h1>
        </div>
        <div className="h-screen bg-blue-500 relative">
          <h1 className="">right </h1>          
        </div>
      </div>
    </div>
  );
};

export default Shop;
