import { useEffect, useState } from "react";
import '../Dash.css'
import ThemeSettings from "../ThemeSettings";


import { DataTableDemo } from "../Tabel";


const Dashboard = () => {
  const [isSidebarClosed, setIsSidebarClosed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [Themes,setThemes] = useState(false);
  const [OverView, setOverView] = useState([]);
  const [MainColor,setMainColor] = useState(localStorage.getItem('main-color'));
  console.log(MainColor);
  document.documentElement.style.setProperty('--primary-color', MainColor);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/Adminastor/Data.json'); // Update the path as necessary
        const data = await response.json();
        setOverView(data);
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };

    fetchData();
  }, []);

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
                <a href="/admin" className="active">
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
                <a href="/Analytics">
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
        <div className="text relative">Welcome Back <span style={{color : MainColor ? MainColor : "black"}} >Bo7Mid</span></div>
<div style={{background : MainColor ? `${MainColor}` : ""}} className="cursor-pointer rounded-full outline-none text-white fixed w-10 h-10 flex justify-center items-center text-center right-5 bottom-5 p-4  " onClick={()=>{
    setThemes(true);
}}><i className="ri-palette-line text-white" ></i></div>

<div className="w-full grid grid-cols-4 p-4  gap-3" >
{OverView.map((item : any, index) => (
    <div key={index} className="w-full p-4 flex gap-3 bg-white rounded-sm" style={{boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px'}} >
      <i className={
        `${item.icon} p-2 flex justify-center items-center text-center  rounded-sm w-10 h-10  text-white`
      } 
style={{backgroundColor : item.stoke}} 
      ></i>
      <div className="flex gap-3 flex-col relative w-full">
        <svg className={`line-chart `} style={{stroke : item.stoke}} viewBox="0 0 80 50" >
          <path d="M 0 40 L 25 20 L 50 35 L 75 10 L 100 30"></path>
        </svg>
        <h1 className="font-semibold">{item.label}</h1> {/* Assuming item has a title property */}
        <span>{item.count}</span> {/* Assuming item has a value property */}
      </div>
    </div>
  ))}
</div>

<div className="w-full p-4">
<DataTableDemo/>

</div>


      </section>
    </>
  );
}

export default Dashboard;