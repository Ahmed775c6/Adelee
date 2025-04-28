
import StoreNav from "./StoreNav";

const StoreMain = ({setTheme } : any) => {
    const OverView = [
        {
          icon: "ri-wallet-3-line",  
          stoke: "var(--blue-2)", 
          label: "Profit",
          count: "$12,450",
        },
        {
          icon: "ri-shopping-cart-line",  
          stoke: "var(--blue)",  
          label: "Sales",
          count: "1,290",
        },
        {
          icon: "ri-box-3-line", 
          stoke: "var(--yellow)",  
          label: "Products",
          count: "320",
        },
        {
          icon: "ri-bank-card-line",  
          stoke: "var(--red)",  
          label: "Expenses",
          count: "$7,800",
        }
      ];
 
      
      

  return (
<>
<div className="w-full p-4 bg-[#f7f7fc]  flex flex-col gap-3 ">

<StoreNav setTheme = {setTheme} />
<main className="w-full flex flex-col gap-3">

    <section className="flex justify-center gap-3">
<div className="w-full flex flex-col gap-3">
    <div className="w-full bg-white shadow-sm rounded-sm p-4 flex flex-col gap-2">
<h1 className="text-[1.4rem] text-[var(--blue-2)] font-semibold">Welcome  Ahmed Chouikh</h1>
<p className="text-gray-600">
    Easily manage your sales and activities in one place, with tools to streamline your workflow and stay on top of your progress.
</p>
<button className="p-2 bg-[var(--blue-2)] text-white rounded-sm cursor-pointer">Watch Gaid </button>

    </div>
</div>
<div className="w-full flex flex-col gap-3">
<div className="w-full grid gap-2 grid-cols-2">
{OverView.map((item : any, index) => (
    <div key={index} className="w-full p-4 flex gap-3 bg-white rounded-sm" style={{boxShadow:' rgba(149, 157, 165, 0.2) 0px 8px 24px'}} >
      <i className={
        `${item.icon} p-2 flex justify-center items-center text-center  rounded-sm w-10 h-10  text-white`
      } 
style={{backgroundColor : item.stoke}} 
      ></i>
      <div className="flex gap-3 flex-col relative w-full">
        <svg className={`line-chart `} style={{stroke : item.stoke}} viewBox="0 0 80 50" >
          <path d="M 0 40 L 25 20 L 50 35 L 75 10 L 100 30"></path>
        </svg>
        <h1 className="font-semibold">{item.label}</h1> {/* Assuming item has a title property */}
        <span>{item.count}</span> {/* Assuming item has a value property */}
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

export default StoreMain