import { cn } from '@/utils'
import Image from 'next/image'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import ProductCartItem from './product/ProductCartItem'
import { useCartStore } from '@/providers/cart-store-provider'

type CartSidebarProps = {
  className?: string
  visible: boolean
  onClose: () => void
}

const CartSidebar = (props: CartSidebarProps) => {
  const [productChosen, setProductChosen] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const { products, removeProduct, updateProduct } = useCartStore((state) => state)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        props.onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [props])

  const handleChosenAll = () => {
    if (productChosen.length == products.length) {
      setProductChosen([])
    } else {
      setProductChosen(products.map((product) => product.id))
    }
  }

  const handleDeleteMultiProduct = () => {
    productChosen.forEach((id) => removeProduct(id))
    setProductChosen([])
  }

  const totalPrice = useMemo(() => {
    return products.reduce((total, product) => total + product.discountPrice * product.quantity, 0)
  }, [products])

  return (
    <div
      ref={containerRef}
      className={cn(
        'fixed top-0 right-0 w-[40rem] h-full bg-white shadow-lg z-50 transform transition-all duration-500 overflow-y-scroll no-scrollbar',
        props.visible ? '' : 'opacity-0 translate-x-full',
        props.className
      )}>
      <div className='px-5 py-8'>
        <div className='flex items-center gap-2'>
          <div className='flex-1 h-14 rounded-lg bg-brown-50 px-5 flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='p-2 rounded-full bg-gradient-to-r from-[#102841] to-[#1359A1]'>
                <Image src='/icons/icon-bag-plus-2.svg' width={18} height={18} alt='' />
              </div>
              <h2 className='text-xs font-semibold text-blue-600 border'>Giỏ hàng</h2>
            </div>
            <div className='flex-1 h-0 border-t border-dashed border-blue-400' />
            <div className='flex items-center gap-2'>
              <div className='p-2 rounded-full bg-white'>
                <Image src='/icons/icon-bag-plus-2.svg' width={18} height={18} alt='' />
              </div>
              <h2 className='text-xs font-semibold text-blue-600'>Thông tin đặt hàng</h2>
            </div>
            <div className='flex-1 h-0 border-t border-dashed border-blue-400' />
            <div className='flex items-center gap-2'>
              <div className='p-2 rounded-full bg-white'>
                <Image src='/icons/icon-bag-plus-2.svg' width={18} height={18} alt='' />
              </div>
              <h2 className='text-xs font-semibold text-blue-600'>Hoàn tất</h2>
            </div>
          </div>
          <button onClick={props.onClose} className='shadow-tag rounded-full'>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'>
              <rect width='40' height='40' rx='20' fill='white' />
              <path
                d='M26.6668 26.6673L20.0002 20.0007M20.0002 20.0007L13.3335 13.334M20.0002 20.0007L26.6669 13.334M20.0002 20.0007L13.3335 26.6674'
                stroke='#262626'
                strokeWidth='3.33333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <div className='mt-6'>
          <div className='flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg'>
            <div onClick={handleChosenAll} className='flex items-center gap-2 cursor-pointer select-none'>
              {productChosen.length === products.length && products.length != 0 ? (
                <Image src='/icons/icon-check.svg' alt='' width={24} height={24} />
              ) : (
                <div className='w-6 h-6 border-blue-700 border rounded-md' />
              )}
              <h3 className='text-xs font-semibold text-gray-scale-80'>
                Chọn tất cả <span className='text-brown-500'>{`(${products.length} sản phẩm)`}</span>
              </h3>
            </div>
            <button
              onClick={handleDeleteMultiProduct}
              className='flex items-center justify-center gap-2 text-xs font-semibold text-gray-scale-80'>
              <Image src='/icons/icon-delete.svg' alt='' width={18} height={18} />
              Xoá
            </button>
          </div>
          <div className='flex flex-col mt-3 gap-3'>
            {products.map((product, index) => (
              <ProductCartItem
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                discountPrice={product.discountPrice}
                nature={product.nature}
                pickValue={productChosen.includes(product.id)}
                increaseQuantity={() => updateProduct({ ...product, quantity: product.quantity + 1 })}
                reduceQuantity={() => {
                  if (product.quantity === 1) {
                    removeProduct(product.id)
                  } else updateProduct({ ...product, quantity: product.quantity - 1 })
                }}
                onDelete={() => removeProduct(product.id)}
                onPick={() => {
                  if (productChosen.includes(product.id)) {
                    setProductChosen(productChosen.filter((id) => id != product.id))
                  } else {
                    setProductChosen([...productChosen, product.id])
                  }
                }}
              />
            ))}
          </div>
        </div>
        <div className='p-4 flex flex-col items-start gap-4 rounded-xl bg-white shadow-tag mt-6'>
          <h2 className='font-semibold text-gray-scale-80'>THÔNG TIN THANH TOÁN</h2>
          <div className='h-[1px] w-full bg-[#ECECECB2]' />
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex items-center justify-between w-full'>
              <p className='text-sm font-medium text-gray-scale-50'>Tổng tiền:</p>
              <p className='text-sm font-medium text-gray-scale-50'>{totalPrice.toLocaleString()}đ</p>
            </div>
            <div className='flex items-center justify-between w-full'>
              <p className='text-sm font-medium text-gray-scale-50'>Voucher tốt nhất: (chưa được áp dụng)</p>
              <p className='text-sm font-medium text-gray-scale-50'></p>
            </div>
          </div>
          <div className='h-[1px] w-full bg-[#ECECECB2]' />
          <div className='flex items-center justify-between w-full'>
            <p className='text-sm font-medium text-gray-scale-50'>Tổng thanh toán:</p>
            <p className='text-lg font-medium text-[#D48E43]'>{totalPrice.toLocaleString()}đ</p>
          </div>
          <button className='w-full mt-6 py-3 bg-blue-800 text-white text-sm font-medium rounded-lg'>
            ĐI ĐẾN THANH TOÁN
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartSidebar
