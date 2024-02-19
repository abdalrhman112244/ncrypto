import React from 'react';
import "./NavInner.css";
import img1 from "../../NFTMarket/img/search-normal.svg";
import img2 from "../../NFTMarket/img/filter-3-line.svg";
import img3 from "../../NFTMarket/img/bg1.svg";

const NavInner = () => {
    return (
        <div className='SM-nav'>
            <form className="SM-TheFormSearch">
                <input type="search" id="SM-searchInput" placeholder="Search" />
                <input type="image" src={img1} alt="Search" />
            </form>
            <div className='SM-sort-img'>
                <img src={img2}></img>
                <div className='SM-Sort-title'> Sort</div>
            </div>
            {/*
            <ul>
                <li>All</li>
                <li>Low</li>
                <li>Hight</li>
                <li style={{ width: '4rem' }}>Popular</li>
            </ul>*/}
            
        </div>
    );
};

export default NavInner;