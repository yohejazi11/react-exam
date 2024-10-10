import { useState, useEffect } from 'react'
import Header from './component/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Library() {
    const userID = sessionStorage.getItem('userID')
    const [books, setBooks] = useState([])
    useEffect(() => {
        getContent()
    }, [])

    function addLike(book) {
        axios
            .post('https://66ea79ae55ad32cda4790255.mockapi.io/comments', {
                tag: "like",
                userID,
                title: book.title,
                author: book.author,
                book_image: book.book_image,
            })
            .then(function (res) {
                console.log(res)
            })
    }

    function addRead(book) {
        axios
            .post('https://66ea79ae55ad32cda4790255.mockapi.io/comments', {
                tag: "readed",
                userID,
                title: book.title,
                author: book.author,
                book_image: book.book_image,
            })
            .then(function (res) {
                console.log(res)
            })
    }

    function getContent() {
        axios
            .get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=dJJmVzNxbfrSAby43C6wb4X0EVb3PnmK')
            .then(function (response) {
                setBooks(response.data.results.books)
            })
    }
    return (
        <div>
            <Header></Header>
            <div className='book-container flex flex-wrap w-[100vw] justify-center gap-x-[2rem] gap-y-[2rem]'>
                {books.map(book => (

                    <div key={book.rank} className='flex justify-center rounded-[5px] bg-slate-100 p-[10px]'>
                        <Link to={`/book/${book.primary_isbn10}`} className='flex flex-col justify-center items-center max-md:w-[90w] max-md:h-[100vh] w-[20vw] gap-y-[1rem]'>
                            <img className='w-[90%]' src={book.book_image}></img>
                            <p className='text-[1.2rem] font-bold'>Title : {book.title}</p>
                            <p className='font-semibold'>Author : {book.author}</p>

                            {userID ? <div className='flex justify-evenly items-center'>
                                <button className='px-[23px] py-[16px] bg-[#10375C] text-white font-semibold rounded-[5px]' onClick={() => { addLike(book) }}>Like</button>
                                <button className='px-[23px] py-[16px] bg-[#10375C] text-white font-semibold rounded-[5px]' onClick={() => { addRead(book) }}>read</button>
                            </div> :
                                null
                            }

                        </Link>
                    </div>


                ))}
            </div>
        </div >
    )
}

export default Library
