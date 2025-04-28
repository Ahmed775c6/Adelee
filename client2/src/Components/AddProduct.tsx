import { useState } from "react";


const AddProduct = ({currentColor ,  textColor} : any) => {

    const [product, setProduct] = useState({
        name: '',
        categorie: '',
        mark: '',
        price: '',
        description: '',
        colors: [],
        tailles: [],
        expenses: [],
        sellerPrice: [],
        stocke: 0,
    });
    const handleChange = (e : any) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };



  const hendeladdProduct = (e : any)=>{
e.preventDefault();
  }
  
  return (
<>
<form onSubmit={hendeladdProduct} className="w-full  p-0 rounded-sm shadow-sm h-full bg-[#f7f7fc] ">
<header className="w-full  flex justify-between " style={{border : "1px solid #ccc"}}>
<div className=" flex justify-center p-4 gap-3">
    <i className="ri-add-line"></i>
    <h3>Add New Product</h3>
</div>
<i className="p-4 cursor-pointer  flex items-center  justify-center text-center   ri-close-large-line"></i>
</header>
<div className="w-full flex-col gap-3 flex p-4">
<h3 className="uppercase font-semibold">Generale informations :</h3>
<div className="w-full gap-3 grid grid-cols-2 p-3">
<div className="w-full flex flex-col gap-2">
<label htmlFor="Name">Product Name : </label>
<input type="text" value={product.name} name="name" placeholder="Product Name" onChange={handleChange} required className="w-full p-2 outline-none rounded-sm" style={{border : "1px dotted #ccc"}}  />

</div>
<div className="w-full flex flex-col gap-2">
<label htmlFor="stocke">Number Disponible : </label>
<input type="number" value={product.stocke} name="stocke" placeholder="stocke " onChange={handleChange} required className="w-full p-2 outline-none rounded-sm" style={{border : "1px dotted #ccc"}}  />

</div>
<div className="w-full flex flex-col gap-2">
        <label htmlFor="categorie">Category:</label>
        <input type="text" value={product.categorie} name="categorie" placeholder="Product Category" onChange={handleChange} required className="w-full p-2 outline-none rounded-sm" style={{border: "1px dotted #ccc"}} />
    </div>
    <div className="w-full flex flex-col gap-2">
        <label htmlFor="mark">Brand:</label>
        <input type="text" value={product.mark} name="mark" placeholder="Brand Name" onChange={handleChange} required className="w-full p-2 outline-none rounded-sm" style={{border: "1px dotted #ccc"}} />
    </div>
    <div className="w-full flex flex-col gap-2">
        <label htmlFor="price">Price:</label>
        <input type="number" value={product.price} name="price" placeholder="Product Price" onChange={handleChange} required className="w-full p-2 outline-none rounded-sm" style={{border: "1px dotted #ccc"}} />
    </div>
    <div className="w-full flex flex-col gap-2">
        <label htmlFor="expenses">Cost :</label>
        <input type="number" value={product.expenses} name="expenses" placeholder="Product Cost" onChange={handleChange} required className="w-full p-2 outline-none rounded-sm" style={{border: "1px dotted #ccc"}} />
    </div>

    <div className="w-full flex flex-col gap-2">
        <label htmlFor="description">Description:</label>
        <textarea value={product.description} name="description" placeholder="Product Description" onChange={handleChange} required className="w-full p-2 outline-none rounded-sm" style={{border: "1px dotted #ccc"}} />
    </div>



</div>
<div className="w-full flex justify-end">
<button type="button" className="p-2 " style={{background : currentColor, color : textColor}}>NEXT</button>
</div>

</div>
</form>

</>
  )
}

export default AddProduct