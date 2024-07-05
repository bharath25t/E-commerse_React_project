import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faReddit, faWeixin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  // Fetch data from API (you might want to use useEffect hook for this)
  useEffect(() => {
    fetch('http://localhost/netflix/netflix.php') // Update with your actual API endpoint
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className='bg'>
        <div>
          <img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt="Netflix" className="center" width={50} />
        </div>

        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.map((product, index) => (
              <div className="col" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <Link to={`/item/${product.product_id}`}>
                    <img src={product.product_img} className="card-img-top" alt={product.product_name} height="250px" />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.product_name}</h5>
                    <p className="card-text">{product.product_price}</p>
                    <button onClick={() => addToCart(product)} className="btn btn-primary">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
        {/* Footer section */}
        <footer className="footer mt-5 py-5 bg-black text-light">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 mb-4 mb-md-0">
                <h5>Feedback</h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="feedback" className="form-label">Tell us what you think:</label>
                    <textarea className="form-control" id="feedback" rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
              <div className="col-md-6">
                <h5>Contact Us</h5>
                <p>Email: <a href="mailto:bharaths139@gmail.com">bharaths139@gmail.com</a></p>
                <p>Phone: +1 (123) 456-7890</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col text-center">
                <a href="https://www.instagram.com/bharath_25t?igsh=N2R2bG1xN2kxeWVs&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" className="me-3 text-light" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" className="me-3 text-light" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x" className="me-3 text-light" />
                </a>
                <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faReddit} size="2x" className="me-3 text-light" />
                </a>
                <a href="https://wechat.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWeixin} size="2x" className="me-3 text-light" />
                </a>
                <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" className="me-3 text-light" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
