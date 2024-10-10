import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate()
    let userID = sessionStorage.getItem('userID')
    let userName = sessionStorage.getItem('userName')
    return (
        <div className='w-[100vw] h-[15vh] flex items-center justify-between mb-[15vh] bg-[#10375C] text-white text-[1.5rem] font-bold border-b-[5px] border-[#EB8317] px-[2rem]'>
            <ul className='flex gap-x-[2rem] items-end text-[1.1rem]'>
                <li className='text-[#F3C623] font-bold text-[2rem]'>HEJAZI Librarey</li>
                <li ><Link to={'/'}>Home</Link></li>
                <li className='max-md:hidden'><Link to={'/favorite'}>Favorite</Link></li>
                <li className='max-md:hidden'><Link to={'/readed'}>readed Book</Link></li>


            </ul>
            {userID ?
                <ul className='flex gap-x-[2rem]'>
                    <li className='flex gap-x-[1rem]'>
                        <p>welcome: {userName}</p>
                        <button onClick={() => { sessionStorage.clear(); navigate('/login') }} className='border-[#D71313] border-[2px] px-[23px] text-[1rem] text-[#D71313] bg-[#F4F6FF] rounded-[5px]'>Log out</button>
                    </li>
                </ul>
                :
                <ul className='flex gap-x-[2rem]'>
                    <li><Link to='/login'>Log in</Link></li>
                    <li><Link to='/signup'>Sign up</Link></li>
                </ul>
            }

        </div>
    )
}

export default Header
