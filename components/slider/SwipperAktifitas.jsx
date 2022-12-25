import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import Image from "next/image";

const SwipperAktifitas = ({aktifitas}) => {
  return (
    <Swiper 
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        pagination={{
        clickable: true,
        }}
        breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1920: {
                slidesPerView: 3,
            },
            
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
    >
{aktifitas.data.map(akti => (

        <SwiperSlide key={akti.id}>
        <div className="ativity-container">
            <div className="image-aktifitas">

                <Image src={process.env.NEXT_PUBLIC_API + akti.attributes.gambar.data.attributes.url} alt=""  layout="fill" objectFit="cover"/>
            </div>

                <div className="image-backdrop">
                    <div className="aktifitas-head">
                        
                    </div>
                    <div className="aktifitas-footer">
                        
                    <h3 className="text-white text-start">{akti.attributes.title}</h3>
                    <h4 className="text-white text-start"><span>{akti.attributes.subTitle}</span></h4>
                    <p className="text-white text-start">{akti.attributes.description}</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
))}




    </Swiper>
  )
}

export default SwipperAktifitas