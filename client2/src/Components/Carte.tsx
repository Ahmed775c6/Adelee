

const DataCarte: any[] = []; 
const Carte = ({setOpen} :any) => {
  return (
<>
<div className="w-full fixed h-full z-40 bg-[rgba(0,0,0,0.5)]">
    <div className="absolute right-0 top-0  bg-white w-[35%] h-full flex flex-col ">
<header className="p-4 w-full font-semibold bg-[#fa8d74] text-white flex justify-between" style={{
    borderBottom : "1px solid #ccc"
}}>
<div className="w-full flex gap-3">
<i className="ri-shopping-cart-line"></i>
<p>Your Shopping Carte</p>
</div>
<i className="ri-close-large-line cursor-pointer " onClick={()=>{
    setOpen(false);
}}></i>


</header>
<div className="w-full flex flex-col gap-3 p-4 justify-center text-center">
{
    DataCarte.length === 0 ? <p>Your Carte is Empty !</p> : DataCarte.map((item, index) => (
        <div className="w-full cursor-pointer" key={index}>
            <img src={item.img} alt={`${index}`} />
            <p>{item.name}</p> {/* Display item name or relevant details */}
            <p>Price: ${item.price}</p> {/* Display item price or relevant details */}
        </div>
    ))
}
  


</div>
<button className="bg-[#fa8d74] p-2 text-white absolute bottom-0 left-0 w-full cursor-pointer">CheckOut</button>

    </div>

</div>

</>
  )
}

export default Carte