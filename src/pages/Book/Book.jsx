import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({book}) => {
    const{bookId,bookName,author,image,category,rating,publisher,tags,yearOfPublishing}=book
    return (
        <div>
                  <Link to={`/bookDetails/${bookId}`}>
                  <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-3 bg-gray-100 w-2/3 mx-auto'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-10'>
        {
            tags.map((tag,index)=><button key={index} className='btn btn-info'>{tag}</button>)
        }
    </div>
    <h2 className="card-title ">
     {bookName}
     <br />
     {author}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>{publisher}</p>
    <div className='border-t-2 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaRegStarHalfStroke /></div>
    </div>
  </div>
                  </div>
                  </Link>
        </div>
    );
};

export default Book;