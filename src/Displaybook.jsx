import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Header from './component/Header'
import axios from 'axios'

function Displaybook() {
    const [info, setInfo] = useState([])
    let { isbn } = useParams();


    useEffect(() => {
        getContent()
    }, [info])

    function getContent() {
        axios
            .get(`https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${isbn}&api-key=FTPRsvZPwsumv0S2vjXx1zVlVKhdftwZ`)
            .then(function (response) {
                setInfo(response.data.results)
            })
    }

    return (
        <div>
            <Header></Header>

            <div className='flex w-[100vw] h-[85vh]'>
                <div className='w-[50vw] h-[85vh] flex justify-center items-center'>
                    <img className='w-[90%] h-[100%]' src={''}></img>

                </div>
                <div className='w-[50vw] h-[85vh] flex flex-col justify-center gap-y-[2rem]'>
                    <p className='text-[1.2rem] font-bold'>Title : {info.book_title}</p>
                    <p className='text-[1.2rem] font-bold'>Summary : {info.summary}</p>
                    <p className='text-[1.2rem] font-bold'>{info.publication_dt}</p>
                    <p className='font-semibold'>Author : {info.book_author}</p>
                    <Link to={info.url}>link</Link>
                </div>

            </div>



        </div>
    )
}

export default Displaybook
