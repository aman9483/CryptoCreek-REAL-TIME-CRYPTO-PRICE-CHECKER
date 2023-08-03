import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loading from '../asset/loader.gif';
import { SingleCoin } from '../config/api';
import '../styles/home.css';

const CoinHistory = () => {
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const fetchCoin = useCallback(async () => {
    try {
      const { data } = await axios.get(SingleCoin(id));
      setCoinData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.error('Error fetching coin data:', error);
      setIsLoading(false);
    }
  }, [id]);

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

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        await fetchCoin();
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchCoinData();
  }, [fetchCoin]);

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
            <img src={Loading} alt="Loading..." />
          </div>
        ) : (
          coinData && (
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
          )
        )}
      </Wrapper>
    </>
  );
};

export default CoinHistory;

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  margin-left: -800px;
  margin-top: -20px;

  img {
    height: 30vh;
  }

  

  h1 {
    font-size: 5em;
    color: white;
    font-family: 'Pangolin', cursive;
    margin-top: 20px;
  }

  p {
    color: white;
    font-size: 1.2em;
    width: 500px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    margin-left: -100px;
    margin-top: 20px;
  }

  .side-bar {
    width: 30%;
  }

  h3 {
    color: white;
    font-size: 2rem;
    margin-left: -100px;
    margin-top: 20px;
  }

  h2 {
    color: white;
    font-size: 2rem;
    margin-left: -100px;
    margin-top: 20px;
  }
`;
