
import { useState , useEffect} from "react"
const HomeNav = ({searching , setSearching , setShowCart} : any) => {
  const [active,setActive] = useState('home');
  

const [language, setLanguage] = useState(() => {
  const savedLang = localStorage.getItem('language');
  return savedLang || 'en';
});

const languages = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'ar', flag: '🇹🇳', name: 'Arabic' },
  { code: 'fr', flag: '🇫🇷', name: 'French' },
  { code: 'de', flag: '🇩🇪', name: 'German' },
];


// Save language preference
useEffect(() => {
  localStorage.setItem('language', language);
}, [language]);


  return (
<>

<nav className="w-full flex justify-between p-4 bg-[#1d1a39] text-white ">
  <div className="flex gap-3">
  <img src="/vite.svg" alt="logo" className="w-[3rem] h-[3rem]" />
  <p className="text-[2rem] font-semibold uppercase text-orange-600">Adeelee</p>
  </div>
<ul className="flex text-white justify-center gap-3 linkshero p-4">
  <li className={`${active === 'home' ? 'active' : ''}`} onClick={()=>{setActive('home')}} >Home</li>
  <li className={`${active === 'about' ? 'active' : ''}`} onClick={()=>{setActive('about')}}>About & Services</li>
  <li className={`${active === 'shop' ? 'active' : ''}`} onClick={()=>{setActive('shop')}}>Shop</li>
  <li className={`${active === 'Amal' ? 'active' : ''}`} onClick={()=>{setActive('Amal')}}>Ask AI</li>


</ul>
<div className="flex justify-center gap-3">

  <div className="relative group">
    <button className="p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center">
      {languages.find(lang => lang.code === language)?.flag}
    </button>
    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-2 hidden group-hover:block z-50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
            language === lang.code ? 'bg-gray-100 dark:bg-gray-700' : ''
          }`}
          onClick={() => setLanguage(lang.code)}
        >
          <span className="text-xl mr-2">{lang.flag}</span>
          {lang.name}
        </button>
      ))}
    </div>
  </div>
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
  
  <button className="bg-[#df7862] p-4 text-white rounded-3xl  overflow-hidden backdrop-blur-lg  
          justify-center  text-center mb-4 mr-4 inline-flex items-center
           transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"     style={{
        background: `linear-gradient(135deg, #df7862, #df7862)`,
        
        border: `1px solid df7862`
      }}>Sign-Up</button>

  <a href="/CreateStore"className="bg-[#df7862] p-4 text-white rounded-3xl  overflow-hidden backdrop-blur-lg  
          justify-center  text-center mb-4 mr-4 inline-flex items-center
           transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"     style={{
        background: `linear-gradient(135deg, #df7862, #df7862)`,
        
        border: `1px solid df7862`
      }}>Build My store</a>

</div>
</nav>

</>
  )
}

export default HomeNav