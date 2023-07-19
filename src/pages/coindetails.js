import React from 'react'
import "../styles/home.css"
import Header from '../components/Header'
import CoinHistory from '../components/CoinHistory'
import CoinChart from '../components/CoinChart'

const coindetails = () => {
  return (
    <div>

       <Header/>
      <CoinHistory/>
      <CoinChart/>
    </div>
  )
}

export default coindetails
