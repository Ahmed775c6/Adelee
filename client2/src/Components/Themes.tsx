import { useState } from 'react';
import { ChromePicker } from 'react-color';
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
      
      const [currentColor, setCurrentColor] = useState('var(--blue-2)');
const [TextColor , setTextColor] = useState('#fff'); 
  
const [ColorP , setColorP] = useState(false);
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
<i className="ri-close-line  cursor-pointer text-white p-4" style={{background : currentColor , color : TextColor}}></i>

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

export default Themes