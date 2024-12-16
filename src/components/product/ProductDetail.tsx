'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../Button'
import ProductNature from './ProductNature'
import ProductPrice from './ProductPrice'
import { useCartStore } from '@/providers/cart-store-provider'

export type ProductDetailProps = {
  name: string
  price: number
  discountPrice: number
  natures?: NaturesType
}

type NaturesType = {
  title: string
  items: {
    nature: string
    image?: string
    active?: boolean
  }[]
}[]

const ProductDetail = (props: ProductDetailProps) => {
  const [favorite, setFavorite] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [natures, setNatures] = useState<NaturesType>(props.natures || [])
  const addProductToCart = useCartStore((state) => state.addProduct)

  const toggleFavorite = () => {
    setFavorite(!favorite)
    // handle favorite
  }

  const handleChoseNature = ({ title, nature }: { title: string; nature: string }) => {
    const newNatures = natures.map((item) => {
      if (item.title === title) {
        item.items = item.items.map((natureItem) => {
          natureItem.active = natureItem.nature === nature
          return natureItem
        })
      }
      return item
    })
    setNatures(newNatures)
  }

  const handleAddToCart = () => {
    const nature = natures.map((item) => {
      const activeNature = item.items.find((natureItem) => natureItem.active)
      return activeNature?.nature
    })
    addProductToCart({
      id: Number((Math.random() * 999999).toFixed(0)),
      name: props.name,
      image: '/images/product-1.png',
      price: props.price,
      discountPrice: props.discountPrice,
      nature: nature as string[],
      quantity: quantity,
    })
  }

  return (
    <div className='p-4 flex flex-col items-start gap-5 rounded-xl bg-white overflow-hidden'>
      <div className='w-full'>
        <div className='flex gap-5 items-start'>
          <h2 className='flex-1 text-sm font-medium leading-tight text-gray-scale-50'>{props.name}</h2>
          <div className='p-1 rounded-lg bg-bg-elevation-30 cursor-pointer' onClick={toggleFavorite}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              {favorite ? (
                <path
                  d='M12 7.19334C10 2.4989 3 2.9989 3 8.99893C3 14.999 12 19.9991 12 19.9991C12 19.9991 21 14.999 21 8.99893C21 2.9989 14 2.4989 12 7.19334Z'
                  fill='#DE5F5F'
                />
              ) : (
                <path
                  d='M12 7.19334C10 2.4989 3 2.9989 3 8.99893C3 14.999 12 19.9991 12 19.9991C12 19.9991 21 14.999 21 8.99893C21 2.9989 14 2.4989 12 7.19334Z'
                  stroke='#A9A9A9'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              )}
            </svg>
          </div>
        </div>
        <div className='mt-2'>
          <ProductPrice price={props.price} discountPrice={props.discountPrice} voucherPrice={20000} />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        {natures.map((item, index) => (
          <ProductNature onActive={handleChoseNature} key={index} title={item.title} items={item.items} />
        ))}
      </div>
      <div className='h-[1px] w-full bg-[#ECECECB2]' />
      <div className='flex items-center gap-3'>
        <div className='flex items-center justify-between w-28'>
          <div
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1)
            }}
            className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg bg-bg-elevation-5'>
            <Image src='/icons/icon-remove.svg' alt='' width={24} height={24} />
          </div>
          <span className='text-sm font-semibold'>{quantity}</span>
          <div
            onClick={() => setQuantity(quantity + 1)}
            className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg bg-bg-elevation-5'>
            <Image src='/icons/icon-add.svg' alt='' width={24} height={24} />
          </div>
        </div>
        <Button
          className=' border-2 hover:border-[#FFF0D8] hover:shadow-button-add-to-cart hover:bg-gradient-to-r from-[#FFF0D8] to-[#FFD797] transition-all duration-300'
          onClick={handleAddToCart}
          status='line'
          size='XS'
          iconLeft='/icons/icon-bag-plus.svg'>
          THÊM VÀO GIỎ
        </Button>
        <Button status='default' size='XS'>
          MUA NGAY
        </Button>
      </div>
      <div className='h-[1px] w-full bg-[#ECECECB2]' />
      <div className='w-[210%] animate-marquee'>
        <div className='inline-flex items-center gap-0.5'>
          <Image src='/icons/icon-package-business.svg' alt='' width={16} height={16} />
          <span className='text-[0.625rem] text-gray-scale-80 font-medium'>7 Ngày miễn phí trả hàng</span>
        </div>
        <div className='ml-9 inline-flex items-center gap-0.5'>
          <Image src='/icons/icon-target.svg' alt='' width={16} height={16} />
          <span className='text-[0.625rem] text-gray-scale-80 font-medium'>Hàng chính hãng 100%</span>
        </div>
        <div className='ml-9 inline-flex items-center gap-0.5'>
          <Image src='/icons/icon-freeship.svg' alt='' width={16} height={16} />
          <span className='text-[0.625rem] text-gray-scale-80 font-medium'>Miễn phí vận chuyển</span>
        </div>
        <div className='ml-9 inline-flex items-center gap-0.5'>
          <Image src='/icons/icon-phone.svg' alt='' width={16} height={16} />
          <span className='text-[0.625rem] text-gray-scale-80 font-medium'>Hỗ trợ 24/7</span>
        </div>
        <div className='ml-9 inline-flex items-center gap-0.5'>
          <Image src='/icons/icon-package-business.svg' alt='' width={16} height={16} />
          <span className='text-[0.625rem] text-gray-scale-80 font-medium'>7 Ngày miễn phí trả hàng</span>
        </div>
        <div className='ml-9 inline-flex items-center gap-0.5'>
          <Image src='/icons/icon-target.svg' alt='' width={16} height={16} />
          <span className='text-[0.625rem] text-gray-scale-80 font-medium'>Hàng chính hãng 100%</span>
        </div>
        <div className='ml-9 inline-flex items-center gap-0.5'>
          <Image src='/icons/icon-freeship.svg' alt='' width={16} height={16} />
          <span className='text-[0.625rem] text-gray-scale-80 font-medium'>Miễn phí vận chuyển</span>
        </div>
        <div className='ml-9 inline-flex items-center gap-0.5'>
          <Image src='/icons/icon-phone.svg' alt='' width={16} height={16} />
          <span className='text-[0.625rem] text-gray-scale-80 font-medium'>Hỗ trợ 24/7</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
