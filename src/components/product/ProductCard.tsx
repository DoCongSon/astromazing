import Image from 'next/image'

type ProductCardProps = {
  image: string
  name: string
  price: number
  discountPrice?: number
  nature?: string[]
  pick?: boolean
  onPick?: () => void
  onEdit?: () => void
  pickValue?: boolean
}

const ProductCard = (props: ProductCardProps) => {
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
      <button
        onClick={props.onEdit}
        className='p-[0.56125rem] rounded-full bg-bg-elevation-20 cursor-pointer group hover:bg-gradient-to-bl from-[#17395C] to-[#66A6E8]/80'>
        <Image src='/icons/icon-edit.svg' alt='' width={16} height={16} className='group-hover:hidden' />
        <Image src='/icons/icon-edit-hover.svg' alt='' width={16} height={16} className='group-hover:block hidden' />
      </button>
    </div>
  )
}

export default ProductCard
