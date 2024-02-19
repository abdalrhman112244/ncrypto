import React from 'react';
import "./Filters.css";
import img0 from '../../NFTMarket/img/exite.svg'
import img1 from '../../NFTMarket/img/arrow.svg'
import img2 from '../../NFTMarket/img/Paint-Icon.svg'
import img3 from '../../NFTMarket/img/Games-Icon.svg'
import img4 from '../../NFTMarket/img/Music-Icon.svg'
import img5 from '../../NFTMarket/img/eth.svg'
import img6 from '../../NFTMarket/img/polygon.svg'
import img7 from '../../NFTMarket/img/polygon.svg'
import img8 from '../../NFTMarket/img/priceChart.svg'
import img9 from '../../NFTMarket/img/Slider.svg'
import img10 from '../../NFTMarket/img/search-normal.svg'
import img11 from '../../NFTMarket/img/Ellipse.svg'

function Filters() {
  return (
    <>
      <div className='SM-content-filters'>
        <div className='SM-filters'>
          <div className='SM-filters-title'>
            <p>Filters</p>
            <p>Applied filters</p>
          </div>
          <div className='SM-bottons'>
            <button className='SM-button'>Art<img src={img0} alt="Icon" /></button>
            <button className='SM-button'>Game<img src={img0} alt="Icon" /></button>
          </div>
        </div>
        <div className='SM-Categories-chains-price'>
          <div className='SM-Categories-title-chains'>
            <p>Categories</p>
            <img src={img1} alt='Categories'></img>
          </div>
          <div className='SM-search-Categories-chains'>
            <form className="SM-TheFormSearch-Categories-chains">
              <input type="search" id="SM-searchInput-Categories-chains" placeholder="Search" />
              <input type="image" src={img10} alt="Search" />
            </form>
          </div>
          <div className='SM-group'>
            <div className='SM-art'>
              <div className='SM-content'>
                <img src={img2} alt='' />
                <p>Art</p>
              </div>
              <button className='SM-btn'>7854</button>
            </div>
            <div className='SM-games'>
              <div className='SM-content'>
                <img src={img3} alt='' />
                <p>Games</p>
              </div>
              <button className='SM-btn'>7854</button>
            </div>
            <div className='SM-music'>
              <div className='SM-content'>
                <img src={img4} alt='' />
                <p>Music</p>
              </div>
              <button className='SM-btn'>953</button>
            </div>
          </div>
        </div>

        <div className='SM-Categories-chains-price'>
          <div className='SM-Categories-title-chains'>
            <p>Chains</p>
            <img src={img1} alt='Chains'></img>
          </div>
          <div className='SM-search-Categories-chains'>
            <form className="SM-TheFormSearch-Categories-chains">
              <input type="search" id="SM-searchInput-Categories-chains" placeholder="Search" />
              <input type="image" src={img10} alt="Search" />
            </form>
          </div>
          <div className='SM-Chains-groups'>
            <div className='SM-Etheruim'>
              <img src={img5}></img>
              <div className='SM-Etheruim-title'>
                <h1>Etheruim</h1>
                <p>ETH</p>
              </div>
            </div>
            <div className='SM-Etheruim'>
              <img src={img5}></img>
              <div className='SM-Etheruim-title'>
                <h1>Binance</h1>
                <p>BNB</p>
              </div>
            </div>
            <div className='SM-Etheruim'>
              <img src={img5}></img>
              <div className='SM-Etheruim-title'>
                <h1>Polygon</h1>
                <p>MATIC</p>
              </div>
            </div>
          </div>
        </div>
        <div className='SM-Categories-chains-price'>
          <div className='SM-Categories-title-chains'>
            <p>Price</p>
            <img src={img1} alt='Price'></img>
          </div>
          <img className='img-price' src={img8} alt='Price'></img>
          <img className='img-slider' src={img9} alt='slider'></img>
          <img className='Ellipse' src={img11}></img>
          <div className='SM-price'>
            <p>$250</p>
            <p>$1800</p>
          </div>
        </div >
        {/*
        <div className='SM-Price'>
          <>
            <p>Prics</p>
            <img src={img1} alt='Price'></img>
          </>

  
          
         
          <>
            <p>$250</p>
            <p>$1800</p>
          </>
        </div>
       */}
      </div>

    </>
  )
}

export default Filters