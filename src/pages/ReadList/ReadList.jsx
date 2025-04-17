import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const[readList,setReadList]=useState([])
    const[sort,setSort]=useState('')
    const data=useLoaderData();
    useEffect(()=>{
        const storedBookData= getStoredBook();
        const convertedStoreBooks=storedBookData.map(id=>parseInt(id));
        const myReadList=data.filter(book=>convertedStoreBooks.includes(book.bookId));
        setReadList(myReadList)
    },[])
    const handleSortType=(type)=>{
        setSort(type)
        if(type==='pages'){
            const sortByPage=[...readList].sort((a,b)=>a.totalPages - b.totalPages);
            setReadList(sortByPage)
        }
        if(type==='rating'){
            const sortByRating=[...readList].sort((a,b)=>a.rating - b.rating);
            setReadList(sortByRating)
        }
    }
    return (
        <div>
            <details className="dropdown flex justify-center items-center">
                 <summary className="btn m-1">Sort By:{sort? sort:''}</summary>
                    <ul className="menu  dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                      <li><a onClick={()=>handleSortType('pages')}>pages</a></li>
                      <li><a onClick={()=>handleSortType('rating')}>rating</a></li>
                    </ul>
            </details>
             <Tabs>
    <TabList>
      <Tab>Book List</Tab>
      <Tab>WishList</Tab>
    </TabList>

    <TabPanel>
      <h2>Book You Read:{readList.length}</h2>
      {
        readList.map(b=><Book key={b.bookId} book={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>WishList</h2>
    </TabPanel>
        </Tabs>
        </div>
       
    );
};

export default ReadList;