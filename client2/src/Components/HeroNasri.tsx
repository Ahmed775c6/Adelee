import { Social, hexColorMap } from "@/lib/Types101";

  const Icons = {
    Facebook: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6  ">
        <path 
          d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0"
          fill="currentColor"
        />
      </svg>
    ),
    Instagram: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path 
          d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.266-.061-1.647-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421C8.413 2.225 8.79 2.16 12 2.16zm0 5.665c-2.318 0-4.21 1.88-4.21 4.21s1.892 4.21 4.21 4.21 4.21-1.89 4.21-4.21-1.893-4.21-4.21-4.21zm0 6.41c-1.207 0-2.19-.982-2.19-2.19 0-1.208.982-2.189 2.19-2.189 1.208 0 2.19.981 2.19 2.19 0 1.207-.981 2.189-2.19 2.189zm6.427-6.427c0 1.207-1.01 2.19-2.25 2.19s-2.25-.983-2.25-2.19 1.01-2.19 2.25-2.19 2.25.983 2.25 2.19z"
          fill="currentColor"
        />
      </svg>
    ),
    WhatsApp: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path 
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          fill="currentColor"
        />
      </svg>
    ),
    TikTok: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path 
          d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
          fill="currentColor"
        />
      </svg>
    )
  };
  const socialMediaArray: Social[] = [
    {
      platform: "Facebook",
      color: "blue",
      link: 'https://facebook.com',
      delay: 0.1,
    },
    {
      platform: "Instagram",
      color: "pink",
      link: 'https://instagram.com',
      delay: 0.2,
    },
    {
      platform: "WhatsApp",
      color: "green",
      link: 'https://whatsapp.com',
      delay: 0.3,
    },
    {
      platform: "TikTok",
      color: "white",
      link: '',
      delay: 0.4,
    },
  ];
import { motion } from "framer-motion";
import GlassButton from "./GlassyIcons";
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
<button className="bg-[#df7862] p-4 text-white rounded-3xl  overflow-hidden backdrop-blur-lg  
          justify-center  text-center mb-4 mr-4 inline-flex items-center
           transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"     style={{
        background: `linear-gradient(135deg, #df7862, #df7862)`,
        boxShadow: `0 4px 30px #df7862`,
        border: `1px solid df7862`
      }}> {hero.btnText} </button>
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
      
             {socialMediaArray.map((social, index) => {
              const IconComponent = Icons[social.platform as keyof typeof Icons];
              return (
                <motion.div
                  key={index}
                  initial={{ x: "100vh" }}
                  animate={{ x: 0 }}
                  transition={{ delay: social.delay, type: "spring", stiffness: 50 }}
                >
                  <GlassButton
                    color={hexColorMap[social.color]}
                    icon={<IconComponent />}
                    label={social.platform}
                    onClick={()=>{
                      window.open(social.link, '_blank');
                    }}
                  />
                </motion.div>
              );
            })}
        
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