
import "./PopularCollectionContent.css"
import img5 from "./../../NFTMarket/img/Frame.svg"

function PopularCollectionContent({ img1, img2, img3, img4, img55 }) {
    return (
        <>
            <div className='Card-popular'>
                <div className='SM-titles-popular'>
                    <div className='SM-profile-popular'>
                        <img src={img1}></img>
                        <div className='SM-title-popular'>
                            <p>Creative Monkey</p>
                            <div className="SM-span-img">
                                <span className="SM-hide">by SoulCurry</span>
                                <img src={img5} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='SM-img-Popular'>
                    <div className='SM-big-img'>
                        <img className='SM-border-radius' src={img2} />
                        <div className='SM-three-img'>
                            <div className='SM-two-img'>
                                <img className='SM-border-radius' src={img3} />
                                <img className='SM-border-radius' src={img4} />
                            </div>
                            <img className='SM-border-radius' src={img55} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCollectionContent


