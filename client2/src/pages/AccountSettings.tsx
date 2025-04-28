import { useState } from "react";
import { ChromePicker } from 'react-color';
import NavbarSales from "@/Components/NavbarSales"
import StoreNav from "@/Components/StoreNav";


const initialUser = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '55 115 856',
    Code_postal: '5014',
    address: '123 Main St',
    state: 'Monastir',
};


const AccountSettings = () => {
    const [ThemeS,setThemS] = useState(false);
    const [currentColor, setCurrentColor] = useState('var(--blue-2)');
    const [TextColor , setTextColor] = useState('#fff');     
    const [ColorP , setColorP] = useState(false);
    const [user, setUser] = useState(initialUser);
    const [OldPassword,setOldPassword] = useState('');
    const [NewPassword,setNewPassword] = useState('');
const [ChangeS,setChangeS] = useState("Account");
    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }));
    };
  
  
  
  
    const Themes = () => {
      const Colors = [
          {
            color: '#FF6F61' // Coral
          },
          {
            color: '#6B5B95' // Plum
          },
          {
            color: '#88B04B' // Greenery
          },
          {
            color: '#F7CAC9' // Rose Quartz
          },
          {
            color: '#92A8D1' // Serenity Blue
          },
          {
            color: '#955251' // Marsala
          },
          {
            color: '#B565A7' // Amethyst Orchid
          },
          {
            color: '#009B77' // Teal
          },
          {
            color: '#DD4124' // Fiery Red
          },
          {
            color: '#FFD662' // Bright Yellow
          }
        ];
        const colorOptions = [
          { name: 'White', bgColor: '#fff', textColor: '#000' },
          { name: 'Gray', bgColor: '#6b7280', textColor: '#fff' }, // Tailwind class for gray-400
          { name: 'Black', bgColor: '#000', textColor: '#fff' },
        ];
        
  
    return (
      <>
      <div 
      className="w-full flex z-10  flex-col justify-center items-center fixed top-0 h-full left-0 bg-[rgba(0,0,0,0.8)]">
  
  <div className="w-full bg-white max-w-[700px] rounded-s shadow-md flex flex-col gap-3">
      <header className="w-full flex justify-between " style={{borderBottom : "1px solid #ccc"}}>
  <div className="w-full flex  ">
  <i className="ri-color-filter-line text-[var(--blue-2)] p-4  "></i> 
  <span className="p-4">  Themes & Text Settings</span>
  
  </div>
  <i className="ri-close-line  cursor-pointer text-white p-4" 
  style={{background : currentColor , color : TextColor}}
  onClick={()=>{
    setThemS(false);
  }}
  ></i>
  
      </header>
  <div className="w-full flex flex-col gap-3 p-4">
  <div className="w-full flex flex-col">
  <div className="w-full flex gap-2">
  <i className="ri-spy-line"></i> <span> Mode</span>
  </div>
  <div className="w-full flex justify-center items-center gap-3">
  
  <span>Light </span>
  <input type='radio' name="mode" checked  />
  <span>Dark</span>
  <input type="radio" name="mode" />
  
  </div>
  
  </div>
  
  <div className="w-full flex flex-col gap-3">
  <div className="w-full flex gap-2">
  <i className="ri-dropper-line"></i> <span> Main Color :</span>
  </div>
  <div className="w-full flex-col flex justify-center items-center gap-3">
  {
      ColorP ? <div className="absolute right-20 z-10 top-50">
      {
            <ChromePicker
            color={currentColor}
            onChangeComplete={(color) => setCurrentColor(color.hex)}
          />
          
      }
      </div> : ''
  }
  <div className="w-full flex">
     {
      !ColorP ?  <button className={`p-2 rounded-sm cursor-pointer uppercase`} style={{background : `${currentColor}` , color : `${TextColor}`}}
      onClick={()=>{
          setColorP(true);
      }}
      >Color Picker </button> : 
      <button className='p-2 rounded-sm cursor-pointer uppercase' style={{background : `${currentColor}` , color : `${TextColor}`}} onClick={()=>{
          setColorP(false);
      }}>ReSet</button>
     }
  </div>
  
  <p className='w-full text-start p-2 font-semibold'>Suggestions :</p>
  <div className="w-full gap-3 flex">
      
  {
      Colors.map((color,index)=>(
          <button key={index} 
          className="rounded-full w-10 h-10 cursor-pointer p-2 " 
          style={{background : color.color }}
          onClick={()=>{
              setCurrentColor(color.color);
          }}
          ></button>
      ))
  }
  </div>
  
  </div>
  
  </div>
  
  
  <div className="w-full flex flex-col">
  <div className="w-full flex gap-2">
  <i className="ri-font-color"></i> <span> Text Style</span>
  </div>
  <div className="w-full flex flex-col justify-center items-center gap-3">
  
  <span className='font-semibold'>Color : </span>
  <div className="w-full flex gap-3 justify-center items-center ">
  {colorOptions.map((color, index) => (
      <span
        key={index}
        className={` ${color.textColor === '#fff' ? 'text-white' : 'text-black'} rounded-full p-2 cursor-pointer flex justify-center text-center items-center w-full h-10 shadow-md`}
     style={
      {
          background : `${color.bgColor}`
      }
     }
     onClick={()=>{
      setTextColor(color.bgColor)
     }}
     >
        {color.name}
  
      </span>
    ))}
  
  
  
  </div>
  
  </div>
  
  </div>
  
  </div>
  <div className="w-full p-4">
  <button className='p-2 rounded-sm cursor-pointer w-full ' style={{background : currentColor , color : TextColor}}>Save</button>
  </div>
  </div>
  
      </div>
      
      
      </>
  
    )
  }


  const handelInfo = (e : any)=>{
e.preventDefault();
  }
  

  return (
 <>
 <div className="w-full relative flex gap-3 bg-[#f7f7fc] h-full">
{
 ThemeS ? <Themes/> : ''
}

<NavbarSales/>
<main className="w-full p-4 flex flex-col gap-3">
<StoreNav setTheme = {setThemS}/>
<section className="w-full flex flex-col gap-3">
    <div className="w-full p-4 flex flex-col gap-3">
<header className="w-full flex gap-3">
<button className="p-2 flex gap-2  shadow-sm rounded-sm font-[500] "
style={{
  background : ChangeS === 'Account' ? currentColor : 'white',
  color : ChangeS === 'Account' ? TextColor : '',
}}
onClick={()=>{
    setChangeS("Account");
}} ><i className="ri-user-line"></i><span className="uppercase">Account</span></button>
<button className="p-2 flex gap-2  shadow-sm rounded-sm font-[500] "
style={{
  background : ChangeS === 'Security' ? currentColor : 'white',
  color : ChangeS === 'Security' ? TextColor : '',
}}
onClick={()=>{
    setChangeS("Security");
}} ><i className="ri-lock-2-line"></i><span className="uppercase">Security</span></button>
<button  className="p-2 flex gap-2 bg-white shadow-sm rounded-sm font-[500] "
style={{
  background : ChangeS === 'Trans' ? currentColor : 'white',
  color : ChangeS === 'Trans' ? TextColor : '',
}}
onClick={()=>{
    setChangeS('Trans');
}}><i className="ri-bank-card-line"></i><span>Transactions</span></button>
</header>

{
    ChangeS == "Account" ? 
    <form onSubmit={handelInfo} className="w-full bg-white rounded-sm flex flex-col gap-3 p-4">
    <h1>Account Details : </h1>
    <h3>Profile picture :</h3>
    <div className="w-full flex gap-3">
    <img src='/Avatar.jpg' className="w-28  rounded-sm" alt="prf" />
    <div className="w-full flex-col flex gap-3">
        <input type="file" className="w-full p-2 rounded-sm cursor-pointer" />
        <button className="p-2 rounded-sm cursor-pointer w-full" style={{background : currentColor , color : TextColor}}>Upload</button>
    
    </div>
    </div>
    <div className="w-full flex flex-col gap-3">
        <h3>Your Informations :</h3>
        <div className="w-full grid grid-cols-2 gap-3">
        {Object.entries(user).map(([key, value], index) => (
                    <div key={index} className="w-full flex flex-col gap-3">
                        <label htmlFor={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}:
                        </label>
                        <input 
                            type="text" 
                            className="w-full p-2 rounded-sm outline-none" 
                            name={key} 
                            id={key} 
                            style={{border: "1px dotted #ccc"}} 
                            placeholder={`Enter your ${key}`} 
                            value={value} 
                            onChange={handleChange} 
                            required
                        />
                    </div>
                ))}
        </div>
        <button 
        type="submit"
        className="uppercase rounded-sm p-2 w-full" style={{
            background: currentColor,
            color: TextColor,
        }}>Save</button>
    </div>
    
    </form>
: ChangeS === "Security"  ? <>
    <form onSubmit={handelInfo} className="w-full bg-white rounded-sm flex flex-col gap-3 p-4">
    <h1>Change Password : </h1>

    <div className="w-full flex flex-col gap-3">
   
        <div className="w-full grid grid-cols-2 gap-3">
<div className="w-full flex flex-col gap-3">
<label htmlFor="oldpassword">Old Password :</label>
<input type="password" className="w-full p-2 rounded-sm outline-none" placeholder="Current Password" style={
  {
    border: "1px dotted #ccc",
  }
} required value={OldPassword} onChange={(e : any)=>{
setOldPassword(e.target.value);
}} />
  
  </div>       
  <div className="w-full flex flex-col gap-3">
<label htmlFor="oldpassword">New Password :</label>
<input type="password" className="w-full p-2 rounded-sm outline-none" placeholder="New Password" style={
  {
    border: "1px dotted #ccc",
  }
} required value={NewPassword} onChange={(e : any)=>{
setNewPassword(e.target.value);
}} />
  
  </div>     
  
   </div>
        <button 
        type="submit"
        className="uppercase rounded-sm p-2 w-full" style={{
            background: currentColor,
            color: TextColor,
        }}>Save</button>
    </div>
    
    </form>
</> : ChangeS === "Trans" ? <>
<div className="w-full bg-white rounded-sm flex flex-col gap-3 p-4">
<h1>Not Availibale at the Moment ... </h1>
</div>

</> :''
}
    </div>

</section>


</main>

</div>
 
 
 </> 
  )
}

export default AccountSettings