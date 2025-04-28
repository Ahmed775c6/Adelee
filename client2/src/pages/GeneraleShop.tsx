import { useState } from "react";
import Search from "@/Components/Search";
import SidebarShop from "@/Components/ShopSide";

const GeneraleShop = () => {
    const [searching,setSearching] = useState(false);

    const Products = [
        {
            id: 1,
            name: "Product 1",
            price: 29.99,
            description: "Description for Product 1",
            imageUrl: "/assets/cashoes_01.jpg",
            discount : 39.99,
            productMark: "Adidas" // {{ edit_1 }}
        },
        {
            id: 2,
            name: "Product 2",
            price: 39.99,
            description: "Description for Product 2",
            imageUrl: "/assets/mobile-6.webp",
            discount : 49.99,
            productMark: "Apple" // {{ edit_2 }}
        },
        {
            id: 3,
            name: "Product 3",
            price: 19.99,
            description: "Description for Product 3",
            imageUrl: "/assets/shoes-1.webp",
            discount : 29.99,
            productMark: "Nike" // {{ edit_3 }}
        },
        {
            id: 4,
            name: "Product 4",
            price: 49.99,
            description: "Description for Product 4",
            imageUrl: "/assets/dress_01.jpg",
            discount : 59.99,
            productMark: null // {{ edit_4 }}
        },
        {
            id: 5, // Changed id to be unique
            name: "Product 5",
            price: 29.99,
            description: "Description for Product 5 text the size of the object skjhjlfecdklhfrceiklhrfiulhdcji,m ihf ihjfi irf", // {{ edit_5 }}
            imageUrl: "/assets/watch-1.webp",
            discount : 39.99,
            productMark: "Garmin" // {{ edit_6 }}
        },
        {
            id: 6, 
            name: "Product 6", 
            price: 49.99,
            description: "Description for Product 6", 
            imageUrl: "/assets/headphone-2.webp",
            discount : 59.99,
            productMark: "Sony" 
        }
      ]

  return (
 <>
 <div className="w-full flex flex-col ">

 {
  searching ? <Search/> : ""
}

 <nav className="w-full flex justify-between p-4 bg-[#1d1a39] text-white ">
  <div className="flex gap-3">
  <img src="/vite.svg" alt="logo" className="w-[3rem] h-[3rem]" />
  <p className="text-[2rem] text-white">Adeelee</p>
  </div>
<ul className="flex text-white justify-center gap-3 linkshero p-4">
  <li className="active">Home</li>
  <li>About & Services</li>
  <li>Shop</li>
  <li>Ask AI</li>
  <li>Blog</li>

</ul>
{
        !searching ? <i className="ri-search-line s-icon p-4 cursor-pointer z-20" id="open" onClick={()=>{
          setSearching(!searching);
      }}></i> : <i className="ri-close-line s-icon p-4 cursor-pointer z-20" id="close" onClick={()=>{
        setSearching(!searching);
      }}></i>
      }

<div className="flex gap-3">
  
  <button className="p-2 rounded-3xl bg-[#df7862] ">Sign-Up</button>

  <a href="/CreateStore" className="p-2 rounded-3xl bg-[#df7862] flex justify-center items-center text-center">Build My store</a>

</div>
</nav>

<div className="w-full flex-col fledx gap-3">
<div className="w-full flex-col gap-3 bg-blue-900 text-white h-[30vh] p-4 flex justify-center items-center text-center">
<h1>New Arrivals</h1>
<p>Shop through our latest selection of Fashion</p>
</div>

<div className="w-full flex p-4 gap-3">
    <div className="w-[30%] flex flex-col p-4 bg-white  h-full">
<SidebarShop/>
    </div>
    <div className="w-full flex flex-col gap-3 ">
        <div className="w-full flex justify-between bg-white p-4">
            <ul className="ul flex justify-center gap-3 w-full">
                <li><i className="ri-layout-grid-line"></i></li>
                <li><i className="ri-layout-column-line"></i></li>
                <li><i className="ri-layout-grid-2-line"></i></li>
            </ul>
<select name="filter" id="filter">
<option value="Default">Default</option>
<option value="Default">Default</option>
<option value="Default">Default</option>
<option value="Default">Default</option>

</select>
        </div>
        
        <div className="w-full grid grid-cols-3 gap-3">
        {
  Products.map((product,index)=>(
    <div className="w-full bg-white cursor-pointer relative rounded-sm shadow-inner flex flex-col gap-3 p-2 " key={index}>
<div className="w-full text-[#121316] flex p-3 justify-between text-[1.2rem]">
<span  style={{fontWeight : "500"}}>{product.productMark}</span>
  <i className="ri-shopping-bag-line  "></i>

</div>
<img src={product.imageUrl} alt={`img-pr-${index}`}  className="h-[70%]" />
<div className="w-full flex flex-col gap-2 p-2">
  <h1 className="text-[#1d1a39] font-semibold text-[24px]">{product.name} </h1>
<p className="w-full text-[#1d1a39] ">{product.description}</p>
<p className="w-full justify-between flex">
<span className="font-semibold"> {product.price} TND </span>
<span className="little">{product.discount} TND </span>

</p>
<button className="bg-[#df7862] p-2 rounded-sm text-white ">Buy </button>
</div>

    </div>
  ))
}

        </div>
    </div>
</div>
</div>



 </div>
 
 
 </>  
  )
}

export default GeneraleShop