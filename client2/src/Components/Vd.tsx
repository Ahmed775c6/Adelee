

const Vd = ({source , setPlay} : any) => {
  return (
    <>
    <div className="w-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-20 flex h-full justify-center items-center">
        <i className="absolute right-12 top-20 z-20 text-white cursor-pointer text-[2rem] ri-close-large-line" onClick={()=>{
            setPlay(false);
        }}></i>
         <iframe 
            width="80%" 
            height='500px' 
            src={`https://www.youtube.com/embed/${source.split('v=')[1]}`} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
        ></iframe>
    </div>
    
    </>

  )
}

export default Vd