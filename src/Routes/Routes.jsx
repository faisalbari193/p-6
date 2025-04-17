import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index:true,
        loader:()=>fetch('books.json'),
        path:'/',
        Component: Home
      },
      {
        path:'/about',
        Component: About
      },
      {
        path:'/readList',
        loader:()=>fetch('books.json'),
        Component: ReadList
      },
      {
        path:'/bookDetails/:id',
        loader:()=>fetch('books.json'),
        Component: BookDetails
      }
    ]
  },
  {
    path:'*',
    Component: ErrorPage
  }
]);



