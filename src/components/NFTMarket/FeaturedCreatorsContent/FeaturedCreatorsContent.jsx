import React from 'react'
import Card from '../Card/Card'
import "./FeaturedCreatorsContent.css"
import img1 from "../../NFTMarket/img/Media.png"
import img2 from "../../NFTMarket/img/Media2.png"
import img3 from "../../NFTMarket/img/Avatar.png"
import img4 from "../../NFTMarket/img/Media3.png"
import img55 from "../../NFTMarket/img/img-5.png"
import img6 from "../../NFTMarket/img/img-6.png"
import img7 from "../../NFTMarket/img/img-7.png"
import img8 from "../../NFTMarket/img/img-8.png"
import img9 from "../../NFTMarket/img/img-9.png"
import img10 from "../../NFTMarket/img/img-10.png"
import img11 from "../../NFTMarket/img/img-11.png"
import img12 from "../../NFTMarket/img/img-12.png"


function FeaturedCreatorsContent() {
  return (
    <>
    <div className='SM-FeaturedCreatorsContent'>
        <div className='SM-flex'>
            <Card img1={img1} img2={img2} img3={img3} img4={img4}/>
            <Card img1={img55} img2={img6} img3={img7} img4={img8} />
            <Card img1={img9} img2={img10} img3={img11} img4={img12} />
        </div>
    </div>
    </>
  )
}

export default FeaturedCreatorsContent