import React, { Suspense, useEffect } from 'react';
import Book from '../Book/Book';

const Books = ({bookData}) => {
    // useEffect(()=>{
    //     fetch('books.json')
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])

    return (
        <div>
            <Suspense fallback={<span>Loading......</span>}>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
                 {
                    bookData.map(book=><Book key={book.bookId} book={book}></Book>)
                 }
                 </div>
            </Suspense>
        </div>
    );
};

export default Books;