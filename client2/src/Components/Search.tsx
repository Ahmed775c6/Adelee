
import { motion } from "framer-motion"
const seach_fct = ()=>{
    console.log('e');
}
const Search = () => {



  return (
<motion.div className="flex fixed top-0 left-0 h-[100%]  z-20 search-container justify-center flex-col w-screen"
initial = {{opacity : 0 , background : ''}}
animate = {{opacity :1 , background : "rgba(0,0,0,0.5)"}}
transition= {{delay: 0.1}}
>
<motion.form action='' onSubmit={seach_fct} className="w-full flex justify-center align-middle" 
     initial={{ y:-250  }}
     animate={{ y: 0 }}
     transition= {{delay: 0.1}}
     >
<input type="text" placeholder='Search for  products by Name Or Categorie ...' id='search' name='search' className='max-w-[80%] w-[40%] rounded-sm outline-none search-input p-4 bg-black text-white'  />


</motion.form>
</motion.div>
  )
}

export default Search;