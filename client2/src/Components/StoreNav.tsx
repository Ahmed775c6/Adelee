import { useState } from "react"
import Notifications from "./Notifications";
const StoreNav = ({setTheme} : any) => {
    const [show, setShow] = useState(false);
    const  [Mode,setMode] = useState('light');
  return (
  <>
  <nav className="w-full p-4 flex justify-between rounded-md bg-white  ">
<input type="text" className="bg-white" disabled/>
<ul className="flex justify-center gap-2 ">
   <li className="p-2 cursor-pointer relative"
    onClick={()=>{
      show ? setShow(false) : setShow(true);
    }}
   ><i className="ri-notification-line"></i>
{
  show ?    <div className="absolute w-[300px] z-10 top-10 -right-10 bg-white shadow-sm ">
  <Notifications/>
     </div> : ''
}
   
   </li>
   <li className="p-2 cursor-pointer" onClick={()=>{
    setMode(Mode === 'light' ? 'dark' : 'light');
   }}>{
    Mode != 'light' ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i> 
    }</li>
   <li className="p-2 cursor-pointer">
    <i className="ri-palette-line cursor-pointer" onClick={()=>{
      setTheme(true);
    }}></i>
   </li>

   <img src="/Avatar.jpg" alt="avatar"  className="w-10 h-10 rounded-full cursor-pointer"/>
</ul>

</nav>
  </>
  )
}

export default StoreNav