import React from 'react';

const Banner = () => {
    return (
        <div className='gap-20'>
            <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.postimg.cc/9Q4BXMXz/pngwing-1.png"
            className="rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
            <button className="btn btn-lg rounded-md bg-green-500 mt-10 text-white ">View The List</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;