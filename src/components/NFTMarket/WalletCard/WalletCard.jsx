import React from 'react'
import './WalletCard.css'


function WalletCard({image,type,title}) {
  return (
    <>
        <div className='Wallet-card'>
            <img src={image}/>
            <h6>{type}</h6>
            <p>{title}</p>
        </div>
    </>
  )
}

export default WalletCard