'use client'
import Button from '@/components/Button'
import PopupEditProduct from '@/components/product/PopupEditProduct'
import ProductCard from '@/components/product/ProductCard'
import ProductDetail, { type ProductDetailProps } from '@/components/product/ProductDetail'
import ProductSlide from '@/components/product/ProductSlide'
import ProductVoucher from '@/components/product/ProductVoucher'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [expand, setExpand] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [productChosen, setProductChosen] = useState<number[]>([])
  const [relatedProducts, setRelatedProducts] = useState<(ProductDetailProps & { image: string; quantity: number })[]>([
    {
      name: 'Bút cảm ứng AstroMazing Pencil GD cho iPad',
      image: '/images/product-1.png',
      price: 160000,
      discountPrice: 33000,
      quantity: 1,
      natures: [
        {
          title: 'Màu sắc',
          items: [
            { nature: 'Đen', image: '/images/img-tag.png', active: true },
            { nature: 'Xanh', image: '/images/img-tag.png' },
            { nature: 'Đỏ', image: '/images/img-tag.png' },
          ],
        },
        {
          title: 'Dòng máy',
          items: [{ nature: 'Macbook', active: true }, { nature: 'Surface' }],
        },
      ],
    },
    {
      name: 'Bút cảm ứng AstroMazing Pencil GD cho iPad',
      image: '/images/product-2.png',
      price: 130000,
      discountPrice: 65000,
      quantity: 1,
      natures: [
        {
          title: 'Màu sắc',
          items: [
            { nature: 'Đen', image: '/images/img-tag.png', active: true },
            { nature: 'Xanh', image: '/images/img-tag.png' },
            { nature: 'Đỏ', image: '/images/img-tag.png' },
          ],
        },
        {
          title: 'Dòng máy',
          items: [{ nature: 'Macbook', active: true }, { nature: 'Surface' }],
        },
      ],
    },
    {
      name: 'Bút cảm ứng iPad',
      image: '/images/product-3.png',
      price: 130000,
      discountPrice: 65000,
      quantity: 1,
      natures: [
        {
          title: 'Màu sắc',
          items: [
            { nature: 'Đen', image: '/images/img-tag.png', active: true },
            { nature: 'Vàng', image: '/images/img-tag.png' },
            { nature: 'Xám', image: '/images/img-tag.png' },
          ],
        },
        {
          title: 'Dòng máy',
          items: [{ nature: 'Macbook', active: true }, { nature: 'Surface' }],
        },
      ],
    },
  ])

  return (
    <div className='max-w-[75rem] mx-auto flex gap-[0.65rem] items-start'>
      <div className='sticky top-[7rem]'>
        <ProductSlide
          images={[
            '/images/product-1.png',
            '/images/product-1.png',
            '/images/product-1.png',
            '/images/product-1.png',
            '/images/product-1.png',
          ]}
        />
        <div className='mt-5'>
          <h3 className='text-sm font-medium text-gray-scale-30'>Ghé thăm gian hàng tại:</h3>
          <div className='mt-2 flex gap-2'>
            <Link href='#' className='w-11 h-11 rounded-full bg-white flex items-center justify-center'>
              <Image src='/icons/icon-shopee.svg' alt='' width={22} height={22} />
            </Link>
            <Link href='#' className='w-11 h-11 rounded-full bg-white flex items-center justify-center'>
              <Image src='/icons/icon-lazada.png' alt='' width={22} height={22} />
            </Link>
            <Link href='#' className='w-11 h-11 rounded-full bg-white flex items-center justify-center'>
              <Image src='/icons/icon-tiktok.svg' alt='' width={22} height={22} />
            </Link>
            <Link href='#' className='w-11 h-11 rounded-full bg-white flex items-center justify-center'>
              <Image src='/icons/icon-facebook.svg' alt='' width={22} height={22} />
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-3'>
        <ProductDetail
          name='Combo [Pencil Pro] Bút cảm ứng Stylus AstroMazing Pencil 2 Pro dành cho iPad Pro'
          natures={[
            {
              title: 'Màu sắc',
              items: [
                { nature: 'Đen', image: '/images/img-tag.png', active: true },
                { nature: 'Xanh', image: '/images/img-tag.png' },
                { nature: 'Đỏ', image: '/images/img-tag.png' },
              ],
            },
            {
              title: 'Dòng máy',
              items: [{ nature: 'Macbook', active: true }, { nature: 'Surface' }],
            },
          ]}
          price={330000}
          discountPrice={280000}
        />
        <div className='p-4 flex flex-col items-start gap-4 rounded-xl bg-white'>
          <h2 className='text-xs font-semibold text-gray-scale-80'>THÔNG TIN KĨ THUẬT</h2>
          <div className='h-[1px] w-full bg-[#ECECECB2]' />
          <div className='flex flex-col gap-1'>
            <p className='text-sm'>
              <span className='inline-block text-gray-scale-30 w-[6.5rem]'>Thương hiệu:</span>
              <span className='font-medium text-gray-scale-50'>ASTROMAZING</span>
            </p>
            <p className='text-sm'>
              <span className='inline-block text-gray-scale-30 w-[6.5rem]'>Kiểu kết nối:</span>
              <span className='font-medium text-gray-scale-50'>Không dây</span>
            </p>
            <p className='text-sm'>
              <span className='inline-block text-gray-scale-30 w-[6.5rem]'>Gửi từ:</span>
              <span className='font-medium text-gray-scale-50'>TP. Hồ Chí Minh</span>
            </p>
          </div>
        </div>
        <div
          className={`p-4 pb-12 flex flex-col items-start gap-5 rounded-xl transition-all duration-300 bg-white relative overflow-hidden ${
            expand ? 'h-auto' : 'h-[35rem]'
          }`}>
          <div className='flex gap-2'>
            <button className='py-2 px-[0.875rem] rounded-lg flex items-center justify-center bg-gradient-to-r from-[#FFF0D8] from-50 to-[#FFD797] text-xs font-semibold text-gray-scale-80'>
              Đặc điểm nổi bật
            </button>
            <button className='py-2 px-[0.875rem] rounded-lg flex items-center justify-center bg-bg-elevation-20 text-xs font-semibold text-gray-scale-20'>
              Thông tin chi tiết
            </button>
            <button className='py-2 px-[0.875rem] rounded-lg flex items-center justify-center bg-bg-elevation-20 text-xs font-semibold text-gray-scale-20'>
              Cách sử dụng & bảo hành
            </button>
          </div>
          <div className='h-[1px] w-full bg-[#ECECECB2]' />
          <div className='flex flex-col gap-6'>
            <div>
              <h3 className='text-sm font-medium leading-tight text-gray-scale-50'>
                Combo [Pencil Pro] Bút cảm ứng Stylus AstroMazing Pencil 2 Pro dành cho iPad Pro 11 12.9 Gen 6 7 8 9 10
                Air 4 5 Mini
              </h3>
              <p className='text-sm leading-normal text-gray-scale-30 mt-[0.375rem]'>
                Với xu hướng công nghệ phát triển như hiện nay, chuột và bàn phím là những phụ kiện không thể thiếu đối
                với những tín đồ công nghệ. Hiểu được vấn đề này, nhà Astro đem đến cho bạn một chiếc bàn phím sử dụng
                bluetooth 3.0 tích hợp chế độ tiết kiệm pin và chuột không dây siêu êm với vẻ ngoài nhỏ nhắn, gọn gàng.
                Cùng tham khảo ngay mẫu sản phẩm combo chuột và bàn phím AstroMazing bluetooth size mini cho các thiết
                bị điện tử sau đây nhé!
              </p>
            </div>
            <div>
              <h3 className='text-sm font-medium leading-tight text-gray-scale-50'>
                1. Thiết kế mỏng nhẹ, màu sắc ngọt ngào
              </h3>
              <p className='text-sm leading-normal text-gray-scale-30 mt-[0.375rem]'>
                Với xu hướng công nghệ phát triển như hiện nay, chuột và bàn phím là những phụ kiện không thể thiếu đối
                với những tín đồ công nghệ. Hiểu được vấn đề này, nhà Astro đem đến cho bạn một chiếc bàn phím sử dụng
                bluetooth 3.0 tích hợp chế độ tiết kiệm pin và chuột không dây siêu êm với vẻ ngoài nhỏ nhắn, gọn gàng.
                Cùng tham khảo ngay mẫu sản phẩm combo chuột và bàn phím AstroMazing bluetooth size mini cho các thiết
                bị điện tử sau đây nhé!
              </p>
              <Image
                src='/images/img-product-detail-1.png'
                alt=''
                width={600}
                height={400}
                className='w-full rounded-xl mt-3'
              />
            </div>
            <div>
              <h3 className='text-sm font-medium leading-tight text-gray-scale-50'>
                2. Kết nối bluetooth 3.0 cho hiệu quả truyền tải dữ liệu cao
              </h3>
              <p className='text-sm leading-normal text-gray-scale-30 mt-[0.375rem]'>
                Với xu hướng công nghệ phát triển như hiện nay, chuột và bàn phím là những phụ kiện không thể thiếu đối
                với những tín đồ công nghệ. Hiểu được vấn đề này, nhà Astro đem đến cho bạn một chiếc bàn phím sử dụng
                bluetooth 3.0 tích hợp chế độ tiết kiệm pin và chuột không dây siêu êm với vẻ ngoài nhỏ nhắn, gọn gàng.
                Cùng tham khảo ngay mẫu sản phẩm combo chuột và bàn phím AstroMazing bluetooth size mini cho các thiết
                bị điện tử sau đây nhé!
              </p>
              <Image
                src='/images/img-product-detail-2.png'
                alt=''
                width={600}
                height={400}
                className='w-full rounded-xl mt-3'
              />
            </div>
          </div>
          <div
            onClick={() => setExpand(!expand)}
            className='cursor-pointer py-4 flex gap-1 items-center justify-center w-full absolute bottom-0 left-0 rounded-xl bg-white'>
            <p>{expand ? 'Thu gọn' : 'Xem thêm'}</p>
            <Image
              className={`transform transition-all duration-300 ${expand ? 'rotate-180' : 'rotate-0'}`}
              src='/icons/icon-expand.svg'
              alt=''
              width={16}
              height={16}
            />
          </div>
        </div>
        <div className='p-4 flex flex-col items-start gap-3 rounded-xl bg-white'>
          <h2 className='text-sm font-medium text-gray-scale-60'>Sản phẩm mua kèm phù hợp:</h2>
          <div className='w-full flex flex-col gap-3'>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                name={item.name}
                image={item.image}
                price={item.price}
                discountPrice={item.discountPrice}
                nature={
                  item.natures
                    ?.map((item) => item.items.find((item) => item.active)?.nature)
                    .filter((nature): nature is string => nature !== undefined) ?? []
                }
                pick
                pickValue={productChosen.includes(index)}
                onPick={() => {
                  if (productChosen.includes(index)) {
                    setProductChosen(productChosen.filter((id) => id != index))
                  } else {
                    setProductChosen([...productChosen, index])
                  }
                }}
                onEdit={() => setShowPopup(!showPopup)}
              />
            ))}
            <PopupEditProduct
              onEdit={setRelatedProducts}
              products={relatedProducts}
              isShow={showPopup}
              onClose={() => setShowPopup(false)}
            />
          </div>
          <div className='w-full flex items-center justify-between mt-4'>
            <p className='text-sm font-bold text-gray-scale-20 '>
              Tổng cộng: <span className='ml-2 text-xl font-bold text-[#D48E43]'>195.000đ</span>
            </p>
            <Button
              className=' border-2 hover:border-[#FFF0D8] hover:shadow-button-add-to-cart hover:bg-gradient-to-r from-[#FFF0D8] to-[#FFD797] transition-all duration-300'
              status='line'
              size='XS'
              iconLeft='/icons/icon-bag-plus.svg'>
              THÊM VÀO GIỎ
            </Button>
          </div>
        </div>
      </div>
      <div className='sticky top-[7rem]'>
        <div className='flex flex-col gap-2'>
          <ProductVoucher
            category='Bút cảm ứng'
            icon='/icons/icon-pen.svg'
            code='code12345'
            discount={15}
            minPurchase={500}
            maxDiscount={30}
          />
          <ProductVoucher
            category='Bút cảm ứng'
            icon='/icons/icon-pen.svg'
            code='code12345'
            discount={15}
            minPurchase={500}
            maxDiscount={30}
          />
          <ProductVoucher
            category='Bút cảm ứng'
            icon='/icons/icon-pen.svg'
            code='code12345'
            discount={15}
            minPurchase={500}
            maxDiscount={30}
          />
        </div>
        <button className='rounded-full h-8 px-4 flex items-center justify-center bg-[#E9E9E9] text-xs font-semibold text-gray-scale-80 mt-4 mx-auto transition-all duration-300 hover:bg-blue-700 hover:text-white'>
          +12 voucher
        </button>
      </div>
    </div>
  )
}
