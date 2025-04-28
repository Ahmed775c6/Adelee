const notifications = [
    {
      title: "New Sale",
      icon: "ri-shopping-cart-line", // Icon for sale
      time: "2 mins ago",
      color: "var(--green-n)", // Green for success
    },
    {
      title: "New Feature Arrived",
      icon: "ri-star-line", // Icon for new feature
      time: "5 mins ago",
      color: "var(--blue-n)", // Blue for features
    },
    {
      title: "New Follower",
      icon: "ri-user-add-line", // Icon for new follower
      time: "10 mins ago",
      color: "var(--red)", // Cyan for followers
    },
    {
      title: "New Affiliate Marketing Agent",
      icon: "ri-user-settings-line", // Icon for affiliate agent
      time: "15 mins ago",
      color: "var(--yellow)", // Yellow for marketing
    },
    {
      title: "New Store Opened",
      icon: "ri-store-2-line", // Icon for store
      time: "1 hour ago",
      color: "#17a2b8", // Red for store opening
    },
  ];
  
  

  
const Notifications = () => {
  return (
<>
<div className="w-full flex flex-col">
<header className="w-full p-4 flex font-semibold text-gray-500" style={{borderBottom : "1px solid #ccc"}}> Recent Notifications  </header>
<div className="w-full flex flex-col p-2">
  {notifications.map((notification, index) => (
    <div
      key={index}
      className="flex items-center gap-3 p-2 my-1 rounded-lg"
   
    >
      <i className={`${notification.icon}  rounded-sm text-white p-2`}
         style={{ backgroundColor: notification.color }}
      ></i>
      <div className="flex flex-col ml-2">
        <span className="font-semibold ">{notification.title}</span>
        <span className=" text-sm">{notification.time}</span>
      </div>
    </div>
  ))}
</div>


</div>

</>
  )
}

export default Notifications