import React from 'react'
import './FeaturedArtWorkContent.css'
import img1 from '../../NFTMarket/img/pic-ETH.svg'
import img2 from '../../NFTMarket/img/pic-1.png'
import img3 from "./../../NFTMarket/img/Frame.svg"
import img4 from "../../NFTMarket/img/icon-heart.svg"


function FeaturedArtWorkContent({ image }) {
    return (
        <>
            <div className='SM-Card-Artwork'>
                <div div className='SM-image-content' style={{ backgroundImage: `url(${image})` }}>
                    
                    <img src={img2} />





                    {/*
                <div className='SM-Artwork-Title'>
                    <div className="SM-span-img">
                        <span className="SM-hide">SoulCurry</span>
                        <img src={img3} alt="" className="AB-name-icon-true" />
                    </div>
                    <p className="SM-hide">Illusions of Space</p>
                </div>
                <div className='SM-PlaceBid'>
                    <button className='SM-PlaceBid-img'> <img src={ img4} /> </button>
                    <button className='SM-PlaceBid-button'>Place Bid</button>
                </div>
 */ }
                </div>
            </div>


        </>
    )
}

export default FeaturedArtWorkContent