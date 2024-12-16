import React from 'react'
import Image from 'next/image'

type ProductCartItemProps = {
  image: string
  name: string
  price: number
  quantity: number
  increaseQuantity: () => void
  reduceQuantity: () => void
  discountPrice?: number
  nature: string[]
  onPick?: () => void
  pickValue?: boolean
  onDelete?: () => void
}

const ProductCartItem = (props: ProductCartItemProps) => {
  return (
    <div className='flex px-4 gap-3 items-center rounded-lg bg-bg-elevation-5 shadow-product-card w-full hover:shadow-tag ease-out transition-all duration-300'>
      <div onClick={props.onPick} className='w-6 h-6 cursor-pointer'>
        {props.pickValue ? (
          <Image src='/icons/icon-check.svg' alt='' width={24} height={24} />
        ) : (
          <div className='w-6 h-6 border-blue-700 border rounded-md' />
        )}
      </div>
      <div className='flex flex-1 gap-3'>
        <Image src={props.image} alt='' width={100} height={100} />
        <div className='flex flex-col justify-center'>
          <h3 className='text-xs font-medium text-gray-scale-40'>{props.name}</h3>
          <div className='flex gap-2 mt-1 items-center'>
            {!props.discountPrice && (
              <p className='text-sm font-semibold text-blue-600'>{props.price.toLocaleString()}đ</p>
            )}
            {props.discountPrice && (
              <>
                <p className='text-sm font-semibold text-blue-600'>{props.discountPrice.toLocaleString()}đ</p>
                <p className='text-xs font-medium text-gray-scale-40 line-through'>{props.price.toLocaleString()}đ</p>
              </>
            )}
          </div>
          {props.nature && (
            <div className='flex gap-2 mt-[0.375rem]'>
              {props.nature.map((item, index) => (
                <div
                  key={index}
                  className='py-[0.375rem] px-2 text-xs text-gray-scale-40 bg-bg-elevation-20 rounded-md'>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col justify-between items-end gap-4'>
        <button onClick={props.onDelete}>
          <Image src='/icons/icon-delete.svg' alt='' width={18} height={18} />
        </button>
        <div className='flex items-center justify-between w-28'>
          <div
            onClick={props.reduceQuantity}
            className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg bg-bg-elevation-20'>
            <Image src='/icons/icon-remove.svg' alt='' width={24} height={24} />
          </div>
          <span className='text-sm font-semibold'>{props.quantity}</span>
          <div
            onClick={props.increaseQuantity}
            className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg bg-bg-elevation-20'>
            <Image src='/icons/icon-add.svg' alt='' width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCartItem
