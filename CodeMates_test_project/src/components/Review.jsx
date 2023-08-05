import React from 'react';
import SectionTitle from './SectionTitle';

const Review = () => {

    const reviews = [
        {
          id: 1,
          name: "John Doe",
          comment: "Great product! Highly recommended.",
          rating: 5,
          image: "https://i.ibb.co/BBFRVPZ/man.png"
        },
        {
          id: 2,
          name: "Jane Smith",
          comment: "Excellent service. Will buy again.",
          rating: 4,
          image: "https://i.ibb.co/j5zcrtn/man-2.png"
        },
        {
          id: 3,
          name: "Mike Johnson",
          comment: "Awesome experience. Love the quality.",
          rating: 5,
          image: "https://previews.123rf.com/images/oksun70/oksun701406/oksun70140600038/28866868-kid-boy-and-his-dad-playing-with-a-video-game-together.jpg"
        },
        {
          id: 4,
          name: "Sarah Thompson",
          comment: "Fast shipping and great customer support.",
          rating: 4,
          image: "https://i.ibb.co/SvZjGv5/man3.png"
        },
      ];
    return (
        <div>
             <SectionTitle subHeading="What our customers tell about us " heading="Customer Review" ></SectionTitle>

     
            <div className="p-4 grid grid-cols-4">
     
        {reviews.map((review) => (
          <div key={review.id} className="px-2" >
            <div className="bg-white  hover:bg-[#FDEEDC] transition duration-300 ease-in-out rounded-lg shadow-md p-6">
              <figure className="mb-4 ">
                <img
                  className="w-32 h-32 rounded-full mx-auto transform hover:scale-125 transition duration-300 ease-in-out"
                  src={review.image}
                  alt="Reviewer"
                />
              </figure>
              <div className="text-center">
                <h2 className="text-lg font-semibold">{review.name}</h2>
                <p className="text-gray-600">{review.comment}</p>
              </div>
              <div className="flex justify-center mt-4">
                {[...Array(review.rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2l2.5 6.5H19l-4 3.5 1 7L10 17l-6 3.5 1-7L1 8.5h6.5L10 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
     
    </div>
            
        </div>
    );
};

export default Review;