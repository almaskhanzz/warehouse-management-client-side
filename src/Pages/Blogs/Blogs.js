import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blog-container mx-auto py-4'>
            <h1 className='text-center'>Questions & Answers</h1>
            <div className='q-a mt-3 px-4'>
                <h5>Q1. Difference between javascript and nodejs?</h5>
                <p>
                    Ans:
                    Nodejs:It's a backend framework for developing web applications on the server side.
                    It's written in JavaScript. It is used outside of the browser, unlike JS.
                    It may be used to create web, desktop, and mobile apps. We can manipulate the file system (file management) and work with databases. This is something We can't do with JS. It also outperforms JS in terms of security.
                </p>
                <p>
                    Js:It's a client-side programming language.
                    It is used to work with HTML DOM elements.
                    This is more important than using NodeJS.

                </p>
                <h5>Q2. When should you use nodejs and when should you use mongodb?</h5>
                <p>
                    Ans: Nodejs is a Javascript engine that can be used to create any application (by programming in the Javascript language). It executes Javascript code. It is most typically used to create web servers, but it may also be used to create a variety of other sorts of programming.

                    MongoDB is a database management system. MongoDB is used by code within an application or server to save, query, and update data in a database. Many web servers developed with Node.js will store data in MongoDB.
                </p>
                <h5>Q3. Differences between sql and nosql databases?</h5>
                <p>
                    Ans: SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases whereas NoSQL is a Non-relational or Distributed Database.
                    Comparing SQL vs NoSQL database, SQL databases are table based databases whereas NoSQL databases can be document based, key-value pairs, graph databases.
                    SQL databases are vertically scalable while NoSQL databases are horizontally scalable.
                    SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for unstructured data.
                    Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.
                </p>
            </div>
        </div>
    );
};

export default Blogs;