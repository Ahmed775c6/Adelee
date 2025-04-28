
import { useState ,useEffect } from "react";
import ThemeSettings from "../ThemeSettings";
import CustomizableChart from "../Charts";


const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
      {
          label: 'Sales 2024',
          data: [30, 45, 60, 40, 70],
      },
  ],
};

const options = {
  showLegend: true,
  legendPosition: 'bottom',
};

const Analytics = () => {
    const [isSidebarClosed, setIsSidebarClosed] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [Themes,setThemes] = useState(false);

    const [MainColor,setMainColor] = useState(localStorage.getItem('main-color'));
    document.documentElement.style.setProperty('--primary-color', MainColor)
  
  
 
  

  
    useEffect(() => {
      const body = document.body;
      const modeText = document.querySelector(".mode-text");
  
      // Update mode text based on dark mode state
      const updateModeText = () => {
          if (modeText) {
              (modeText as HTMLElement).innerText = isDarkMode ? "Light mode" : "Dark mode";
            }
      };
  
      // Apply dark mode class to body
      if (isDarkMode) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
  
      updateModeText();
    }, [isDarkMode]);
  
    const toggleSidebar = () => {
      setIsSidebarClosed(prev => !prev);
    };
  
  
  return (
   <>
       <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="/Avatar.jpg" alt="image gallery"  />
            </span>
            <div className="text logo-text">
              <span className="name">Chouikh Ahmed</span>
              <span className="profession">Adminasteur</span>
            </div>
          </div>
          <i className='ri-arrow-right-s-line toggle 'style={{background : MainColor ? MainColor  : ""}} onClick={toggleSidebar}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">

            <ul className="menu-links">
              <li className="nav-link ">
                <a href="/admin" >
                <i className="icon ri-bar-chart-line"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                <i className="icon ri-store-2-line"></i>
                  <span className="text nav-text">Stores</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                <i className="icon ri-discuss-line"></i>
                  <span className="text nav-text">Messages</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="/Analytics" className="active">
                <i className="icon ri-pie-chart-line"></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>
     
              <li className="nav-link">
                <a href="#">
                <i className="ri-team-line icon"></i>
                  <span className="text nav-text">Clients</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="#">
                <i className="icon ri-tools-line"></i>
                  <span className="text nav-text">Settings</span>
                </a>
              </li>
              
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
              <i className="icon ri-logout-circle-r-line"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

       
          </div>
        </div>
      </nav>
      <section className="home p-4 relative">

{
    Themes ? <ThemeSettings setThemes={setThemes} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setMainColor = {setMainColor} /> : ""
}
<div className="text relative">Trak Traffic & Sales Here <span style={{color : MainColor ? MainColor : "black"}} ></span></div>
<div style={{background : MainColor ? `${MainColor}` : ""}} className="cursor-pointer rounded-full outline-none text-white fixed w-10 h-10 flex justify-center items-center text-center right-5 bottom-5 p-4  " onClick={()=>{
setThemes(true);
}}><i className="ri-palette-line text-white" ></i></div>

<div className="w-full grid grid-cols-4 p-4  gap-3" >

</div>

<div className="w-full grid grid-cols-2 gap-3 p-4 ">
<div className="w-full bg-white p-3 rounded-sm shadow-md ">
<CustomizableChart
                type="bar"                     // You can change to "bar", "doughnut", "pie", etc.
                data={data}
                options={options}
                backgroundColor="rgba(75,192,192,0.4)" // Default color, customizable
                borderColor="rgba(75,192,192,1)"
            />
</div>


   <div className="w-full bg-white p-3 rounded-sm shadow-md">
   <CustomizableChart
                type="line"                     // You can change to "bar", "doughnut", "pie", etc.
                data={data}
                options={options}
                backgroundColor={MainColor }  // Default color, customizable
                borderColor={MainColor}
            />
   </div>
</div>


</section>
   </>
  )
}

export default Analytics