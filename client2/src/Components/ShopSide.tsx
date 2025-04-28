import  { useState } from 'react';

const SidebarShop = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section : any) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="w-full h-full flex flex-col gap-3">
      {/* Product Categories Section */}
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('categories')}>
          Product categories <span>{activeSection === 'categories' ? '▲' : '▼'}</span>
        </div>
        {activeSection === 'categories' && (
          <div className="section-content">
            <ul>
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Garden</li>
              <li>Sports & Outdoors</li>
              <li>Beauty & Health</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sale Products Section */}
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('sale')}>
          Sale products <span>{activeSection === 'sale' ? '▲' : '▼'}</span>
        </div>
        {activeSection === 'sale' && (
          <div className="section-content">
            <ul>
              <li>50% off on Electronics</li>
              <li>30% off on Fashion</li>
              <li>Up to 40% off on Home & Garden</li>
              <li>Buy 1 Get 1 Free on Beauty Products</li>
            </ul>
          </div>
        )}
      </div>

      {/* Shipping & Delivery Section */}
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('shipping')}>
          Shipping & Delivery <span>{activeSection === 'shipping' ? '▲' : '▼'}</span>
        </div>
        {activeSection === 'shipping' && (
          <div className="section-content">
            <p>We offer worldwide shipping. Delivery times vary depending on your location:</p>
            <ul>
              <li>USA: 5-7 business days</li>
              <li>Europe: 7-10 business days</li>
              <li>Asia: 10-15 business days</li>
              <li>Rest of the World: 15-20 business days</li>
            </ul>
          </div>
        )}
      </div>

      {/* Gallery Section */}
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('gallery')}>
          Gallery <span>{activeSection === 'gallery' ? '▲' : '▼'}</span>
        </div>
        {activeSection === 'gallery' && (
          <div className="section-content">
            <div className="gallery">
              <img src="https://via.placeholder.com/150" alt="Gallery Item 1" />
              <img src="https://via.placeholder.com/150" alt="Gallery Item 2" />
              <img src="https://via.placeholder.com/150" alt="Gallery Item 3" />
            </div>
          </div>
        )}
      </div>

      {/* Follow Us Section */}
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('follow')}>
          Follow us <span>{activeSection === 'follow' ? '▲' : '▼'}</span>
        </div>
        {activeSection === 'follow' && (
          <div className="section-content">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <i className="ri-close-line"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                <i className="ri-tiktok-line"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                <i className="ri-pinterest-line"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarShop;
