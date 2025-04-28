const socialMediaArray = [
  { icon: 'ri-instagram-line', url: 'https://instagram.com', color: '#E1306C' },
  { icon: 'ri-facebook-line', url: 'https://facebook.com', color: '#3b5998' },

  { icon: 'ri-whatsapp-line', url: 'https://whatsapp.com', color: '#25D366' },

];
import { useState } from "react";
import Search from "./Search";
import Carte from "./Carte";
import Vd from "./Vd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import HomeNav from "./HomeNav";


// Import Swiper styles
import 'swiper/css';


const Data = [

  {
    h1 : "Build Your Store",
    paragraphe : [
      
      {
p : "Discover the best way to sell your products with us! Join our vibrant platform today!"
    }
  ,
{p : '    Become a seller and take control of your store while maximizing your sales potential!'},
{p :"    Our platform offers a user-friendly interface that makes managing your inventory a breeze." },
{p : '  Join a community of successful sellers and gain access to exclusive resources and support.'},
]
,
 btnText : 'Build For Free',
Gaid  : {status : true,src: 'https://www.youtube.com/watch?v=j7GG009J9uc'},
content : {type  : "image" , src : '/pc.png'},

 
 
  }
, 
{
  h1 : "Product Costumizer",
  paragraphe : [
    
    {
p : "Discover the best way to sell your products with us! Join our vibrant platform today!"
  }
,
{p : '    Become a seller and take control of your store while maximizing your sales potential!'},
{p :"    Our platform offers a user-friendly interface that makes managing your inventory a breeze." },

]
,
btnText : 'Try it for Free',
Gaid  : {status : true,src: 'https://www.youtube.com/watch?v=j7GG009J9uc'},
content : {type  : "image" , src : '/shity.png'},



}
, 

]

const HeroNasri = () => {

  const [searching, setSearching] = useState(false);
  const [showCarte,setShowCart] = useState(false);
  const [showVd,setShowVd] = useState(false);
  return (

<>
{
  showVd ? <Vd  source = {"https://www.youtube.com/watch?v=j7GG009J9uc"} setPlay = {setShowVd} /> :  ''
}
{
showCarte ? <Carte setOpen = {setShowCart} /> : ''
}
{
  searching ? <Search/> : ""
}
<section className="w-full relative h-[100vh]" >

<HomeNav searching = {searching} setSearching = {setSearching} setShowCart = {setShowCart} />

<div className="absolute right-10 z-10 top-52 flex flex-col justify-center items-center gap-3">
<i className="swiper-button-next ri-arrow-right-line bg-[#df7862] text-white p-2 rounded-full w-14 h-14 text-[1.5rem] flex items-center justify-center cursor-pointer"></i>

<i className="ri-arrow-left-line swiper-button-prev  bg-[#df7862] text-white p-2 rounded-full w-14 h-14 text-[1.5rem] flex items-center justify-center cursor-pointer"></i>

</div>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
  
        navigation={{
          nextEl: '.swiper-button-next', // Custom class for next button
          prevEl: '.swiper-button-prev', // Custom class for previous button
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
     {
  Data.map((hero,index)=>(

<SwiperSlide className="w-full  text-white" key={index} style={{
  background: '#1d1a39'
}}>


<div className="w-full flex gap-3 p-4 h-full  justify-center items-center">

<div className="w-full p-4 flex flex-col gap-3 ">



<h1 className="text-[4.5rem] hero_title gradient font-semibold w-full ">  {hero.h1} </h1>
{
  hero.paragraphe.map((p,indexes)=>(
    <p key={`p-${indexes}`}> {p.p} </p>
  ))
}

    <div className="w-full flex-col flex gap-3">
<div className="w-full flex gap-3">
<button className="bg-[#df7862] p-4 text-white rounded-3xl"> {hero.btnText} </button>
{
  hero.Gaid.status === true ? <button className="p-4  text-white  rounded-3xl" style={{
    border : "1px solid #df7862"
  }} 
  onClick={()=>{
    setShowVd(true);
  }}
  > <i className="ri-movie-line text-white"></i> Watch Gaid</button> : ''
}
</div>
<div className="flex flex-col gap-3 bg-g w-full " >
<h1>Get in touch</h1>
<p className="w-full flex gap-2 "> <i className="ri-mail-send-line"></i> <span>adelee@mail.com</span></p>
<p className="w-full flex gap-2"><i className="ri-phone-line"></i> <span>+216 55 115 856</span></p>
<p className="w-full flex gap-2"><i className="ri-map-pin-line"></i><span>Adelee , beni hassen Monastir 5014</span></p>
<ul className="w-full flex gap-3 ">
        {socialMediaArray.map((item, index) => (
            <li key={index} style={{ background:"#df7862"}} className="text-white p-1 w-10 h-10 flex justify-center text-center items-center cursor-pointer rounded-sm">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-white">
                    <i className={item.icon} style={{color : "white" , fontSize: "16px" , display :"flex" , fontWeight : "400"}}></i>
                </a>
            </li>
        ))}
    </ul>
  </div>
</div>

</div>

<div className="item w-full h-full p-0  ">
  {
    hero.content.type === "image" ? <img src={hero.content.src} alt={`img-${index}`} className="w-full h-full" /> :''
  }

</div>
</div>


</SwiperSlide>

  ))
}
      </Swiper>

</section>



</>
  )
}

export default HeroNasri