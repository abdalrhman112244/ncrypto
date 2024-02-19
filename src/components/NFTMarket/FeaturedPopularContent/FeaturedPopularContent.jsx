import React from 'react'
import "./FeaturedPopularContent.css"
import PopularCollectionContent from "../PopularCollectionContent/PopularCollectionContent"
import img1 from "../../NFTMarket/img/img-11.png"
import img20 from "../../NFTMarket/img/img-20.png"
import img21 from "../../NFTMarket/img/img-21.png"
import img22 from "../../NFTMarket/img/img-22.png"
import img23 from "../../NFTMarket/img/img-23.png"
import img24 from "../../NFTMarket/img/img-24.png"
import img25 from "../../NFTMarket/img/img-25.png"
import img26 from "../../NFTMarket/img/img-26.png"
import img27 from "../../NFTMarket/img/img-27.png"
import img28 from "../../NFTMarket/img/img-28.png"
import img29 from "../../NFTMarket/img/img-29.png"
import img30 from "../../NFTMarket/img/img-30.png"
import img31 from "../../NFTMarket/img/img-31.png"
function FeaturedPopularContent() {
  return (
    <>
    <div className='SM-FeaturedArtWorkContent'>
        <div className='SM-flex'>
        <PopularCollectionContent img1={img1} img2={img20} img3={img21} img4={img22} img55={img23} />
        <PopularCollectionContent img1={img1} img2={img24} img3={img25} img4={img26} img55={img27} />
        <PopularCollectionContent img1={img1} img2={img28} img3={img29} img4={img30} img55={img31} />
        </div>
    </div>
    </>
  )
}

export default FeaturedPopularContent