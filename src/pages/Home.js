import '../styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Coin from '../components/coin';
import Header from '../components/Header';
import Loader from "../asset/loader.gif"
import Hero from '../asset/Hero.png'

const Home = () => {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const CRYPTO_API = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=100';

  const fetchApi = () => {
    setIsPageLoading(true); // Set page loading to true before fetching data
    axios.get(CRYPTO_API).then((response) => {
      setListOfCoins(response.data.coins);
      setIsLoading(false);
      setIsPageLoading(false); // Set page loading to false once data is fetched
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCoins.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {isPageLoading ? (
        <div className="loader-for-whole-page">
         <img src={Loader} alt='loader'/>
        </div>
      ) : (
        <>
          <Header />

          <div className="leftSide">
            <h1 id="h1">Crypto Creek</h1>
            <p id="para">
              Get All The Info Regarding{' '}
              <span style={{ color: 'purple' }}>Your Favorite Crypto Currency</span>
            </p>
          </div>

          <div className="rightSide">
            <img src={Hero} alt="bitimage" id="img1" />
          </div>

          <div className="crousal-part">
            <h1 id="crousal-part">Cryptocurrency Prices by Market Cap</h1>
            <input
              type="text"
              placeholder="Search For a Crypto Currency"
              onChange={(event) => {
                setSearchWord(event.target.value);
              }}
              id="input-part"
            />
          </div>

          <div id="cryptoDisplay">
            {isLoading ? (
              <div className="loader">
                
              </div>
            ) : (
              currentItems.map((coin) => (
                <Link
                  key={coin.id}
                  to={`/coins/${coin.name.toLowerCase()}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
                </Link>
              ))
            )}
          </div>

          <div className="pagination">
            {filteredCoins.length > itemsPerPage && (
              <ul>
                {Array(Math.ceil(filteredCoins.length / itemsPerPage))
                  .fill()
                  .map((_, index) => (
                    <li key={index}>
                      <button
                        className={currentPage === index + 1 ? 'active' : ''}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
