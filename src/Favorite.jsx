import Header from './component/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Favorite() {
    const userID = sessionStorage.getItem('userID')
    const [books, setBooks] = useState([])
    useEffect(() => {
        getContent()
    }, [])

    function getContent() {
        axios
            .get('https://66ea79ae55ad32cda4790255.mockapi.io/comments')
            .then(function (response) {
                setBooks(response.data)
            })
    }
    return (
        <div>
            <Header></Header>
            <div className='book-container flex flex-wrap w-[100vw] justify-center gap-x-[2rem] gap-y-[2rem]'>

                {
                    books.filter(book => book.userID == userID && book.tag == "like").map(filteredBook => (
                        <div key={filteredBook.id} className='flex justify-center rounded-[5px] bg-slate-100 p-[10px] flex-col items-center w-[20vw] gap-y-[1rem]'>

                            <img className='w-[90%]' src={filteredBook.book_image}></img>
                            <p className='text-[1.2rem] font-bold'>Title : {filteredBook.title}</p>
                            <p className='font-semibold'>Author : {filteredBook.author}</p>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Favorite
