import React from 'react';
import "./NftMarket.css";
import NavInner from '../../components/NFTMarket/NavInner/NavInner.jsx';
import Filters from '../../components/NFTMarket/Filters/Filters.jsx';
import ViewAllCreator from '../../components/NFTMarket/ViewAllCreator/ViewAllCreator.jsx';
import FeaturedCreatorsContent from "../../components/NFTMarket/FeaturedCreatorsContent/FeaturedCreatorsContent.jsx";
import FeaturedPopularContent from "../../components/NFTMarket/FeaturedPopularContent/FeaturedPopularContent.jsx";
import FeaturedArtWorkContent from "../../components/NFTMarket/FeaturedArtWorkContent/FeaturedArtWorkContent.jsx";
import bg from "../../components/NFTMarket/img/img-13.png"

const NFTMarket = () => {
  return (
      <div className='SM-container-nft'>
        <div className='SM-part-one'>
        <NavInner/>
        <ViewAllCreator title="Featured Creators" more="View All Creator"/>
        <FeaturedCreatorsContent/>
        <ViewAllCreator title="Featured Artwork" more="View All Creator"/>
        < FeaturedArtWorkContent image={bg}/>
        <ViewAllCreator title="Popular Collection" more="Explore More"/>
        <FeaturedPopularContent />
      
        </div>
        <div className='SM-part-two'>
        <Filters/>
          </div>
            
        </div>
  );
};

export default NFTMarket;
 
