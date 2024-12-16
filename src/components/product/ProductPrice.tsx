'use client'
import React from 'react'

type ProductPriceProps = {
  price: number
  discountPrice: number
  voucherPrice: number
}

const ProductPrice = (props: ProductPriceProps) => {
  const [hover, setHover] = React.useState(false)
  const btnRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (btnRef.current) {
      const btn = btnRef.current
      btn.addEventListener('mouseenter', () => setHover(true))
      btn.addEventListener('mouseleave', () => setHover(false))
      return () => {
        btn.removeEventListener('mouseenter', () => setHover(true))
        btn.removeEventListener('mouseleave', () => setHover(false))
      }
    }
  }, [])

  return (
    <div>
      <div
        ref={btnRef}
        className='flex items-center justify-between w-[16.25rem] px-2 py-[0.375rem] rounded-lg bg-gradient-to-r from-[#E9940B] hover:from-[#102841] from-[46.7%] to-[#FFDBA3] hover:to-[#1359A1]  group'>
        <div className='flex items-center'>
          <span className='font-bold leading-tight text-white'>{props.discountPrice.toLocaleString()}đ</span>
          {!hover && <span className='ml-2 text-xs line-through text-white'>{props.price.toLocaleString()}đ</span>}
        </div>
        <button className='w-10 h-[1.625rem] group-hover:w-36 text-nowrap transition-all duration-300 flex items-center justify-center text-sm text-white font-semibold p-[0.375rem] rounded-[0.375rem] bg-gradient-to-r from-[#102841] to-[#1359A1] group-hover:from-[#E9940B] group-hover:to-[#FFDBA3]'>
          {hover
            ? `Tiết kiệm ${(props.price - props.discountPrice).toLocaleString()}đ`
            : `-${(((props.price - props.discountPrice) / props.price) * 100).toFixed(0)}%`}
        </button>
      </div>
      <div className='mt-[0.375rem] rounded-[0.375rem] bg-mint p-1 inline-flex items-center gap-1 relative group cursor-pointers'>
        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
          <path
            d='M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z'
            fill='white'
          />
          <path
            d='M6.15127 7.34411C6.41626 7.60909 6.41626 8.06335 6.15127 8.32833L5.60238 8.87723C5.33739 9.14221 4.88313 9.14221 4.61815 8.87723L2.21436 6.45452C1.94938 6.18953 1.94938 5.73527 2.21436 5.47029L2.76326 4.92139C3.02824 4.65641 3.4825 4.65641 3.74749 4.92139L6.15127 7.34411Z'
            fill='#29CC97'
          />
          <path
            d='M8.25242 3.15968C8.51741 2.89469 8.97167 2.89469 9.23665 3.15968L9.78555 3.70857C10.0505 3.97356 10.0505 4.42781 9.78555 4.6928L5.62151 8.83791C5.35653 9.10289 4.90227 9.10289 4.63728 8.83791L4.08839 8.28901C3.8234 8.02403 3.8234 7.56977 4.08839 7.30479L8.25242 3.15968Z'
            fill='#29CC97'
          />
        </svg>
        <p className='text-[0.625rem] text-white font-medium leading-none'>Giá khi mua với voucher</p>
        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
          <path
            d='M11.7952 9.76072L11.7947 8.10234C11.7901 7.86416 11.7098 7.63363 11.5654 7.44409C11.4211 7.25455 11.2203 7.11583 10.9919 7.04798C10.7702 6.97753 10.5767 6.83838 10.4393 6.65065C10.302 6.46292 10.2279 6.23635 10.2278 6.00374C10.2278 5.77112 10.3018 5.54452 10.439 5.35674C10.5763 5.16895 10.7698 5.02971 10.9914 4.95917C11.2201 4.89196 11.4213 4.75355 11.5659 4.56408C11.7104 4.37461 11.7908 4.14396 11.7952 3.90569L11.7947 2.24642C11.7946 1.95579 11.6791 1.67711 11.4736 1.47161C11.2681 1.2661 10.9894 1.15058 10.6987 1.15043L1.30597 1.14999C1.16204 1.14998 1.01952 1.17832 0.886548 1.2334C0.753572 1.28847 0.632748 1.36921 0.530974 1.47098C0.4292 1.57275 0.348471 1.69358 0.293394 1.82655C0.238318 1.95953 0.209974 2.10205 0.209981 2.24598L0.210425 3.90436C0.214994 4.14257 0.295257 4.37315 0.439594 4.5627C0.583931 4.75226 0.784852 4.89096 1.01327 4.95873C1.23496 5.02917 1.42849 5.16833 1.56584 5.35606C1.7032 5.54379 1.77726 5.77035 1.77731 6.00297C1.77736 6.23558 1.7034 6.46218 1.56612 6.64997C1.42884 6.83776 1.23537 6.977 1.01371 7.04753C0.785071 7.11475 0.58384 7.25316 0.439289 7.44263C0.294738 7.6321 0.214407 7.86274 0.209981 8.10102L0.210424 9.76028C0.210741 10.0509 0.326313 10.3294 0.531783 10.5349C0.737253 10.7404 1.01584 10.856 1.30642 10.8563L10.6996 10.8563C10.8436 10.8563 10.9861 10.8279 11.1191 10.7729C11.252 10.7178 11.3729 10.6371 11.4746 10.5353C11.5764 10.4335 11.6571 10.3127 11.7122 10.1797C11.7673 10.0467 11.7952 9.90465 11.7952 9.76072Z'
            fill='white'
          />
          <path
            d='M4.01233 8.12268C3.87637 7.98645 3.80001 7.80184 3.80001 7.60938C3.80001 7.41691 3.87637 7.2323 4.01233 7.09607L7.09216 4.01624C7.2283 3.8801 7.41294 3.80362 7.60547 3.80362C7.798 3.80362 7.98264 3.8801 8.11877 4.01624C8.25491 4.15237 8.33139 4.33701 8.33139 4.52954C8.33139 4.72207 8.25491 4.90671 8.11877 5.04285L5.03894 8.12268C4.90271 8.25864 4.7181 8.335 4.52563 8.335C4.33317 8.335 4.14856 8.25864 4.01233 8.12268Z'
            fill='#29CC97'
          />
          <path
            d='M4.05291 5.16059C4.35862 5.4663 4.85427 5.4663 5.15998 5.16059C5.46568 4.85489 5.46568 4.35924 5.15998 4.05353C4.85427 3.74782 4.35862 3.74782 4.05291 4.05353C3.74721 4.35924 3.74721 4.85489 4.05291 5.16059Z'
            fill='#29CC97'
          />
          <path
            d='M7.05291 8.1645C7.35862 8.47021 7.85427 8.47021 8.15998 8.1645C8.46568 7.85879 8.46568 7.36315 8.15998 7.05744C7.85427 6.75173 7.35862 6.75173 7.05291 7.05744C6.74721 7.36314 6.74721 7.85879 7.05291 8.1645Z'
            fill='#29CC97'
          />
        </svg>
        <div className='hidden w-[19.3125rem] p-3 group-hover:flex animate-fade flex-col gap-3 rounded-lg bg-bg-elevation-5 absolute -bottom-[11.4rem] left-0 z-10 shadow-cash-item'>
          <h3 className='text-xs font-semibold text-gray-scale-80 leading-tight'>Chi tiết giá</h3>
          <div className='w-full h-[1px] bg-[#D4D4D459]' />
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <p className='text-xs text-gray-scale-40'>Giá gốc:</p>
              <p className='text-xs font-semibold text-gray-scale-80'>{props.price.toLocaleString()}đ</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-xs text-gray-scale-40'>
                Giảm giá sản phẩm:{' '}
                <span className='font-semibold text-gray-scale-80'>{`-${(
                  ((props.price - props.discountPrice) / props.price) *
                  100
                ).toFixed(0)}%`}</span>
              </p>
              <p className='text-xs font-semibold text-gray-scale-80'>
                {(props.price - props.discountPrice).toLocaleString()}đ
              </p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-xs text-gray-scale-40'>Voucher giảm giá:</p>
              <p className='text-xs font-semibold text-gray-scale-80'>{props.voucherPrice.toLocaleString()}đ</p>
            </div>
          </div>
          <div className='w-full h-[1px] bg-[#D4D4D459]' />
          <div className='flex items-center justify-between'>
            <p className='text-xs font-medium text-gray-scale-80'>Giá tạm tính:</p>
            <p className='font-medium text-[#D48E43]'>{(props.discountPrice - props.voucherPrice).toLocaleString()}đ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPrice
