// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Series from './Series';
import Cart from './Cart';
import ItemDetail from './ItemDetail';
import { CartProvider } from './CartContext';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const items = [
    {
      title: "Money Heist",
      description: "Money Heist, originally titled La Casa de Papel, is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain and one on the Bank of Spain. The narrative is told in a real-time-like fashion and relies on flashbacks, time-jumps, hidden character motivations, and an unreliable narrator for complexity.",
      price: "INR 500/-",
      imgSrc: "https://cdna.artstation.com/p/assets/images/images/046/103/336/large/illusion-design-money-heist-poster-min.jpg?1644314844"
    },
    {
      title: "Wednesday",
      description: "Wednesday is a supernatural comedy horror series following Wednesday Addams from the Addams Family as she navigates her teenage years at Nevermore Academy. She attempts to master her emerging psychic ability, thwart a monstrous killing spree that has terrorized the local town, and solve the supernatural mystery that embroiled her parents 25 years ago, all while navigating her new and very tangled relationships at Nevermore.",
      price: "INR 749/-",
      imgSrc: "https://hips.hearstapps.com/hmg-prod/images/wednesday-s1-e4-00-34-26-18r-1670000381.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
    },
    {
      title: "Stranger Things",
      description: "Stranger Things is an American science fiction horror drama series created by the Duffer Brothers. Set in the 1980s in the fictional town of Hawkins, Indiana, the series focuses on the investigation into the disappearance of a young boy amid supernatural events occurring around the town, including the appearance of a girl with psychokinetic abilities who helps the missing boy's friends in their own search.",
      price: "INR 899/-",
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
      title: "Iron Man",
      description: "Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures, it is the first film in the Marvel Cinematic Universe (MCU). The film stars Robert Downey Jr. as Tony Stark, an industrialist and master engineer who builds a mechanized suit of armor and becomes the technologically advanced superhero Iron Man.",
      price: "INR 766/-",
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Money Heist",
      description: "Money Heist, originally titled La Casa de Papel, is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain and one on the Bank of Spain. The narrative is told in a real-time-like fashion and relies on flashbacks, time-jumps, hidden character motivations, and an unreliable narrator for complexity.",
      price: "INR 489/-",
      imgSrc: "https://cdna.artstation.com/p/assets/images/images/046/103/336/large/illusion-design-money-heist-poster-min.jpg?1644314844"
    },
    {
      title: "Wednesday",
      description: "Wednesday is a supernatural comedy horror series following Wednesday Addams from the Addams Family as she navigates her teenage years at Nevermore Academy. She attempts to master her emerging psychic ability, thwart a monstrous killing spree that has terrorized the local town, and solve the supernatural mystery that embroiled her parents 25 years ago, all while navigating her new and very tangled relationships at Nevermore.",
      price: "INR 765/-",
      imgSrc: "https://hips.hearstapps.com/hmg-prod/images/wednesday-s1-e4-00-34-26-18r-1670000381.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
    },
    {
      title: "Stranger Things",
      description: "Stranger Things is an American science fiction horror drama series created by the Duffer Brothers. Set in the 1980s in the fictional town of Hawkins, Indiana, the series focuses on the investigation into the disappearance of a young boy amid supernatural events occurring around the town, including the appearance of a girl with psychokinetic abilities who helps the missing boy's friends in their own search.",
      price: "INR 349/-",
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
      title: "Iron Man",
      description: "Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures, it is the first film in the Marvel Cinematic Universe (MCU). The film stars Robert Downey Jr. as Tony Stark, an industrialist and master engineer who builds a mechanized suit of armor and becomes the technologically advanced superhero Iron Man.",
      price: "INR 567/-",
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Stranger Things",
      description: "Stranger Things is an American science fiction horror drama series created by the Duffer Brothers. Set in the 1980s in the fictional town of Hawkins, Indiana, the series focuses on the investigation into the disappearance of a young boy amid supernatural events occurring around the town, including the appearance of a girl with psychokinetic abilities who helps the missing boy's friends in their own search.",
      price: "INR 459/-",
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    }
  ];

  return (
    <CartProvider>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light nav">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">NetFlix</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/series" className="nav-link">Series</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link">Cart</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home items={items} />} />
            <Route path="/about" element={<About />} />
            <Route path="/series" element={<Series />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:itemId" element={<ItemDetail items={items} />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
