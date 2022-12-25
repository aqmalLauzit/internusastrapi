import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";

const SwipperTestimoni = ({testimoni}) => {
    return (
        <>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper mb-5">
          {testimoni.data.map((testi,index) => (
                    
                    
            <SwiperSlide key={index}>
                <div className="testi-container" >
                  <div className="row">
                  
                    <div className="col-lg-8 testi-body">

                    <div className="testi-content">
                    <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        {testi.attributes.message}
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                    <div className="testi-footer">
                        <h3 className='text-start'>{testi.attributes.name}</h3>
                        <p className='text-start'>{testi.attributes.job}

                          <br />

                        <i className='bx bxs-star text-start' ></i>
                        <i className='bx bxs-star text-start' ></i>
                        <i className='bx bxs-star text-start' ></i>
                        <i className='bx bxs-star text-start' ></i>
                        <i className='bx bxs-star text-start' ></i>

                        </p>
                    </div>
                    </div>

                    <div className="col-lg-4">

                      <Image src={process.env.NEXT_PUBLIC_API + testi.attributes.avatar.data.attributes.url} alt="testi" className="rounded-circle border border-5" width={200} height={200} objectFit="cover"/>
                    </div>
                  
                  </div>
                    
                
                </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </>
      );
}

export default SwipperTestimoni