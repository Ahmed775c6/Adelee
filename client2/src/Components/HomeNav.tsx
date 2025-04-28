
import { useState } from "react"
const HomeNav = ({searching , setSearching , setShowCart} : any) => {
  const [active,setActive] = useState('home');
  
  return (
<>

<nav className="w-full flex justify-between p-4 bg-[#1d1a39] text-white ">
  <div className="flex gap-3">
  <img src="/vite.svg" alt="logo" className="w-[3rem] h-[3rem]" />
  <p className="text-[2rem] text-white">Adeelee</p>
  </div>
<ul className="flex text-white justify-center gap-3 linkshero p-4">
  <li className={`${active === 'home' ? 'active' : ''}`} onClick={()=>{setActive('home')}} >Home</li>
  <li className={`${active === 'about' ? 'active' : ''}`} onClick={()=>{setActive('about')}}>About & Services</li>
  <li className={`${active === 'shop' ? 'active' : ''}`} onClick={()=>{setActive('shop')}}>Shop</li>
  <li className={`${active === 'Amal' ? 'active' : ''}`} onClick={()=>{setActive('Amal')}}>Ask AI</li>


</ul>
<div className="flex justify-center gap-3">
{
        !searching ? <i className="ri-search-line s-icon p-4 cursor-pointer z-20" id="open" onClick={()=>{
          setSearching(!searching);
      }}></i> : <i className="ri-close-line s-icon p-4 cursor-pointer z-20" id="close" onClick={()=>{
        setSearching(!searching);
      }}></i>
      }
    <i className="ri-shopping-cart-line s-icon p-4 cursor-pointer z-20" onClick={()=>{
    setShowCart(true);
    }}></i>
</div>

<div className="flex gap-3">
  
  <button className="p-2 rounded-3xl bg-[#df7862] ">Sign-Up</button>

  <a href="/CreateStore" className="p-2 rounded-3xl bg-[#df7862] flex justify-center items-center text-center">Build My store</a>

</div>
</nav>

</>
  )
}

export default HomeNav