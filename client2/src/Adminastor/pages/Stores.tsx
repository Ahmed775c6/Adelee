import { useEffect, useState } from "react";
import '../Dash.css'
import ThemeSettings from "../ThemeSettings";
import StoreData from "../StoreData";


const Stores = () => {

  const [isSidebarClosed, setIsSidebarClosed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [Themes,setThemes] = useState(false);
  const [OverView, setOverView] = useState([]);
  const [MainColor,setMainColor] = useState(localStorage.getItem('main-color'));
  const [store,setStore] = useState(null);
  console.log(MainColor);
  document.documentElement.style.setProperty('--primary-color', MainColor);


  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event : any) => {
    setSearchTerm(event.target.value);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/stores'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOverView(data);
      } catch (error : any) {
        console.error("Error fetching client data:", error.message); // Log specific error
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
                <a href="/admin" >
                <i className="icon ri-bar-chart-line"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="/stores" className="active">
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
  store  ? <>
  <StoreData item = {store} setStore = {setStore} />
  </> : ''
 }
        {
            Themes ? <ThemeSettings setThemes={setThemes} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setMainColor = {setMainColor} /> : ""
        }
        <div className="text relative">All App Stores Data <span style={{color : MainColor ? MainColor : "black"}} ></span></div>
<div style={{background : MainColor ? `${MainColor}` : ""}} className="cursor-pointer rounded-full outline-none text-white fixed w-10 h-10 flex justify-center items-center text-center right-5 bottom-5 p-4  " onClick={()=>{
    setThemes(true);
}}><i className="ri-palette-line text-white" ></i></div>


<div className="w-full flex p-5  rounded-sm ">
<input type="text" placeholder="Search for a store by name ..."  
className="w-full p-4 outline-none border-none shadow-sm"  
list="pr"
onChange={handleChange}
/>
<datalist id="pr">
{
  OverView.map((item : any,index)=>(
    <option key={index} value={item.name} />
  ))
}

</datalist>

</div>
<div className="w-full p-4 grid grid-cols-2 gap-3">
  {OverView.map((store : any, index) => (
    (searchTerm === "" || store.name.toLowerCase().includes(searchTerm.toLowerCase())) && (
      <div key={index} className="w-full p-4 shadow-xl bg-white rounded-sm cursor-pointer" onClick={()=>{
        setStore(store);
      }}>
       
        <p className="text-xl font-semibold">{store.name}</p>


        <div className="mt-2">
          <p className="font-medium">Creator:</p>
          <div className="flex items-center mt-1">
            <img 
              src={store.creator.profilePic} 
              alt={`${store.creator.name} profile`} 
              className="w-10 h-10 rounded-full mr-2" 
            />
            <div>
              <p>{store.creator.name}</p>
              <p className="text-sm text-gray-600">{store.creator.email}</p>
            </div>
          </div>
        </div>

   
        <p className="mt-2 text-gray-500">Date Created: {new Date(store.dateOfCreation).toLocaleDateString()}</p>

      
        <div className="mt-3 flex justify-center gap-3">
          <p className="font-medium">Products:</p>
          <p>{store.products.length}</p>
        </div>

 
        <div className="mt-3">
          <p>Income: <span className="font-semibold">TND {store.income}</span></p>
        </div>
      </div>
    )
  ))}
</div>



      </section>
   
   </>
  )
}

export default Stores