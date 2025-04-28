

const StoreData = ({ item , setStore}: any) => {
    return (
      <>
        <div className="w-full fixed z-20 flex flex-col gap-3 top-0 left-[100px] text-white h-[100vh] bg-[rgba(0,0,0,1)]">

<i className="ri-close-large-line text-[2rem] absolute top-10 font-bold cursor-pointer left-[86%] z-20 text-white"
onClick={()=>{
    setStore(null);
}}
></i>

          <div className="w-full p-4">
            <header className="w-full p-4 flex font-bold text-[2rem]">
              {item.name}
            </header>
<div className="w-[95%] p-6 flex ">
<div className="w-full flex flex-col gap-3">
    
    <div className="mt-4">
                <p className="font-medium">Creator:</p>
                <div className="flex items-center mt-1">
                  <img 
                    src={item.creator.profilePic} 
                    alt={`${item.creator.name} profile`} 
                    className="w-10 h-10 rounded-full mr-2" 
                  />
                  <div>
                    <p className="text-lg">{item.creator.name}</p>
                    <p className="text-sm text-gray-300">{item.creator.email}</p>
                  </div>
                </div>
              </div>
    
   
              <p className="mt-4 text-gray-300">Date Created: {new Date(item.dateOfCreation).toLocaleDateString()}</p>
    
              <div className="mt-4">
                <p className="font-medium">Products:</p>
                <p>{item.products.length}</p>
              </div>
    
         
              <div className="mt-4">
                <p>Income: <span className="font-semibold">TND {item.income}</span></p>
              </div>
    
           
              {item.description && (
                <div className="mt-4">
                  <p className="font-medium">Description:</p>
                  <p>{item.description}</p>
                </div>
              )}
    </div>

    <div className="w-full grid grid-cols-2 gap-3 bg-[#222222] p-2  max-h-[80vh] overflow-y-scroll">

    {item.products.map((product : any, index : any) => (
              <div key={index} className=" bg-gray-800 rounded-sm shadow-lg">
                {/* Assuming each product has a name and image */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full max-h-56 object-cover rounded" 
                />
              <div className="w-full flex flex-col gap-3 p-3">
              <p className="mt-2 text-lg font-semibold">{product.name}</p>
              <p className="text-sm text-gray-300">Price: TND {product.price}</p>
              </div>
                {/* Add more product details as necessary */}
              </div>
            ))}


    </div>
</div>
         
          </div>
        </div>
      </>
    );
  };
  
  export default StoreData;
  