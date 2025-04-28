import { useState ,useEffect,  useRef } from "react";
import { ChromePicker } from 'react-color';
import NavbarSales from "@/Components/NavbarSales"


const RecentMessages = [
  {
      Messageid: '1',
      Message: 'Hello',
      Time: '10:00',
      prf: '/Avatar.jpg',
      sender: 'Ahmed Chouikh'
  },
  {
      Messageid: '2',
      Message: 'How are you?',
      Time: '10:05',
      prf: '/Avatar.jpg',
      sender: 'Sarah Johnson'
  },
  {
      Messageid: '3',
      Message: 'Are we still on for the meeting?',
      Time: '10:15',
      prf: '/Avatar.jpg',
      sender: 'Michael Smith'
  },
  {
      Messageid: '4',
      Message: 'Just sent you the documents.',
      Time: '10:20',
      prf: '/Avatar.jpg',
      sender: 'Jessica Lee'
  },
  {
      Messageid: '5',
      Message: 'Great job on the presentation!',
      Time: '10:30',
      prf: '/Avatar.jpg',
      sender: 'David Brown'
  },
  {
      Messageid: '6',
      Message: 'Let’s catch up later.',
      Time: '10:45',
      prf: '/Avatar.jpg',
      sender: 'Emily Davis'
  },
  {
      Messageid: '7',
      Message: 'Happy Birthday! Hope you have a great day!',
      Time: '11:00',
      prf: '/Avatar.jpg',
      sender: 'John Doe'
  },
  {
      Messageid: '8',
      Message: 'Can you review my last email?',
      Time: '11:15',
      prf: '/Avatar.jpg',
      sender: 'Kate Wilson'
  }
];
const user = {
  id : '1',
  name : 'Ahmed Chouikh',
  avatar: '/Avatar.jpg',
  messages: [],
  messagesCount: 0,

}



const Messager = () => {
    const [ThemeS,setThemS] = useState(false);
    const [currentColor, setCurrentColor] = useState('var(--blue-2)');
    const [TextColor , setTextColor] = useState('#fff');     
    const [ColorP , setColorP] = useState(false);
    const [message,setMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [Messages, setMessages] = useState([
      {
          Messageid: '1',
          Message: 'Hey, how’s it going?',
          Time: '10:00',
          sender: 'Ahmed',
      },
      {
          Messageid: '2',
          Message: 'I’m good, thanks! And you?',
          Time: '10:01',
          sender: 'Sarah',
      },
      {
          Messageid: '3',
          Message: 'Doing well! Are we still on for lunch?',
          Time: '10:02',
          sender: 'Ahmed',
      },
      {
          Messageid: '4',
          Message: 'Yes, what time do you want to meet?',
          Time: '10:03',
          sender: 'Sarah',
      },
      {
          Messageid: '5',
          Message: 'How about 1 PM?',
          Time: '10:04',
          sender: 'Ahmed',
      },
      {
          Messageid: '6',
          Message: 'Sounds perfect! See you then.',
          Time: '10:05',
          sender: 'Sarah',
      }
  ]);
    const handelMessage = (e : any) => {
      e.preventDefault();
      if (message.trim() === '') return; // Prevent empty messages

      const newMessage = {
          Messageid: (Messages.length + 1).toString(),
          Message: message,
          Time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sender: 'Ahmed', // Replace with the actual sender if necessary
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
  };

  useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [Messages]);

const [searching,setSearching] = useState('');




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
    <div className="w-full relative flex gap-3 bg-[#f7f7fc] max-h-[100vh] h-[100vh]">
   {
    ThemeS ? <Themes/> : ''
   }
   
   <NavbarSales/>
   <main className="w-full p-4 flex flex-col gap-3 max-h-[100vh] h-[100vh] ">
 
   <section className="w-full flex flex-col gap-3 max-h-[100%] ">
    <div className="w-full h-full  bg-white rounded-sm  flex max-h-[100vh] " >
        <div className="right-side rounded-sm w-[25%]  h-full max-h-[100vh]"  style={{  borderTopRightRadius : 0 , borderBottomLeftRadius :0}}>
<header className="w-full p-4 font-semibold flex shadow-sm mt-1" >Messages</header>
<input type="text" className="w-full p-2 outline-none" onChange={(e:any)=>{
  setSearching(e.target.value);
}} placeholder="search by name ... "/>
<div className="w-full bg-white flex flex-col gap-3 max-h-[80vh] overflow-y-auto" >
  {RecentMessages.filter(item => 
    searching === '' || item.sender.toLowerCase().includes(searching.toLowerCase())
  ).map((item, index) => (
    <div className="w-full p-4 cursor-pointer hv gap-3 flex" key={index}>
      <img src={item.prf} alt={`avatar-${index}`} className="w-11 h-11 object-cover rounded-full" />
      <div className="w-full flex flex-col gap-1">
        <p>{item.sender}</p>
        <span>{item.Time}</span>
      </div>
    </div>
  ))}
</div>





        </div>
        <div className=" flex-1 flex flex-col   rounded-sm h-full">
<header className="w-full flex gap-3 p-1  shadow-sm" >
<div className="relative">
<img src={user.avatar} alt={`user-${user.id}`} className="w-11  h-11 rounded-full object-cover" />
<span className="absolute bottom-1 right-0 w-2 h-2 bg-green-400 rounded-full"></span>
</div>
<div className="w-full flex flex-col ">
  <p >{user.name}</p>
<p>Online</p>
</div>
</header>
<div className="left-side w-full h-full p-4 max-h-[80vh] flex flex-col overflow-y-auto ">
                {Messages.map((msg) => (
                    <div key={msg.Messageid} className={`message ${msg.sender === 'Ahmed' ? 'sent' : 'received'}`} style={{background : msg.sender === "Ahmed" ? currentColor : '',}}>
                        <div className="sender">{msg.sender}</div>
                        <div className="message-content">{msg.Message}</div>
                        <div className="time">{msg.Time}</div>
                    </div>
                ))}
                <div ref={messagesEndRef} /> {/* Empty div for scrolling */}
            </div>


<form onSubmit={handelMessage} className="w-full flex  bg-white ">
<input
 type="text" 
 name="message"
 required
 className="w-full shadow-sm p-2 outline-none " 
 placeholder="Your Message ..."
 style={{borderTop : "1px solid #ccc"}}
 value={message} onChange={(e)=>{
  setMessage(e.target.value);
}} />
<button type="submit" className="p-2" style={{background : currentColor , color : TextColor}}>SEND</button>
</form>
        </div>

    </div>
   
   </section>
   
   
   </main>
   
   </div>
    
    
    </> 
  )
}

export default Messager