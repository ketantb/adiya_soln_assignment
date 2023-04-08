import "./card.css"
import { RxDividerVertical } from 'react-icons/rx';
import { BsHeart } from 'react-icons/bs';
import { TiArrowForwardOutline } from 'react-icons/ti';
import { AiOutlineMore } from 'react-icons/ai';
import { ImCheckmark } from 'react-icons/im';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import home1 from './card-assets/sweet-home-1.jpg';
import home2 from './card-assets/sweet-home-2.jpg';
import home3 from './card-assets/sweet-home-3.jpg';
import home4 from './card-assets/sweet-home-4.jpg';

//npm i swiper;
//npm install react-icons --save

const Card = () => {
    return (
        <>
            <div className="card">
                <section className="card-col-1">
                    <div>
                        <Swiper
                            className='swiper-class'
                            pagination={true}
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 1500, disableOnInteraction: false }}
                            loop={true}
                            spaceBetween={0}
                            slidesPerView={1}
                        >
                            <SwiperSlide><img className='slider-icons' src={home1} alt="amazonIcon" /></SwiperSlide>
                            <SwiperSlide><img className='slider-icons' src={home2} alt="B&N" /></SwiperSlide>
                            <SwiperSlide><img className='slider-icons' src={home3} alt="dangdang" /></SwiperSlide>
                            <SwiperSlide><img className='slider-icons' src={home4} alt="flipkart" /></SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="card-col-2">
                    <div className="card-col-2-row-1">
                        <section>
                            <p><ImCheckmark/></p>
                            <p>ZERO BROKERAGE</p>
                        </section>
                        <section>
                            <p><BsHeart/></p>
                            <p><TiArrowForwardOutline/></p>
                            <p><AiOutlineMore/></p>
                        </section>
                    </div>
                    <div className="card-col-2-row-2">
                        <p>2 BHK Flat for Sale in Asteria By Courtyard, Pokh...</p>
                        <p>Asteria By Courtyard</p>
                    </div>
                    <div className="card-col-2-row-3">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Carpet Area</p>
                                        <p>997 sqft</p>
                                    </td>
                                    {/* <div className="dummy-border"></div> */}
                                    <div className="dummy-border"><RxDividerVertical /></div>
                                    <td>
                                        <p>UNDER CONSTRUCTION</p>
                                        <p>Poss. by Dec '27</p>
                                    </td>
                                    <div className="dummy-border"><RxDividerVertical /></div>
                                    <div className="dummy-border"></div>
                                    <td>
                                        <p>TRANSACTION</p>
                                        <p>New Property</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>FURNISHING</p>
                                        <p>Unfurnished</p>
                                    </td>
                                    <div className="dummy-border"><RxDividerVertical /></div>
                                    <td>
                                        <p>SOCIETY</p>
                                        <p>Asteria By Courtyard</p>
                                    </td>
                                    <div className="dummy-border"><RxDividerVertical /></div>
                                    <td>
                                        <p>Bathroom</p>
                                        <p>3</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-col-2-row-4">
                        <p>
                            Asteria by Courtyard represents a new stand in design, luxury, and livability.
                            Residences wity large, private balconies, exclusive amenities and the finest....
                        </p>
                    </div>
                </section>
                <section className="card-col-3">

                </section>
            </div>
        </>
    )
}

export default Card;