import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loading from '../asset/loader.gif';
import { SingleCoin } from '../config/api';

const CoinHistory = () => {
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchCoin = async () => {
    try {
      const { data } = await axios.get(SingleCoin(id));
      setCoinData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const fetchPriceData = async (coinId, currency) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: coinId,
          vs_currencies: currency,
        },
      });

      return response.data[coinId][currency];
    } catch (error) {
      console.error('Error fetching price data:', error);
      throw error;
    }
  };

  
    const fetchData = async () => {
      try {
        await fetchCoin();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
 

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        if (coinData) {
          const price = await fetchPriceData(coinData.id, 'inr');
          setCoinData((prevData) => ({ ...prevData, price }));
        }
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    };

    fetchPrice();
  }, [coinData]);

  return (
    <>
      <Wrapper>
        {isLoading ? (
          <div className="loader-for-whole-page">
            <img src={Loading} alt="loader" />
          </div>
        ) : (
          <div>
            <div className="side-bar"></div>
            <img src={coinData.image.large} alt="Coin Icon" className="coin-icon" />
            <h1>{coinData.name}</h1>
            <p>{coinData.description.en.split('. ')[0]}</p>
            <h3>Price: {coinData.price}</h3>
            <h3>Symbol: {coinData.symbol}</h3>
            <h2>Rank: {coinData.market_cap_rank}</h2>
            <h2>Public Interest Score: {coinData.public_interest_score}</h2>
           
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default CoinHistory;

const Wrapper = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -380px;
  top: -30px;

  img {
    height: 30vh;
  }

  h1 {
    font-size: 5em;
    color: white;
    font-family: 'Pangolin', cursive;
    position: relative;
    top: 20px;
  }

  p {
    color: white;
    font-size: 1.3em;
    width: 500px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    position: relative;
    left: -100px;
    top: 20px;
  }

  .side-bar {
    width: 30%;
  }

  h3 {
    color: white;
    font-size: 2rem;
    position: relative;
    left: -100px;
    top: 20px;
  }

  h2 {
    color: white;
    font-size: 2rem;
    position: relative;
    left: -100px;
    top: 20px;
  }
`;
