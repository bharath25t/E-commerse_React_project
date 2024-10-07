-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2024 at 06:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netflix`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(250) NOT NULL,
  `product_price` float(10,2) NOT NULL,
  `product_desp` varchar(250) NOT NULL,
  `product_img` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_price`, `product_desp`, `product_img`) VALUES
(1, 'Money Heist', 500.00, 'Money Heist, originally titled La Casa de Papel, is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain and one on the Bank', 'https://cdna.artstation.com/p/assets/images/images/046/103/336/large/illusion-design-money-heist-poster-min.jpg?1644314844'),
(2, 'Wednesday', 749.00, 'Wednesday is a supernatural comedy horror series following Wednesday Addams from the Addams Family as she navigates her teenage years at Nevermore Academy. She attempts to master her emerging psychic ability, thwart a monstrous killing spree that has', 'https://hips.hearstapps.com/hmg-prod/images/wednesday-s1-e4-00-34-26-18r-1670000381.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*'),
(3, 'Stranger things', 899.00, 'Stranger Things is an American science fiction horror drama series created by the Duffer Brothers. Set in the 1980s in the fictional town of Hawkins, Indiana, the series focuses on the investigation into the disappearance of a young boy amid supernat', 'https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'),
(4, 'Iron Man', 766.00, ' Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures, it is the first film in the Marvel Cinematic Universe (MCU). The film stars Robert Do', 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg'),
(5, 'Money Heist', 500.00, 'Money Heist, originally titled La Casa de Papel, is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain and one on the Bank', 'https://cdna.artstation.com/p/assets/images/images/046/103/336/large/illusion-design-money-heist-poster-min.jpg?1644314844'),
(6, 'Wednesday', 749.00, 'Wednesday is a supernatural comedy horror series following Wednesday Addams from the Addams Family as she navigates her teenage years at Nevermore Academy. She attempts to master her emerging psychic ability, thwart a monstrous killing spree that has', 'https://hips.hearstapps.com/hmg-prod/images/wednesday-s1-e4-00-34-26-18r-1670000381.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*'),
(7, 'Stranger things', 899.00, 'Stranger Things is an American science fiction horror drama series created by the Duffer Brothers. Set in the 1980s in the fictional town of Hawkins, Indiana, the series focuses on the investigation into the disappearance of a young boy amid supernat', 'https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'),
(8, 'Iron Man', 766.00, ' Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures, it is the first film in the Marvel Cinematic Universe (MCU). The film stars Robert Do', 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
