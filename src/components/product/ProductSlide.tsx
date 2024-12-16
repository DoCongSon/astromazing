'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './index.css'
import Image from 'next/image'

type ProductSlideProps = {
  images: string[]
}

const ProductSlide = ({ images }: ProductSlideProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div className='w-[18.1875rem]'>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} width={300} height={300} alt={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5.44}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} width={300} height={300} alt={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductSlide
