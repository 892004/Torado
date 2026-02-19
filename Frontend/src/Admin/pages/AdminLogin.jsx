import React, { useState } from 'react'
import Logo from '../../assets/Logo/logo.svg'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate();

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const handleLogin = async (e) =>{
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:5000/api/users/login" , {email , password});

            localStorage.setItem("token" , res.data.token)

            navigate("/admin/dashboard");
        }catch(err){
            console.log(err)
            alert("Login Faild ! ")
        }
    }
  return (
    <section className="Admin-login h-auto min-h-screen w-full bg-[#ccffcc] flex flex-col items-center justify-center">
        <div className="Login-header p-6">
            <img src={Logo} alt="Logo" className='h-10 '  />
        </div>

        <div className="Login-card h-80 w-70 border rounded-xl flex flex-col items-center p-8 bg-[#f0fced] shadow-xl">
            <h1 className='text-2xl font-medium'>Admin Login </h1>     

            <form onSubmit={handleLogin} className='p-5 flex flex-col items-center justify-center gap-5'>
             <div className="email">
                <label className='font-medium'>Email:</label>
                <input type="text" placeholder='Enter Email' className='border rounded-sm bg-[#eeffe1] py-1 px-2' onChange={(e)=>setemail(e.target.value)}/>
            </div>

            <div className="password">
                <label className='font-medium'>Password:</label>
                 <input type="text" placeholder='Enter Password' className='border rounded-sm bg-[#eeffe1] py-1 px-2' onChange={(e)=>setpassword(e.target.value)}/>
            </div>

            <button className='px-5 py-2 bg-[#ebffeb] font-medium border rounded-xl cursor-pointer '>Log-In</button>
            </form>
        </div>
    </section>
  )
}

export default AdminLogin