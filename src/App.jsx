import './App.css'
import Header from './component/Header'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
    <>
    <Header></Header>
    <div className='w-[100vw] h-[85vh] flex'>
      <div className='w-[50vw] flex justify-center items-center'>
        <img className='w-[95%] h-[100%] rounded-[5px]' src='https://i.pinimg.com/564x/78/fe/e5/78fee557f3585372371d1453a90c1b34.jpg'></img>
      </div>

      <div className='w-[50vw] flex justify-center items-center'>
        <button className='bg-[#10375C] text-[#F3C623] text-[2.5rem] font-bold p-[1rem] rounded-[10px]' onClick={()=>{navigate('/library')}}>Explore Books Library</button>
      </div>
    </div>
    </>
  )
}

export default App
