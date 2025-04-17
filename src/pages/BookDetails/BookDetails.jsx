import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredBD } from '../../utilities/addToDB';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const BookDetails = () => {
    const {id} = useParams()
    const realId=parseInt(id)
    const data=useLoaderData()
    const singleData= data.find(singleBook=>singleBook.bookId===realId)
    const{bookName,image,review,category,tags,totalPages,publisher,yearOfPublishing,rating}=singleData || {}
    const handleMarkAsRead=id=>{
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: "Your book been saved",
        showConfirmButton: false,
        timer: 1500
      })
      addToStoredBD(id)
    }
    const notify = () => toast("WishList Added!");
    return (
        <div className='flex justify-center items-center'>
               <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="book"
      className="rounded-xl w-32" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className="card-title">{bookName}</h1>
    <h3>{category}</h3>
    <p>Review:{review}</p>
    <div>
        <p className='space-x-2' >Tag:
        {
              tags.map((tag,index)=><span key={index}>#{tag}</span>)
        }
        </p>
    </div>
    <p>Number of Pages:{totalPages}</p>
    <p>Publisher:{publisher}</p>
    <p>Year of Publishing:{yearOfPublishing}</p>
    <p>Rating:{rating}</p>
    <div className="card-actions flex gap-10">
      <button onClick={()=>handleMarkAsRead(id)} className="btn btn-ghost">Read</button>
      <button onClick={notify} className="btn btn-accent">WishList</button>
      <ToastContainer />
    </div>
  </div>
               </div>
        </div>
    );
};

export default BookDetails;