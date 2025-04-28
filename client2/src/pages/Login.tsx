import Lbtn from "@/Components/Lbtn"
import { useState } from "react"
const Login = () => {
  const [loading,isloading] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState('');
  const handelLogin = async (e : any)=>{
    e.preventDefault();
    isloading(true);
const Data = {
  email : email,
  password : password
}
console.log(Data);
isloading(false);
  }
  return (
  <div className="w-full flex bg-[#1a1919]  ">
<div className="w-full h-[100vh]  pattern">

</div>
  <div className="w-full flex-col gap-3 p-4 flex relative  ">
    <img src="/HERMES.png" className=" w-20  absolute right-5 top-5" alt="" />
    <h1 className="text-[2rem] font-semibold">Welcome , 👋</h1>
    <h3 className="text-[1.2rem] ">Login </h3>
<form onSubmit={handelLogin}  className="w-full flex flex-col gap-3 p-2 ">
<label htmlFor="email" >Your Email Adress :</label>
<input type="email" className="p-2 w-full rounded-none outline-none bg-black" required value={email} 
onChange={(e: any)=>{
setEmail(e.target.value);
}} style={{border : '1px dotted #ccc'}} />
<label htmlFor="passwword">Your Password :</label>
<input type="password" className="w-full p-2 rounded-none outline-none bg-black" 
onChange={(e : any)=>{
setPassword(e.target.value);
}}
value={password} required style={{border : '1px dotted #ccc'}}/>
<a href="/forgetPassword">Forget Password ?</a>
<Lbtn isloading = {loading} text = "Login" bgcolor = "var(--red)"/>
</form>
<p>Don't Have an Account ? <span className="font-semibold text-red-400">Sign-up</span> </p>
<footer className="absolute bottom-5 left-5">All rigth reserved SkaroIT</footer>
  </div>
  
  
  </div>
  )
}

export default Login