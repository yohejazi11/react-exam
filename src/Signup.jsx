import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from './component/Header'



function Signup() {
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signupFN() {
        if (!name && !userName && !email && !password) {
            window.alert('you should add all value')
        }
        else if (password.length < 8) {
            window.alert('password should more then  carachter')
        }
        else if (!email.includes('@')) {
            window.alert('email should contain @')
        }
        else {
            axios
                .post('https://66ea79ae55ad32cda4790255.mockapi.io/user', {
                    name,
                    userName,
                    email,
                    password
                }).then(function () {
                    navigate('/login')
                })
        }

    }

    return (
        <div className="h-[100vh] flex flex-col justify-start items-center">
            <Header></Header>
            <div className="mt-[15vh] w-[50vw] p-[2rem] flex flex-col gap-y-[1rem] justify-center items-center rounded-[10px] bbg-[#F4F6FF]">
                <p>sign up</p>
                <input className="h-[40px] w-[90%] border-[#EB8317] border-[1px] rounded-[5px]" type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name"></input>
                <input className="h-[40px] w-[90%] border-[#EB8317] border-[1px] rounded-[5px]" type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} placeholder="Enter user name"></input>
                <input className="h-[40px] w-[90%] border-[#EB8317] border-[1px] rounded-[5px]" type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email"></input>
                <input className="h-[40px] w-[90%] border-[#EB8317] border-[1px] rounded-[5px]" type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password"></input>
                <button className="px-[23px] py-[16px] rounded-[5px] bg-[#10375C] text-white font-bold" onClick={() => { signupFN() }}>Sign up</button>

            </div>

        </div>
    )
}

export default Signup
