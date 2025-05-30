import './style.css';
import deliveryGuy from './assets/delivery-guy.png';
import cheeseburger from './assets/cheeseburger.PNG';
import beefBurger from './assets/beef-burger.PNG';
import royalCheeseburger from './assets/royal-cheeseburger.PNG';
import blackBurger from './assets/black-burger.PNG';
import chickenBurger from './assets/chicken-burger.PNG';
import pizza1 from './assets/pizza-1.PNG';
import pizza2 from './assets/pizza-2.PNG';
import pizza3 from './assets/pizza-3.PNG';
import burger1 from './assets/burger-1.PNG';
import fries from './assets/fries.PNG';
import blackBurger2 from './assets/black-burger2.PNG';
import mobileApp from './assets/mobile-app.jpg';
import clientImage from './assets/client.png';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <nav>
          <div className="logo">E<span>Food</span></div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Top Cities</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="sign-up">Sign Up</button>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Super Fast <span>Food</span> Delivery Service
          </h1>
          <p>
            We provide super fast delivery service. Let's use our service now and get discounts of up to 50%.
          </p>
          <button className="explore">Explore Food</button>
          <button className="download">Download App</button>
        </div>
        <div className="hero-image">
          <img src={deliveryGuy} alt="Delivery Guy" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>
          Our Popular <span>Category</span>
        </h2>
        <div className="category-buttons">
          <button className="active">🍔 Burger</button>
          <button>🍕 Pizza</button>
          <button>🥪 Sandwich</button>
          <button>🍜 Asian Food</button>
          <button>🍱 Set Menu</button>
        </div>
        <div className="product-list">
          <div className="product-card">
            <img src={cheeseburger} alt="Cheeseburger" />
            <h3>Cheeseburger with Salad</h3>
            <div className="stars">★★★★★</div>
            <p>$18.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={beefBurger} alt="Beef Burger" />
            <h3>Beef Burger</h3>
            <div className="stars">★★★★★</div>
            <p>$15.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={royalCheeseburger} alt="Royal Cheeseburger" />
            <h3>Royal Cheeseburger</h3>
            <div className="stars">★★★★★</div>
            <p>$16.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={blackBurger} alt="Black Burger" />
            <h3>Black Burger</h3>
            <div className="stars">★★★★★</div>
            <p>$14.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={chickenBurger} alt="Chicken Burger" />
            <h3>Chicken Burger</h3>
            <div className="stars">★★★★★</div>
            <p>$15.00</p>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="pagination">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="restaurants">
        <h2>
          Top Food <span>Restaurant</span>
        </h2>
        <div className="restaurant-list">
          <div className="restaurant-card">
            <img src={pizza1} alt="Blaze Pizza" />
            <div className="restaurant-content">
              <div className="restaurant-name">Blaze Pizza</div>
              <div className="restaurant-time">
                <i className="fas fa-clock"></i> 11:00 AM - 10:00 PM
              </div>
              <button className="restaurant-button">
                Explore <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="restaurant-card">
            <img src={pizza2} alt="Pizza Ranch" />
            <div className="restaurant-content">
              <div className="restaurant-name">Pizza Ranch</div>
              <div className="restaurant-time">
                <i className="fas fa-clock"></i> 09:00 AM - 10:00 PM
              </div>
              <button className="restaurant-button">
                Explore <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="restaurant-card">
            <img src={pizza3} alt="Dion’s Pizza Hut" />
            <div className="restaurant-content">
              <div className="restaurant-name">Dion’s Pizza Hut</div>
              <div className="restaurant-time">
                <i className="fas fa-clock"></i> 10:00 AM - 12:00 PM
              </div>
              <button className="restaurant-button">
                Explore <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="restaurant-card">
            <img src={burger1} alt="Royal Burger" />
            <div className="restaurant-content">
              <div className="restaurant-name">Royal Burger</div>
              <div className="restaurant-time">
                <i className="fas fa-clock"></i> 11:00 AM - 10:00 PM
              </div>
              <button className="restaurant-button">
                Explore <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="restaurant-card">
            <img src={fries} alt="KFC Restaurant" />
            <div className="restaurant-content">
              <div className="restaurant-name">KFC Restaurant</div>
              <div className="restaurant-time">
                <i className="fas fa-clock"></i> 09:00 AM - 10:00 PM
              </div>
              <button className="restaurant-button">
                Explore <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="restaurant-card">
            <img src={blackBurger2} alt="Star Food" />
            <div className="restaurant-content">
              <div className="restaurant-name">Star Food</div>
              <div className="restaurant-time">
                <i className="fas fa-clock"></i> 10:00 AM - 12:00 PM
              </div>
              <button className="restaurant-button">
                Explore <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="download-app">
        <div className="download-content">
          <h2>
            Download <span>Our Mobile App</span>
          </h2>
          <p>
            It’s all at your fingertips — the restaurants you love. Find the right food to suit your mood,
            and make the first bite last. Go ahead, download app and get 50% discount.
          </p>
          <div className="download-buttons">
            <a href="#" className="app-button">
              <i className="fab fa-apple"></i>
              <div>
                <span className="small-text">Download on the</span>
                <span className="big-text">App Store</span>
              </div>
            </a>
            <a href="#" className="app-button google">
              <i className="fab fa-google-play"></i>
              <div>
                <span className="small-text">Get it on</span>
                <span className="big-text">Google Play</span>
              </div>
            </a>
          </div>
        </div>
        <div className="download-image">
          <img src={mobileApp} alt="Mobile App Screens" />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <h2>
          What Our Client Are <span>Saying</span>
        </h2>
        <div className="testimonial-container">
          <div className="testimonial-image">
            <img src={clientImage} alt="Client" />
          </div>
          <div className="testimonial-content">
            <p>
              "EFood has the most intriguing food order system in the country. UI in both their app and web is very 
              simple and easy to use, enhancing the UX. Their delivery men are also quite professional and know 
              the neighborhood well. Till now I never had to guide them to my address for delivery."
            </p>
            <div className="client-info">
              <h3>Angelina Jolie</h3>
              <span>Food lover</span>
            </div>
            <div className="testimonial-navigation">
              <button className="prev">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="next">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe">
        <div className="subscribe-content">
          <h2>Subscribe to get the Latest Offer</h2>
          <p>Get our daily updates by subscribing to our newspaper. Please drop your email below.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email address" />
            <button className="subscribe-btn">
              <i className="fas fa-paper-plane"></i> Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-container">
          <div className="footer-brand">
            <h3>
              E<span>Food</span>
            </h3>
            <p>📍 Dhaka, Bangladesh</p>
            <p>📞 094383339</p>
            <p>📧 support@efood.com</p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h4>Service</h4>
              <ul>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Home delivery</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Menu</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our trusted partner</a></li>
                <li><a href="#">New users FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help center</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Download app</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">What's new</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 EFood - All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
