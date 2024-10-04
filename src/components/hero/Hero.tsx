import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  return(
    <div className='bg-slate-300'>
    <div className='container  mx-auto'>

    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img className='w-full h-[500px]' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[500px]' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[500px]' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[500px]' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[500px]' src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[500px]' src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[500px]' src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-[500px]' src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
       
        <SwiperSlide>
        <img className='w-full h-[500px]' src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
    
      </Swiper>
      </div>
    </div>
  );
  
}

export default Hero