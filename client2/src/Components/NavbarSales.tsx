import { useState } from "react";


const NavbarSales = () => {
    const AsideLinks = [
        {
          title: "Dashboard",
          icon: "ri-dashboard-line",  // Remix Icon for dashboard
        },
    
        {
          title: "My Store",
          icon: "ri-store-line",  // Remix Icon for store
        },
        {
          title: "Customize Product",
          icon: "ri-edit-box-line",  // Remix Icon for customizing products
        },
        {
            title: "Messages",
            icon: "ri-message-line",  // Remix Icon for account settings
          },
        {
          title: "Account Settings",
          icon: "ri-settings-3-line",  // Remix Icon for account settings
        },
        {
          title: "Logout",
          icon: "ri-logout-box-line",  // Remix Icon for logout
        }
      ];
      const [Widh ,setWidth] = useState('25')
  return (
<>
<aside className={`aside-store h-full min-h-[100vh] bg-white   `} style={{
  width: Widh + '%',
}}>
    <header style={{borderBottom : "1px solid #ccc" , justifyContent : `${Widh != '5' ? 'space-between' : 'center' }`}} className="p-4 bg-[var(--blue-2)]  text-white flex  min-w-full  "  >
{
  Widh != '5' ? <>
  <span>STORE MANAGMENT</span> 
  <i className="ri-menu-unfold-2-line cursor-pointer" onClick={()=>{
    setWidth('5');
  }}>
  
    
  </i>
  </>
  : <i className=" cursor-pointer ri-menu-fold-2-line" onClick={()=>{
    setWidth('25');
  }}></i>}

    </header>
<ul className="flex w-full flex-col gap-3 p-4">
{
AsideLinks.map((item,index)=>(
    <li key={index} className="p-3 w-full flex   gap-2  rounded-sm relative">
<i className={item.icon}></i>
{
  Widh != '5' ? <a href={item.title}>{item.title} </a> : ''
}

    </li>
))
}

</ul>
{
  Widh != '5' ? <div className="w-full  p-4  ">
  <div className="w-full flex flex-col gap-3 bg-[#f7f7fc] shadow-inner p-2 text-center items-center  rounded-sm justify-center ">
  <i className="ri-terminal-box-line text-[2rem] bg-blue-400 w-11 p-2 h-10 flex justify-center text-white items-center text-center rounded-sm"></i>
    
    <p className="font-semibold text-gray-800">Powered by SkaroIT</p>
    
    <p className="text-gray-600">
      Have an idea for an app? Let us turn your vision into reality with expert development services.
    </p>
    
    <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium p-2 rounded-sm ">
      View Services
    </button>
  </div>
  </div> : ''
}



</aside>

</>
  )
}

export default NavbarSales