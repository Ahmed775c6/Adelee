const socialMediaArray = [
    { icon: 'ri-instagram-line', url: 'https://instagram.com', color: '#E1306C' },
    { icon: 'ri-facebook-line', url: 'https://facebook.com', color: '#3b5998' },
    { icon: 'ri-tiktok-line', url: 'https://tiktok.com', color: '#000' },
    { icon: 'ri-whatsapp-line', url: 'https://whatsapp.com', color: '#25D366' },
    { icon: 'ri-telegram-line', url: 'https://telegram.org', color: '#0088CC' },
];
import Phone from "./Phone";

const Hero = () => {
  return (
<>


<div className="absolute right-10 top-52 flex flex-col justify-center items-center gap-3">
<i className="ri-arrow-right-line bg-white text-black p-2 rounded-full w-14 h-14 text-[2rem] flex items-center justify-center cursor-pointer"></i>

<i className="ri-arrow-left-line bg-white text-black p-2 rounded-full w-14 h-14 text-[2rem] flex items-center justify-center cursor-pointer"></i>

</div>
<section className="w-full h-[100vh]  flex bg-[var(--off-white)] z-10 ">

<img src="/money.png" alt="money" className="absolute w-20 h-20 bottom-6 right-6" />
<div className="w-[20%] flex flex-col bg-white justify-between p-4">
<div className="w-full flex justify-start gap-3 ">

<img src="/vite.svg" alt="vite" className="w-16 h-16" />
<h1 className="text-[2.5rem] font-semibold">Adelee</h1>
</div>
<div className="w-full flex flex-col p-4 gap-3">
    <h1 className="text-[2rem] font-semibold">Get in Touch </h1>

<p className="w-full flex gap-2"> <i className="ri-mail-send-line"></i> <span>adelee@mail.com</span></p>
<p className="w-full flex gap-2"><i className="ri-phone-line"></i> <span>+216 55 115 856</span></p>
<p className="w-full flex gap-2"><i className="ri-map-pin-line"></i><span>Adelee , beni hassen Monastir 5014</span></p>
<ul className="w-full flex gap-3 ">
        {socialMediaArray.map((item, index) => (
            <li key={index} style={{ background: "var(--nsit)"}} className="text-white p-1 w-10 h-10 flex justify-center text-center items-center cursor-pointer rounded-sm">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-white">
                    <i className={item.icon} style={{color : "white"}}></i>
                </a>
            </li>
        ))}
    </ul>
</div>
<div className="div bg-[var(--blue-2)] text-white  p-4 rounded-sm flex flex-col gap-3 ">
<p className="text-white">Join us today and start your journey towards success!</p> 

<button className={`p-2 text-white gobtn`}>
  <span className="text-white">Get Started Now</span>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <g opacity="0.54"> <path d="M8.5 12H14.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.5 15L15.5 12L12.5 9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
</button>

</div>

</div>

<div className="w-full flex-col  realtive flex   p-4 " style={{

background: 'var(--off-white)',

 
}}>


<nav className="w-full bg-white shadow-s  p-4 flex  " style={{
    justifyContent : "space-between"
}} >
    
    <ul className=" flex  gap-3">
    <li className="p-4">Home</li>
    <li className="p-4">About</li>
    <li className="p-4">Shop</li>
    <li className="p-4">Blog</li>
    <li className="p-4">Ask Ai</li>

    </ul>
    <div className="search">
        <input type="search" placeholder="Search ...." className="p-4 pi    outline-none rounded-sm" style={{
    
        }} />
    </div>
    <div className="flex gap-3">
        <button className="bg-[var(--nsit)] text-white p-4 rounded-3xl">Sign-In</button>
        <button className="bg-[var(--nsit)] text-white p-4 rounded-3xl">Become a Saller</button>
    </div>
    </nav>
<div className="w-full flex flex-col p-6 gap-3 h-full z-10">

<div className="w-full flex flex-col gap-2 ">
<h1 className="text-[5rem] font-semibold text-[var(--blue-2)]">Build Your Store</h1>
<p >Discover the best way to sell your products with us! Join our vibrant platform today!</p>
    <p>Become a seller and take control of your store while maximizing your sales potential!</p>

    <p>Our platform offers a user-friendly interface that makes managing your inventory a breeze.</p>

    <p>Join a community of successful sellers and gain access to exclusive resources and support.</p>
    </div>
<div className="w-full flex gap-3">
<button className="bg-[var(--nsit)] p-2 text-white rounded-sm">Build For Free</button>
<button className="p-2  text-white bg-[var(--blue-2)] rounded-sm"> <i className="ri-movie-line text-white"></i> Watch Gaid</button>
</div>
</div>
<div className="absolute right-20 bottom-16">


<Phone img = {'Avatar.jpg'}/>
</div>

</div>

</section>

</>
  )
}

export default Hero;