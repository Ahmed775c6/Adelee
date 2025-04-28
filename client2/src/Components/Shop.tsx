

const Shop = () => {
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
<section className="w-full flex p-6  min-h-[100vh] mt-96 flex-col gap-3">
<h1>Browse Products</h1>
<div className="w-full grid grid-cols-4  gap-3">
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
</section>

</>
  )
}

export default Shop