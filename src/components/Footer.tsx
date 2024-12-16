import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-[3.75rem]'>
      <div className='h-[10.1875rem] bg-white flex gap-4 justify-center items-center'>
        <div className='flex gap-4 w-[18rem] items-center p-5 rounded-lg bg-gradient-to-r from-[#EEF8FF] to-[#FFF5EDCA]'>
          <Image src='/icons/icon-package-business.svg' alt='logo' width={48} height={48} />
          <div className='flex-1'>
            <h3 className='text-blue-600 font-semibold text-sm'>HOÀN TRẢ MIỄN PHÍ</h3>
            <p className='mt-1 text-xs text-gray-scale-40'>Trả hàng miễn phí trong 7 ngày</p>
          </div>
        </div>
        <div className='flex gap-4 w-[18rem] items-center p-5 rounded-lg bg-gradient-to-r from-[#EEF8FF] to-[#FFF5EDCA]'>
          <Image src='/icons/icon-target.svg' alt='logo' width={48} height={48} />
          <div className='flex-1'>
            <h3 className='text-blue-600 font-semibold text-sm'>CAM KẾT CHÍNH HÃNG</h3>
            <p className='mt-1 text-xs text-gray-scale-40'>Hoàn tiền gấp đôi nếu phát hiện hàng giả</p>
          </div>
        </div>
        <div className='flex gap-4 w-[18rem] items-center p-5 rounded-lg bg-gradient-to-r from-[#EEF8FF] to-[#FFF5EDCA]'>
          <Image src='/icons/icon-freeship.svg' alt='logo' width={48} height={48} />
          <div className='flex-1'>
            <h3 className='text-blue-600 font-semibold text-sm'>MIỄN PHÍ VẬN CHUYỂN</h3>
            <p className='mt-1 text-xs text-gray-scale-40'>Giao hàng miễn phí trên toàn quốc</p>
          </div>
        </div>
        <div className='flex gap-4 w-[18rem] items-center p-5 rounded-lg bg-gradient-to-r from-[#EEF8FF] to-[#FFF5EDCA]'>
          <Image src='/icons/icon-phone.svg' alt='logo' width={48} height={48} />
          <div className='flex-1'>
            <h3 className='text-blue-600 font-semibold text-sm'>HỖ TRỢ TẬN TÌNH</h3>
            <p className='mt-1 text-xs text-gray-scale-40'>Cập nhật, thông báo tình trạng đơn hàng 24/7</p>
          </div>
        </div>
      </div>
      <div className='bg-[#10273F]'>
        <div className='flex items-center justify-between h-[3.8125rem] max-w-[75rem] mx-auto'>
          <div className='flex gap-3 items-center'>
            <p className='text-white text-sm font-medium'>Theo dõi chúng tôi qua</p>
            <div className='w-9 h-9 rounded-full bg-white shadow-icon-social flex items-center justify-center'>
              <Image src='/icons/icon-facebook-2.svg' alt='logo' width={18} height={18} />
            </div>
            <div className='w-9 h-9 rounded-full bg-white shadow-icon-social flex items-center justify-center'>
              <Image src='/icons/icon-instagram.svg' alt='logo' width={18} height={18} />
            </div>
            <div className='w-9 h-9 rounded-full bg-white shadow-icon-social flex items-center justify-center'>
              <Image src='/icons/icon-shopee-2.svg' alt='logo' width={18} height={18} />
            </div>
            <div className='w-9 h-9 rounded-full bg-white shadow-icon-social flex items-center justify-center'>
              <Image src='/icons/icon-tiktok-2.svg' alt='logo' width={18} height={18} />
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            <p className='text-white text-sm font-medium'>Theo dõi chúng tôi qua</p>
            <div className='w-[16.18556rem] h-9 rounded-full shadow-icon-social bg-white px-4 flex items-center justify-between'>
              <input
                type='text'
                placeholder='Nhập email của bạn'
                className='border-none outline-none bg-transparent text-sm font-medium text-gray-scale-30'
              />
              <Image src='/icons/icon-send.svg' alt='logo' width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-bg-elevation-20'>
        <div className='max-w-[75rem] mx-auto'>
          <Image src='/images/logo-2.svg' alt='logo' width={350} height={33} className='mt-10' />
          <div className='pt-10 pb-11 flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
              <h3 className='text-xs font-semibold text-gray-scale-50'>CÔNG TY TNHH ASTROMAZING VIETNAM:</h3>
              <div className='flex gap-1'>
                <p className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  376 đường Nguyễn Thị Minh Khai, Phường 5 Quận 3, Tp. Hồ Chí Minh
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <h3 className='text-xs font-semibold text-gray-scale-50'>TỔNG ĐÀI HỖ TRỢ:</h3>
              <div className='flex gap-1'>
                <p className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Tư vấn bán hàng (9h-21h): <span className='font-bold text-blue-500'>094 749 2020</span>
                </p>
                <p className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Góp ý khiếu nại (9h-21h): <span className='font-bold text-blue-500'>094 649 2020</span>
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <h3 className='text-xs font-semibold text-gray-scale-50'>THÔNG TIN:</h3>
              <div className='flex gap-1'>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Về AstroMazing
                </Link>
                <Link
                  href='#'
                  className='text-sm text-blue-500 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Shopee
                </Link>
                <Link
                  href='#'
                  className='text-sm text-blue-500 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Lazada
                </Link>
                <Link
                  href='#'
                  className='text-sm text-blue-500 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Tiktok
                </Link>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Liên hệ hợp tác
                </Link>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  sitemap
                </Link>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <h3 className='text-xs font-semibold text-gray-scale-50'>CHÍNH SÁCH:</h3>
              <div className='flex gap-1'>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Tích điểm thành viên
                </Link>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Hướng dẫn sử dụng
                </Link>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Giao hàng & Thanh toán
                </Link>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Bảo hành & Đổi trả
                </Link>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Chính sách bán sỉ & CTV
                </Link>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.875rem] py-3 bg-gradient-to-r from-bg-elevation-5 hover:from-[#FFE2B5] from-[-50%] to-bg-elevation-5 hover:to-[#E78E00] to-[95%] hover:text-white transition-all duration-300 rounded shadow-footer-item'>
                  Hợp tác KOL & KOC
                </Link>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <h3 className='text-xs font-semibold text-gray-scale-50'>PHƯƠNG THỨC THANH TOÁN:</h3>
              <div className='flex gap-1'>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.64rem] py-[0.4rem] bg-bg-elevation-5 rounded shadow-cash-item min-w-[3.52rem] flex items-center justify-center'>
                  <Image src='/images/logo-visa.png' alt='logo' width={100} height={27} className='h-[27px] w-auto' />
                </Link>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.64rem] py-[0.4rem] bg-bg-elevation-5 rounded shadow-cash-item min-w-[3.52rem] flex items-center justify-center'>
                  <Image
                    src='/images/logo-master-card.png'
                    alt='logo'
                    width={100}
                    height={27}
                    className='h-[27px] w-auto'
                  />
                </Link>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.64rem] py-[0.4rem] bg-bg-elevation-5 rounded shadow-cash-item min-w-[3.52rem] flex items-center justify-center'>
                  <Image src='/images/logo-momo.png' alt='logo' width={100} height={27} className='h-[27px] w-auto' />
                </Link>
                <Link
                  href='#'
                  className='text-sm text-gray-scale-30 font-medium leading-tight px-[0.64rem] py-[0.4rem] bg-bg-elevation-5 rounded shadow-cash-item min-w-[3.52rem] flex items-center justify-center'>
                  <Image src='/images/logo-cod.png' alt='logo' width={100} height={27} className='h-[27px] w-auto' />
                </Link>
              </div>
              <Link
                href='#'
                className='ml-2 text-sm text-gray-scale-30 font-medium leading-tight px-4 py-[0.4rem] bg-bg-elevation-5 rounded shadow-cash-item min-w-[3.52rem] flex items-center justify-center'>
                <Image
                  src='/images/logo-bo-cong-thuong.png'
                  alt='logo'
                  width={100}
                  height={27}
                  className='h-[27px] w-auto'
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='p-4 border-t border-[#E2E2E299]'>
          <p className='text-sm text-gray-scale-30 max-w-[75rem] mx-auto'>
            Bản quyền thuộc về AstroMazing | Cung cấp bởi OkHub Agency
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
