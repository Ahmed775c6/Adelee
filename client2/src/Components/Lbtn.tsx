import Btnloader from "./Btnloader"

const Lbtn = ({isloading,text,bgcolor} : any) => {
  return (
<button 
type="submit"
className="w-full  p-2 text-white uppercase flex justify-center items-center text-center gap-2 cursor-pointer" 
style={{background : bgcolor}}
disabled ={isloading}
>
    {isloading ? <Btnloader/> : '' }
    {text}</button>
  )
}

export default Lbtn