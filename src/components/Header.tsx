'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import CategoryNavItem from './CategoryNavItem'
import CartSidebar from './CartSidebar'
import { useCartStore } from '@/providers/cart-store-provider'
import { cn } from '@/utils'

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showStore, setShowStore] = useState(false)
  const storeRef = useRef<HTMLDivElement>(null)
  const products = useCartStore((state) => state.products)
  const navlist = [
    { name: 'Tra cứu đơn hàng', link: '#' },
    { name: 'Góc công nghệ', link: '#' },
    { name: 'Cửa hàng', link: '#' },
    { name: 'Chính sách', link: '#' },
  ]

  const categoryList = [
    { name: 'Bút cảm ứng', link: '#', icon: '/icons/icon-pen.svg' },
    { name: 'Phụ kiện IPad', link: '#', icon: '/icons/icon-ipad.svg' },
    { name: 'Phụ kiện Tablet Android', link: '#', icon: '/icons/icon-tablet.svg' },
    { name: 'Phụ kiện Apple', link: '#', icon: '/icons/icon-imac.svg' },
    { name: 'Màn hình di động', link: '#', icon: '/icons/icon-mobile.svg' },
    { name: 'Tai nghe - loa', link: '#', icon: '/icons/icon-head-phone.svg' },
    { name: 'Retro Digital Camera', link: '#', icon: '/icons/icon-camera.svg' },
    { name: 'Xem Thêm', link: '#', icon: '/icons/icon-plus.svg' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | null) => {
      if (storeRef.current && event?.target instanceof Node && !storeRef.current.contains(event.target)) {
        setShowStore(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className='h-[6.25rem] w-full border-b-2 border-white bg-white/95 sticky top-0 z-50'>
      <div className='flex items-center justify-between pt-[0.65rem] max-w-[75rem] mx-auto'>
        <div>
          <Image src='/images/logo.svg' alt='logo' width={130} height={32} className='w-[7.68375rem] h-[1.9765rem]' />
        </div>
        <div className='inline-flex p-1 pr-4 rounded-[6.25rem] bg-blue-50 gap-6 items-center'>
          <div className='flex items-center justify-center px-3 h-9 gap-5 rounded-[1.75rem] bg-bg-elevation-20'>
            <input
              className='w-[14.3125rem] h-[0.875rem] border-none outline-none bg-bg-elevation-20 placeholder:text-gray-scale-30 font-medium text-xs'
              type='text'
              placeholder='Tìm kiếm sản phẩm'
            />
            <Image
              className='cursor-pointer w-5 h-5'
              src='/icons/icon-search.svg'
              alt='search'
              width={20}
              height={20}
            />
          </div>
          <nav className='flex items-center gap-6 font-medium text-xs text-blue-800 leading-[0.9rem]'>
            {navlist.map((item, index) => {
              if (item.name === 'Cửa hàng') {
                return (
                  <div key={index} className='relative'>
                    <button onClick={() => setShowStore(!showStore)}>{item.name}</button>
                    <div
                      ref={storeRef}
                      className={cn(
                        'transition-all animate-fade w-[25rem] bg-white rounded-lg p-4 shadow-product-card absolute top-10 -left-4',
                        showStore ? 'block' : 'hidden'
                      )}>
                      <svg
                        className='absolute -top-2 left-2 drop-shadow-product-card'
                        xmlns='http://www.w3.org/2000/svg'
                        width='23'
                        height='19'
                        viewBox='0 0 23 19'
                        fill='none'>
                        <path d='M11.5 0L22.3253 18.75H0.674683L11.5 0Z' fill='white' />
                      </svg>
                      <h2 className='font-medium leading-tight text-[#212529] text-base'>
                        Cửa hàng Nguyễn Thị Minh Khai
                      </h2>
                      <div className='flex mt-3 gap-[0.625rem]'>
                        <div className='flex flex-col gap-[0.625rem] flex-1'>
                          <div className='flex gap-[0.625rem] items-center'>
                            <Image src='/icons/icon-location.svg' alt='store' width={14} height={14} />
                            <p className='text-sm text-gray-scale-80 font-normal leading-normal'>
                              5376 đường Nguyễn Thị Minh Khai, Phường 5 Quận 3, Tp. Hồ Chí Minh
                            </p>
                          </div>
                          <div className='flex gap-[0.625rem] items-center'>
                            <Image src='/icons/icon-phone-2.svg' alt='store' width={14} height={14} />
                            <p className='text-sm text-gray-scale-80 font-normal leading-normal'>0123123123</p>
                          </div>
                          <div className='flex gap-[0.625rem] items-center'>
                            <Image src='/icons/icon-clock.svg' alt='store' width={14} height={14} />
                            <p className='text-sm text-gray-scale-80 font-normal leading-normal'>09:00 - 21:00</p>
                          </div>
                          <div className=''>
                            <h3 className='text-sm font-medium text-gray-scale-80'>Ghé gian hàng tại:</h3>
                            <div className='mt-2 flex gap-3'>
                              <Link
                                href='#'
                                className='w-9 h-9 rounded-lg bg-[#E4E4E44D] flex items-center justify-center'>
                                <Image src='/icons/icon-shopee.svg' alt='' width={24} height={24} />
                              </Link>
                              <Link
                                href='#'
                                className='w-9 h-9 rounded-lg bg-[#E4E4E44D] flex items-center justify-center'>
                                <Image src='/icons/icon-lazada.png' alt='' width={24} height={24} />
                              </Link>
                              <Link
                                href='#'
                                className='w-9 h-9 rounded-lg bg-[#E4E4E44D] flex items-center justify-center'>
                                <Image src='/icons/icon-tiktok.svg' alt='' width={24} height={24} />
                              </Link>
                              <Link
                                href='#'
                                className='w-9 h-9 rounded-lg bg-[#E4E4E44D] flex items-center justify-center'>
                                <Image src='/icons/icon-facebook.svg' alt='' width={24} height={24} />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className='w-[102px]'>
                          <Image src='/images/map.png' alt='store' width={102} height={94} className='rounded-lg' />
                          <Link href='#' className='block text-xs text-[#0468FF] font-normal text-center mt-[0.625rem]'>
                            Chỉ đường đến cửa hàng
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else
                return (
                  <Link key={index} href={item.link}>
                    {item.name}
                  </Link>
                )
            })}
          </nav>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='flex gap-4'>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className='w-9 h-9 flex items-center justify-center bg-[#F0F0F0] hover:bg-gradient-to-bl from-[#102841] to-[#1359A1] transition-all duration-300 rounded-full relative'>
              <Image className='cursor-pointer' src='/icons/icon-bag.svg' alt='bag' width={18} height={18} />
              {products.length > 0 && (
                <div className='h-4 rounded-full text-[0.625rem] leading-[0.95rem] px-1 bg-blue-600 text-gray-scale-0 absolute -top-1 -right-1'>
                  {products.length}
                </div>
              )}
            </button>
            <button className='w-9 h-9 flex items-center justify-center bg-[#F0F0F0] hover:bg-gradient-to-r from-[#102841] to-[#1359A1] transition-all duration-300 rounded-full'>
              <Image className='cursor-pointer' src='/icons/icon-user.svg' alt='user' width={18} height={18} />
            </button>
          </div>
          <p className='text-gray-scale-80 text-xs'>Đăng nhập</p>
        </div>
      </div>
      <nav className='w-full flex items-center justify-between mt-[1.12rem] max-w-[75rem] mx-auto'>
        {categoryList.map((item, index) => {
          return <CategoryNavItem key={index} name={item.name} link={item.link} icon={item.icon} />
        })}
      </nav>
      <CartSidebar visible={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}

export default Header
