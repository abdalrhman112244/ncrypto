import React from 'react'
import './Wallet.css'
import WalletCard from './../../components/NFTMarket/WalletCard/WalletCard'
import img1 from '../../components/NFTMarket/img/arrow-left.svg'
import img2 from '../../components/NFTMarket/img/Arrow-right.svg'
import item1 from '../../components/NFTMarket/img/item1.png'
import item2 from '../../components/NFTMarket/img/item2.png'
import item3 from '../../components/NFTMarket/img/item3.png'
import item4 from '../../components/NFTMarket/img/item4.png'
import item5 from '../../components/NFTMarket/img/item5.png'
import item6 from '../../components/NFTMarket/img/item6.png'
import item7 from '../../components/NFTMarket/img/item7.png'
import item8 from '../../components/NFTMarket/img/item8.png'
import img3 from '../../components/NFTMarket/img/walletQuesition.png'

const Wallet = () => {
  return (
    <>
      <div className='SM-container-wallet'>
        <div className='SM-part-one-wallet'>
          <div className='SM-start-wallet'>
            <img src={img1} />
            <p>Back</p>
          </div>
          <div className='SM-paths-wallet'>
            <p>Home</p>
            <img src={img2} />
            <p>Nft Market</p>
            <img src={img2} />
            <p className='SM-white'>Travis Ragsdale</p>
          </div>
        </div>
        <div className='SM-part-two-wallet'>
          <div className='SM-Connect-wallet'>
            <p className='SM-white SM-sizeXL'>Connect your wallet.</p>
            <p>Select What Wallet Your Want To Connect Below.</p>
            <img src={img3}/>
          </div>
          <div className='SM-items-wallet'>
            <WalletCard image={item1} type='MetaMask' title='MetaMask is a global community of developers and designers' />
            <WalletCard image={item2} type='WalletConnect' title='MetaMask is a global community of developers and designers' />
            <WalletCard image={item3} type='Coinbase Wallet' title='Coinbase is the easiest place to buy and sell cryptocurrency.' />
            <WalletCard image={item4} type='Dapper' title='If something does not matter to you, it does not matter to us.' />
            <WalletCard image={item5} type='Phantom' title='MetaMask is a global community of developers and designers' />
            <WalletCard image={item6} type='Coinhub' title='MetaMask is a global community of developers and designers' />
            <WalletCard image={item7} type='Trust Wallet' title='Coinbase is the easiest place to buy and sell cryptocurrency.' />
            <WalletCard image={item8} type='Venly' title='Venly wants to make blockchain accessible for everyoneo' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Wallet