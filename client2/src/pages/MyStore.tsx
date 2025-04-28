import { useState } from "react";
import { ChromePicker } from 'react-color';
import NavbarSales from "@/Components/NavbarSales"
import StoreNav from "@/Components/StoreNav";
import AddProduct from "@/Components/AddProduct";

const Store = [
    {
        id: 1,
        name: "Stylish Sneakers",
        categorie: "Footwear",
        colors: ["Red", "Blue", "Black"],
        stocke: 50,
        price: 59.99,
        expenses: 30.00,
        remise: 10, // percentage discount
        photos: ["cashoes_01.jpg", "dress_01.jpg"]
    },
    {
        id: 2,
        name: "Classic T-Shirt",
        categorie: "Apparel",
        colors: ["White", "Grey", "Black"],
        stocke: 100,
        price: 19.99,
        expenses: 5.00,
        remise: 15, // percentage discount
        photos: ["elegant_01.jpg", "tshirt2.jpg"]
    },
    {
        id: 3,
        name: "Leather Backpack",
        categorie: "Accessories",
        colors: ["Brown", "Black"],
        stocke: 30,
        price: 89.99,
        expenses: 45.00,
        remise: 20, // percentage discount
        photos: ["denim_02.jpg", "backpack2.jpg"]
    },
    {
        id: 4,
        name: "Wrist Watch",
        categorie: "Accessories",
        colors: ["Silver", "Gold"],
        stocke: 20,
        price: 129.99,
        expenses: 60.00,
        remise: 5, // percentage discount
        photos: ["glasses_02.jpg", "watch2.jpg"]
    },
    {
        id: 5,
        name: "Fitness Tracker",
        categorie: "Electronics",
        colors: ["Black", "Pink"],
        stocke: 75,
        price: 49.99,
        expenses: 25.00,
        remise: 10, // percentage discount
        photos: ["headphone-4.webp", "tracker2.jpg"]
    }
];



const MyStore = () => {
    const [ThemeS,setThemS] = useState(false);
    const [currentColor, setCurrentColor] = useState('var(--blue-2)');
    const [TextColor , setTextColor] = useState('#fff');     
    const [ColorP , setColorP] = useState(false);
    const [Add,setAdd] = useState(false);
  
  
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
    <i className="ri-close-line  cursor-pointer text-white p-4" 
    style={{background : currentColor , color : TextColor}}
    onClick={()=>{
      setThemS(false);
    }}
    ></i>
    
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

    return (

<>
<div className="w-full relative flex gap-3 bg-[#f7f7fc] h-full">
    {
        Add ? <>
        <div className="w-full flex z-10 bg-[rgba(0,0,0,0.7)]  fixed top-0 left-0 h-full justify-center p-6 align-middle items-center">
        <AddProduct currentColor = {currentColor} textColor ={TextColor} />
        </div>
        
        </> : ''
    }
{
 ThemeS ? <Themes/> : ''
}

<NavbarSales/>
<main className="w-full p-4 flex flex-col gap-3">
<StoreNav setTheme = {setThemS}/>
<section className="w-full flex flex-col gap-3">
<div className="w-full bg-white rounded-sm flex p-4 flex-col gap-3">
<div className="w-full flex justify-between">
<h1 className="text-[2rem] font-semibold">Your Store :</h1>
<button 
 onClick={()=>{
  setAdd(true);
}}
className="p-2 flex text-center items-center rounded-sm justify-center gap-2" style={{background :  currentColor , color : TextColor}}>
    <i className="ri-add-line"></i>
    <span>Add Product</span>
</button>
</div>
<div className="w-full gap-3 grid grid-cols-4 p-4">
{Store.map((product,index) => (
                    <div key={index} className="w-full pr4d  flex flex-col  shadow-sm relative ">
                        <div className="flex flex-col gap-3 p-2 absolute right-2 options">
                            <i className="ri-delete-bin-line flex justify-center items-center text-center bg-red-300 text-white  h-8 w-8 rounded-sm cursor-pointer " ></i>
                            <i className="ri-edit-line flex justify-center text-center items-center bg-green-300 text-white  h-8 w-8 rounded-sm cursor-pointer " ></i>
                        </div>
                        <img src={`/assets/${product.photos[0]}`} alt={product.name} className='w-full h-[50vh]' />
                        <div className="p-3 flex w-full flex-col gap-2 bg-zinc-100">
                            <h2 className="product-name font-semibold">{product.name}</h2>
                            <p className="product-category">{product.categorie}</p>
                            <p className="w-full flex justify-between">
                       <span style={{color : currentColor}} className="text-[1.5rem]">         {(product.price * (1 - product.remise / 100)).toFixed(2)} TND </span>
                                <span className="original-price text-[14px] ">{product.price.toFixed(2)} TND </span>
                            </p>
                            <p className="product-stock">In Stock: {product.stocke}</p>
                   
                        </div>
                    </div>
                ))}
    
    
    </div>
    
    
    </div>

</section>


</main>

</div>
 
 
</>
  )
}

export default MyStore