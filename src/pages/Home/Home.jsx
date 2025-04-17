import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const bookData=useLoaderData()

    return (
        <div>
            <Banner/>
            <Books bookData={bookData}/>
        </div>
    );
};

export default Home;