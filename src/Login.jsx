import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from './component/Header'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signinFN() {
        axios
            .get('https://66ea79ae55ad32cda4790255.mockapi.io/user')
            .then(function (response) {
                const user = response.data.find((u) => u.email == email && u.password == password)
                if (user) {
                    sessionStorage.setItem('userID', user.id)
                    sessionStorage.setItem('userName', user.name)
                    navigate('/')
                }
                else {
                    window.alert('wrong email or passwrod')
                }
            })
    }
    return (
        <div className="h-[100vh] flex flex-col justify-start items-center">
            <Header></Header>
            <div className="w-[50vw] p-[2rem] flex flex-col gap-y-[1rem] justify-center items-center rounded-[10px] bbg-[#F4F6FF]">
                <p>log in</p>
                <input className="h-[40px] w-[90%] border-[#EB8317] border-[1px] rounded-[5px]" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email"></input>
                <input className="h-[40px] w-[90%] border-[#EB8317] border-[1px] rounded-[5px]" type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password"></input>
                <button className="px-[23px] py-[16px] rounded-[5px] bg-[#10375C] text-white font-bold" onClick={() => { signinFN() }}>Sign in</button>
            </div>

        </div>
    )
}

export default Login
