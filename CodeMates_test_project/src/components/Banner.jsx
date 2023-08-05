const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url('https://placehold.co/600x400')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md relative">
                    <h1 className="mb-5 text-4xl font-bold text-white">Exotic tastes at your doorstep</h1>
                    <p className="mb-5 text-xl font-semibold text-white">We supply high-quality organic products!</p>
                    <button className="btn btn-error">Shop Now</button>
                    <div className="bg-white p-5 m-5 bottom-0 left-0 w-full">
                        <div className="flex justify-around">
                            <div>
                                <div>
                                    <img src="https://placehold.co/60x60/000000/FFFFFF/png" alt="Strawberry" />
                                </div>
                                <div className="text-black">Apple</div>
                            </div>
                            <div>
                                <div>
                                    <img src="https://placehold.co/60x60/000000/FFFFFF/png" alt="Orange" />
                                </div>
                                <div className="text-black">Orange</div>
                            </div>
                            <div>
                                <div>
                                    <img src="https://placehold.co/60x60/000000/FFFFFF/png" alt="Mango" />
                                </div>
                                <div className="text-black">Mango</div>
                            </div>
                            <div>
                                <div>
                                    <img src="https://placehold.co/60x60/000000/FFFFFF/png" alt="Grape" />
                                </div>
                                <div className="text-black">Grape</div>
                            </div>
                            <div>
                                <div>
                                    <img src="https://placehold.co/60x60/000000/FFFFFF/png" alt="Apple" />
                                </div>
                                <div className="text-black">Apple</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
