import { useState } from "react"

const CreateStore = () => {
const [ActiveProgress,setActiveProgress] = useState('1');
const [completed,setCompleted] = useState('0');
const [finish,setFinish] = useState(false);
const [conf,setconf] = useState('');
const [Error, setError] = useState<string[]>([]); 
const [formData, setFormData] = useState({
    name: '',
    Lname: '',
    email: '',
    phone: '',
    state: '',
    adress: '',
    gender: '',
    Birth: '',
    storeName : '',
    categorie : '',
    password : '',

  });

  // Handle input change
  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Keep other values the same
      [name]: value, // Update the specific field being changed
    });
  };

  const findEmptyFields = () => {
    const emptyFields : any[] =  [];
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        emptyFields.push(key); 
      }
    });
    return emptyFields; 
  };

const handelNewStore = (e : any)=>{
e.preventDefault();
const Test = findEmptyFields();
if(findEmptyFields().length === 0 && finish ){
setFinish(true);
console.log('Data : ', formData);
}else{
setError(Test)
}}

return (
<>

{
Error.length > 0  ? <>
<div className="p-4 text-yellow-100 rounded-sm flex flex-col gap-3 absolute top-5 right-5 bg-yellow-400">
  <h1>You left Those Fields Empty</h1>
<div className="w-full grid grid-cols-3 gap-3">
{Error.map((elem,index)=>(
    <p key={index}> {elem} </p>
  ))}
</div>
</div>

</>:''
}
<div className="w-full flex">
    <div className="flex flex-col gap-4 bg-[var(--dark-2)] h-[100vh] w-[25%]">

        <header className="p-4 gap-5 flex" >
<img src="src/assets/react.svg" alt="logo" />
<h1 className="text-[2rem] font-semibold">Adelee</h1>
        </header>
<div className="w-full flex flex-col gap-3 p-3">
<h3>It won't take 1 min of your time</h3>
        <ul className="w-full p-4  justify-center flex flex-col gap-10">
<li className={`step gap-3 active ${completed != "0"  ? "cp" : ""}` } 

>
    <span className="flex justify-center items-center text-center">1</span>
    <p className="flex flex-col">Personale Info <i>42 s</i></p>
</li>
<li className={`step gap-3 ${ActiveProgress === '2' || ActiveProgress === '3' ? "active" : ''} ${completed == "2" ? "cp" : ""}` }>
    <span className="flex justify-center items-center text-center">2</span>
    <p className="flex flex-col">Store Info <i>2 s</i></p>
</li>
<li className={`step gap-3 ${ActiveProgress === '3' ? "active" : ''}  ` }>
    <span className="flex justify-center items-center text-center">3</span>
    <p className=" flex flex-col">Security <i>10s</i></p>
</li>
        </ul>
</div>
    </div>

    <div className="w-full p-6  bg-gray-900">
<form onSubmit={handelNewStore} className="w-full p-4 flex flex-col gap-3 ">
{
    ActiveProgress === "1" ? <>
    <h2>Your personale Informations :</h2>
    <div className="w-full grid grid-cols-2 gap-3">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="Lname">Family Name :</label>
          <input
            type="text"
            name="Lname"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="your Family name"
            value={formData.Lname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="phone">Phone Number :</label>
          <input
            type="number"
            name="phone"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="your Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="state">State :</label>
          <input
            type="text"
            name="state"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="City"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="adress">Address :</label>
          <input
            type="text"
            name="adress"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="address"
            value={formData.adress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="gender">Gender :</label>
          <input
            type="text"
            name="gender"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="your Gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="Birth">Birthday :</label>
          <input
            type="date"
            name="Birth"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="20/02/1999"
            value={formData.Birth}
            onChange={handleChange}
            required
          />
        </div>
      </div>


<div className="w-full flex justify-end">
<button type="button" onClick={()=>{
    setCompleted('1');
   setActiveProgress('2');
   
}} className="p-2 text-white cursor-pointer bg-[var(--blue-n)] rounded-sm ">NEXT</button>
    
</div>
    </> : ActiveProgress === "2" ? <>
    <h3>Store Data :</h3>
    <div className="w-full flex flex-col gap-3 ">

    <div className="w-full flex flex-col gap-2">
          <label htmlFor="storeName">Store Name :</label>
          <input
            type="text"
            name="storeName"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="your name"
            value={formData.storeName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="categorie">Products Categorie :</label>
          <input
            type="text"
            name="categorie"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="your Family name"
            value={formData.categorie}
            onChange={handleChange}
            required
          />
        </div>
<div className="w-full gap-3 flex justify-end">
<button type="button" onClick={()=>{
    setCompleted('0');
setActiveProgress('1')

}} className="p-2 text-white cursor-pointer bg-gray-400 rounded-sm ">PREV</button>
    
<button type="button" onClick={()=>{
    setCompleted('2');
    setActiveProgress('3');
}} className="p-2 text-white cursor-pointer bg-[var(--blue-n)] rounded-sm ">NEXT</button>
    
</div>
        

    </div>
    
    </> : ActiveProgress === "3" ? <>
    <h3>Set-up Password :</h3>
    <div className="w-full flex flex-col gap-3 ">
        <div className="w-full flex flex-col gap-2">
            <label htmlFor="password">Password :</label>
            <input
            type="password"
            name="password"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="your Account Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

        </div>
        <div className="w-full flex flex-col gap-2">
            <label htmlFor="Cpassword">Confirme Password :</label>
            <input
            type="password"
            name="Cpassword"
            className="w-full p-2 rounded-sm"
            style={{ border: '1px solid #ccc' }}
            placeholder="Confirme your  Password"
            value={conf}
            onChange={(e : any)=>{
setconf(e.target.value);
            }}
            required
          />

        </div>

        <div className="w-full gap-3 flex justify-end">
<button type="button" onClick={()=>{
    setActiveProgress('2')
}} className="p-2 text-white cursor-pointer bg-gray-400 rounded-sm ">PREV</button>
    
<button type="submit" onClick={()=>{

}} className="p-2 text-white cursor-pointer bg-[var(--blue-n)] rounded-sm ">FINISH</button>
    
</div>
        

    </div>
    
    
    </> :''
 }


</form>


    </div>
</div>


</>
  )
}

export default CreateStore