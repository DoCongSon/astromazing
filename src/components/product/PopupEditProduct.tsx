import { cn } from '@/utils'
import Image from 'next/image'
import ProductSlide from './ProductSlide'
import Button from '../Button'
import { useState } from 'react'
import ProductPrice from './ProductPrice'
import ProductNature from './ProductNature'
import { ProductDetailProps } from './ProductDetail'

type PopupEditProductProps = {
  isShow: boolean
  onClose: () => void
  onEdit: (
    products: (ProductDetailProps & {
      image: string
      quantity: number
    })[]
  ) => void
  products: {
    image: string
    name: string
    price: number
    discountPrice: number
    natures?: NaturesType
    quantity: number
  }[]
}

type NaturesType = {
  title: string
  items: {
    nature: string
    image?: string
    active?: boolean
  }[]
}[]

const PopupEditProduct = (props: PopupEditProductProps) => {
  const [productEdit, setProductEdit] = useState(props.products[0])

  const handleChoseNature = ({ title, nature }: { title: string; nature: string }) => {
    const newNatures = productEdit.natures?.map((item) => {
      if (item.title === title) {
        item.items = item.items.map((natureItem) => {
          natureItem.active = natureItem.nature === nature
          return natureItem
        })
      }
      return item
    })
    setProductEdit({ ...productEdit, natures: newNatures })
  }

  const handleChangeQuantity = (quantity: number) => {
    if (quantity < 0) return
    setProductEdit({ ...productEdit, quantity })
  }

  return (
    <div
      className={cn(
        'top-0 bottom-0 left-0 right-0 z-10 bg-gray-scale-20/20 animate-fade',
        props.isShow ? 'fixed' : 'hidden'
      )}>
      <div className='w-[47.375rem] h-[32.3125rem] rounded-xl bg-bg-elevation-20 absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <button onClick={props.onClose} className='absolute top-1/2 transform -translate-y-1/2 -right-14'>
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
        <div className='px-6 py-3 rounded-t-xl bg-white flex gap-2'>
          {props.products.map((product, index) => (
            <Image
              key={index}
              src={product.image}
              alt=''
              width={86}
              height={86}
              onClick={() => setProductEdit(product)}
              className={cn(
                'w-[5.375rem] h-[5.375rem] rounded-lg border cursor-pointer',
                product === productEdit ? 'border-blue-800' : 'border-[#E7E7E7]'
              )}
            />
          ))}
        </div>
        <div className='flex gap-4 p-6 pt-3 items-start'>
          <div>
            <ProductSlide
              images={[
                productEdit.image,
                productEdit.image,
                productEdit.image,
                productEdit.image,
                productEdit.image,
                productEdit.image,
              ]}
            />
          </div>
          <div className=''>
            <div className='p-3 gap-3 rounded-xl bg-white flex-1 flex flex-col '>
              <h2 className='flex-1 text-sm font-medium leading-tight text-gray-scale-50'>{productEdit.name}</h2>
              <ProductPrice price={productEdit.price} discountPrice={productEdit.discountPrice} voucherPrice={20000} />
              <div className='flex flex-col gap-4'>
                {productEdit.natures?.map((item, index) => (
                  <ProductNature onActive={handleChoseNature} key={index} title={item.title} items={item.items} />
                ))}
              </div>
            </div>
            <div className='flex items-center gap-3 mt-3'>
              <div className='flex items-center justify-between w-28'>
                <div
                  onClick={() => handleChangeQuantity(productEdit.quantity - 1)}
                  className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg bg-bg-elevation-5'>
                  <Image src='/icons/icon-remove.svg' alt='' width={24} height={24} />
                </div>
                <span className='text-sm font-semibold'>{productEdit.quantity}</span>
                <div
                  onClick={() => handleChangeQuantity(productEdit.quantity + 1)}
                  className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg bg-bg-elevation-5'>
                  <Image src='/icons/icon-add.svg' alt='' width={24} height={24} />
                </div>
              </div>
              <Button status='white' size='XS'>
                HUỶ BỎ
              </Button>
              <Button status='default' size='XS'>
                LƯU THAY ĐỔI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupEditProduct
