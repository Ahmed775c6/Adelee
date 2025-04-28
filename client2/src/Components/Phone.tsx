
const Phone = ({img} : any) => {
  return (
  <>
  <div 
  
  className="box w-[200px] h-[400px]   rounded-[50px]  text-white"

  >
    <div className="inner text-white" style={
        {
          background: `linear-gradient(#28313B, #485461), url("/${img}")`
        }
    }>
<div 
className="island_popup gap-1  absolute top-0 flex justify-center items-center text-center  left-[40px]  w-[100px] h-[20px] bg-black 

"
style={
    {
        borderRadius : '0% 10% 34% 31% / 0% 0% 22% 21%    '
    }
} >
    <div className="line w-[30%] h-[2px] bg-zinc-50 "></div>
<div className="w-1 h-1 rounded-full bg-white"></div>
</div>

    </div>
<ul className="w-[90%] flex left-2 text-white  text-[11px] justify-between absolute z-10 bg-none  top-7 p-2 ">

<li className="text-white"><i className="ri-time-line text-white"></i><span className="text-white">17:08</span></li>
<li><i className="ri-logout-circle-r-line text-white"></i><span className="text-white">Leave</span></li>
<li><i className="ri-wifi-line text-white"></i> <i className="ri-battery-charge-line text-white"></i></li>
</ul>
<div className="demosntarion flex flex-col p-4 text-white  justify-center w-full  absolute top-12 gap-2 shadows-into-light-regular">
<h1 className="  text-center  w-full  text-white font-semibold  text-[1.5rem] shadows-into-light-regular">How it Works ?</h1>

<video src="/d.mp4" autoPlay loop muted playsInline className="h-32"></video>

<p className="text-[10px] text-white w-full">Make a Seller Account for free , you will be directed to your Store Dashbord where you can Manage your sales , products , & Money Transactions ...</p>
<button className="bg-white text-black rounded-sm cursor-pointer">Next</button>
<div className="w-full flex gap-2">
<div className="w-[40%] bg-white h-[1.5px] text-center"></div>
<div className="w-[35%] bg-white h-[1.5px] text-center"></div>
<div className="w-[25%] bg-white h-[1.5px] text-center"></div>
</div>
<div className="w-[100%] absolute -bottom-1 left-0 text-[10px] flex  justify-evenly">
<i className=" text-white ri-menu-line"></i>
<i className="text-white ri-square-line"></i>
<i className="text-white ri-arrow-left-line"></i>
</div>
</div>

<i className="9rss1 absolute w-[3px] h-[26px] top-[110px]  left-[2px] bg-red-200" 
style={
    {
        borderTopLeftRadius : "4px",
        borderBottomLeftRadius : "4px",
        background : "radial-gradient(#ccc,#666)",
        zIndex : 10,
    }
}
></i>

<i 
className="9rss2 absolute w-[3px] h-[40px] top-[160px]  left-[2px] bg-red-200" 
style={
    {
        borderTopLeftRadius : "4px",
        borderBottomLeftRadius : "4px",
        background : "radial-gradient(#ccc,#666)",
        zIndex : 10,
    }
}
></i>

<i className="9rss3 absolute w-[3px] h-[40px] top-[220px]  left-[2px] bg-red-200" 
style={
    {
        borderTopLeftRadius : "4px",
        borderBottomLeftRadius : "4px",
        background : "radial-gradient(#ccc,#666)",
        zIndex : 10,
    }
}></i>
<i 
className="9rss4 absolute w-[3px] h-[70px] top-[120px]  right-[0px] bg-red-200" 
style={
    {
        borderTopLeftRadius : "4px",
        borderBottomLeftRadius : "4px",
        background : "radial-gradient(#ccc,#666)",
        zIndex : 10,
    }
}></i>
  </div>
  
  </> 
  )
}

export default Phone