
import Creators from '../../components/Creators'
import FeaturedArtwork from '../../components/FeaturedArtwork'
import InnerBar from '../../components/InnerBar'
import PopularCollection from '../../components/PopularCollection'
import Nft from './Nft.css'
/*import SideBar from '../../../../src/components/SideBar'
import Nav from '../../../../src/components/NavBar'*/

function Nft() {
    return (
        <>
            <div className='SM-container'>
                <div className=''>
                    <InnerBar />
                    <div className='SM-FeaturedCreatorsTitle'>
                        <p>Featured Creators</p>
                        <div className='SM-viewALL'>
                            <p>View All Creator</p>
                            <i>   </i>
                        </div>
                    </div>
                    <Creators />
                    <div className='SM-FeaturedArtworkTitle'>
                        <p>Featured Artwork</p>
                        <div className='SM-viewALL'>
                            <p>View All Creator</p>
                            <i>   </i>
                        </div>
                    </div>
                    <FeaturedArtwork />
                    <FeaturedArtwork />
                    <div className='SM-PopularCollectionTitle'>
                        <p>Popular Collection</p>
                        <div className='SM-viewALL'>
                            <p>View All Creator</p>
                            <i>   </i>
                        </div>
                    </div>
                    <PopularCollection />
                     {/* footer */}
                </div>
                <div className='SM-Filters'>
                    
                </div>
               
            </div>
        </>
    )
}