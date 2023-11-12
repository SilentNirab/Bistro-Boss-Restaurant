// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}>
            </SectionTitle>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img className='w-fit' src={slide1} alt="" />
                        <h2 className=' text-white drop-shadow-sm uppercase text-2xl absolute left-20 bottom-10 text-center'>Salads</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className=' text-white drop-shadow-sm uppercase text-2xl absolute left-20 bottom-10 text-center'>pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className=' text-white drop-shadow-sm uppercase text-2xl absolute left-20 bottom-10 text-center'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className=' text-white drop-shadow-sm uppercase text-2xl absolute left-20 bottom-10 text-center'>desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className=' text-white drop-shadow-sm uppercase text-2xl absolute left-20 bottom-10 text-center'>Salads</h2>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Category;