'use client'
import { cn } from '@/utils'
import Image from 'next/image'
import React, { useState } from 'react'

type ProductVoucherProps = {
  icon: string
  category: string
  discount: number
  minPurchase: number
  maxDiscount: number
  code: string
}

const ProductVoucher = (props: ProductVoucherProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText(props.code)
    setIsCopied(true)
  }

  return (
    <div className='w-[18.125rem] flex items-center rounded-lg overflow-hidden bg-bg-elevation-20 hover:bg-brown-50 hover:shadow-product-card transition-all duration-300'>
      <div className='flex w-[4.375rem] h-[4.375rem] flex-col items-center justify-center gap-[0.38rem] bg-gradient-to-tr from-[#FFF5E6] from-[50.63%] to-[#FFE4B9] to-[106.85%]'>
        <Image src={props.icon} width={32} height={32} alt={props.category} />
        <span className='text-[0.5625rem] text-brown-700 font-medium'>{props.category}</span>
      </div>
      <div className='px-3 py-2 flex flex-col justify-center items-start'>
        <p className='text-gray-scale-80 text-sm font-medium'>Giảm {props.discount}%</p>
        <p className='mt-1 text-[0.625rem] text-gray-scale-40'>Đơn tối thiểu đ{props.minPurchase}k</p>
        <p className='text-[0.625rem] text-gray-scale-40'>Giảm tối đa đ{props.maxDiscount}k</p>
      </div>
      <div className='flex-1 px-3 flex justify-end'>
        <button
          onClick={handleCopyCode}
          className={cn(
            'px-[0.433rem] h-6 flex items-center justify-center text-[0.625rem] font-semibold text-gray-scale-0 rounded-[0.26rem] transition-all duration-300',
            isCopied ? 'bg-blue-700' : 'bg-gradient-to-br from-[#E78C03] from-[-3.95%] to-[#FFB84F] to-[106.72%]'
          )}>
          {isCopied ? 'ĐÃ COPY' : 'COPY MÃ'}
        </button>
      </div>
    </div>
  )
}

export default ProductVoucher
