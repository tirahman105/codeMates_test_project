import React from 'react';

const Deals = () => {
    const products = [
        {
            id: 1,
            image: 'https://i.ibb.co/bQvd6tp/fruit6.png',
            name: 'Apple',
            price: 19.99,
            rating: 4.5,
            details: 'Details',
        },
        {
            id: 2,
            image: 'https://i.ibb.co/R6xyQng/fruit7.png',
            name: 'Orange',
            price: 19.99,
            rating: 4.5,
            details: 'Details',
        },
        {
            id: 3,
            image: 'https://i.ibb.co/mGV4Ln7/fruit8.png',
            name: 'Red Dreagon',
            price: 19.99,
            rating: 4.5,
            details: 'Details',
        },
        {
            id: 4,
            image: 'https://i.ibb.co/xSPKHhv/fruit9.png',
            name: 'Banana',
            price: 19.99,
            rating: 4.5,
            details: 'Details',
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid md:grid-cols-2 grid-cols-1 mb-10">
                <div>
                    <h1 className="text-3xl font-bold mb-4"> Deal of the day</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ut magnam, ea autem doloremque fugiat id. Expedita explicabo error inventore laudantium ullam cumque repellendus distinctio, quo consequuntur molestias illum quos?</h1>
                </div>
                <div className='flex justify-end'>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div className="flex flex-col p-2 rounded-box text-gray-800">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 rounded-box text-gray-800">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 rounded-box text-gray-800">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 rounded-box text-gray-800">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 53 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
            </div>


            {/*  */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-md border-t">
                        <img className="w-32 h-32 mx-auto" src={product.image} alt={product.name} />
                        <div className="px-6 py-4">
                            <p className="text-gray-700 text-xl text-center font-bold mb-2">${product.price}</p>

                            <hr />

                            <div className="font-medium text-center text-base mb-2 mt-2">{product.name}</div>

                            <div className="px-6 py-4">
                                <div className="flex items-center justify-center mb-2 mt-2">
                                    <svg
                                        className="w-5 h-5 fill-current text-rose-500 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1l2.39 6.14h6.22l-4.9 3.78 1.93 5.97L10 14.36l-4.64 2.53 1.93-5.97-4.9-3.78h6.22L10 1z"
                                        />
                                    </svg>
                                    <svg
                                        className="w-5 h-5 fill-current text-rose-500 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1l2.39 6.14h6.22l-4.9 3.78 1.93 5.97L10 14.36l-4.64 2.53 1.93-5.97-4.9-3.78h6.22L10 1z"
                                        />
                                    </svg>
                                    <svg
                                        className="w-5 h-5 fill-current text-rose-500 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1l2.39 6.14h6.22l-4.9 3.78 1.93 5.97L10 14.36l-4.64 2.53 1.93-5.97-4.9-3.78h6.22L10 1z"
                                        />
                                    </svg>
                                    <svg
                                        className="w-5 h-5 fill-current text-rose-500 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1l2.39 6.14h6.22l-4.9 3.78 1.93 5.97L10 14.36l-4.64 2.53 1.93-5.97-4.9-3.78h6.22L10 1z"
                                        />
                                    </svg>
                                    <svg
                                        className="w-5 h-5 fill-current text-rose-500 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1l2.39 6.14h6.22l-4.9 3.78 1.93 5.97L10 14.36l-4.64 2.53 1.93-5.97-4.9-3.78h6.22L10 1z"
                                        />
                                    </svg>

                                </div>



                                <p className="text-rose-500 font-semibold text-base text-center">
                                    {product.details}
                                </p>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

            <div className='text-center mt-10'>
                <button className='text-md bg-rose-500 hover:bg-rose-700 text-white p-4 rounded-md text-center font-bold'>Shop All</button>
            </div>
        </div>
    );
};

export default Deals;
