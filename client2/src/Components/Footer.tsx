

const Footer = () => {
  return (
<>
<section className="w-full flex flex-col text-white p-6 bg-[var(--dark-2)]">
<div className="w-full grid grid-cols-4 gap-3">
<div className="w-full p-4 flex flex-col gap-2">
<div className="w-full flex gap-3 text-center">
<img src="src/assets/react.svg" alt="logo" className="object-cover w-[6rem] " />
<h1 className="text-white text-[2rem] flex justify-center items-center font-bold text-[var(--orange)]">Adeelee</h1>
</div>
<p>
In response to the challenges facing e-commerce in Tunisia, we developed this app to empower business owners to grow their online shops. Our goal is to make it accessible to the average person, helping them thrive in the digital marketplace.
</p>
<ul className="flex  gap-3">
  <li><i className="ri-facebook-line"></i> </li>
  <li><i className="ri-instagram-line"></i></li>
  <li><i className="ri-tiktok-line"></i></li>
  <li><i className="ri-whatsapp-line"></i></li>
</ul>
</div>
<div className="w-full p-4 flex flex-col gap-3">
  <h3 className="font-semibold">Get in Touch</h3>
<p>Feel free to reach out to us for any inquiries, feedback, or support. We're here to assist you and ensure you have the best experience possible. Contact us anytime, and we'll get back to you promptly.</p>
<ul className=" w-full flex flex-col gap-3">
<li className="flex gap-3"><i className="ri-map-pin-line"></i><span>
Rue De chiha Flech City Beni-hassen Monastir 5014</span></li>
<li className="flex gap-3"> <i className="ri-phone-line"></i> <span> +216 55 115 856</span> </li>
<li className="flex gap-3">
<i className="ri-message-line">

</i>
<span>Ahmed.chouikh2020@gmail.com</span>

</li>
</ul>
</div>


<div className="w-full p-4 flex flex-col gap-3">
  <h3>Helpful Links</h3>
<ul className="w-full flex flex-col gap-3">
  
  <li>Affiliate Marketing</li>
<li>FAQ & Terms </li>
<li>Shop</li>
<li>Support</li>
<li>Ask AI</li>
<li>Product Costumizer</li>
<li>Create Your Own App</li>

</ul>
</div>
<div className="w-full p-4 flex flex-col gap-3">
    <h3 className="font-semibold">Subscribe to Our Newsletter</h3>
    <p>Stay updated with our latest news and special offers. Sign up now!</p>
    <form className="flex flex-col gap-2" action="/api/subscribe" method="post">
      <input type="email" placeholder="Enter your email" className="p-2 rounded" />
      <button className="bg-[#df7862] text-white p-2 rounded">Subscribe</button>
    </form>
  <div className="w-full flex relative  flex-col">
  <a href="/https:/skaroIt.com">Devolopped By <span className="text-blue-400">SkaroIT</span></a>
  <img src="/HERMES.png" alt="hermes" className="w-20 absolute right-0 top-0 " />
  </div>
  </div>

</div>
<div className="w-full  p-2 text-center">
    <p>&copy; {new Date().getFullYear()} Adeelee. All rights reserved.</p>

  </div>

</section>

</>
  )
}

export default Footer