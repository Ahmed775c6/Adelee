const Colors = [
    { name: 'primary-color', value: '#3498db' },
    { name: 'success-color', value: '#2ecc71' },
    { name: 'warning-color', value: '#f39c12' },
    { name: 'danger-color', value: '#e74c3c' },
    { name: 'pink', value: 'rgb(243, 103, 126)' },

    { name: 'blue-green', value: 'rgb(70, 216, 172)' },
];
const ThemeSettings = ({ isDarkMode, setIsDarkMode , setMainColor  , setThemes} : any) => {
    const toggleMode = () => {
        setIsDarkMode((prev : any) => !prev);
   
      };
  return (
    <div className="w-full fixed h-[100vh] bg-[rgba(0,0,0,0.5)] right-0 top-0 z-10">
<div className="w-[25%] h-full flex flex-col absolute right-0  top-0 z-10 " style={{ backgroundColor: isDarkMode ? '#333' : '#fff' , color : isDarkMode ? '#fff' : '#333' }}>
    <header className="p-3 flex justify-between " style={{borderBottom : "1px solid #ccc"}}>
<h1>Theme Settings</h1>
<i className="ri-close-large-line cursor-pointer" onClick={()=>{
    setThemes(false);
}}></i>
    </header>
<div className=" p-3 w-full flex flex-col gap-2" style={{borderBottom : "1px solid #ccc"}}>
<p>Mode : </p>
<div className="w-full flex gap-4 justify-center">
    <span>Lignt</span>
    <li className="mode ">
              <div className="sun-moon">
                <i className='bx bx-moon icon moon'></i>
                <i className='bx bx-sun icon sun'></i>
              </div>
 
              <div className="toggle-switch" onClick={toggleMode}>
                <span className="switch"></span>
              </div>
            </li>
    <span>Dark</span>
</div>
</div>
<div className=" p-3 overflow-x-scroll w-full flex flex-col gap-2" style={{borderBottom : "1px solid #ccc"}}>
<p>Main Color : </p>
<div className="w-full  flex gap-4 ">
 {
    Colors.map((color,index)=>(
        <span className="w-8 h-8 rounded-full p-1 cursor-pointer" key={index}
        onClick={()=>{
            setMainColor(color.value);
            localStorage.setItem('main-color', color.value);
            document.documentElement.style.setProperty('--primary-color', color.value)
        }}
        style={{ backgroundColor: color.value }}></span>
    ))
 }
</div>
</div>

</div>


    </div>
  )
}

export default ThemeSettings