import React from 'react'
import img5 from "./../../NFTMarket/img/Frame.svg"
import './Card.css'
function Card({img1,img2,img3,img4}) {
    return (
        <>
            <div className='SM-card'>
                <div className='SM-card-img'>
                    <img src={img1}></img>
                    <div className='SM-card-position'>
                        <img className='img-1' src={img2}></img>
                        <img className='img-2' src={img3}></img>
                    </div>
                    <img src={img4}></img>
                </div>
                <div className='SM-titles'>
                    <div className='SM-card-title'>
                        <div className="SM-span-img">
                            <span className="SM-hide">Samji_illustrator</span>
                            <img src={img5} alt="" />
                        </div>
                        <p>12.321ETH </p>

                    </div>
                    <button className='follow'>Follow</button>
                </div>
            </div>

        </>
    )
}

export default Card