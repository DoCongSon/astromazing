import { cn } from '@/utils'
import Image from 'next/image'
import React from 'react'

type ProductNatureTagProps = {
  nature: string
  image?: string
  active?: boolean
  onClick?: () => void
}

const ProductNatureTag = (props: ProductNatureTagProps) => {
  let className =
    'cursor-pointer flex py-[0.375rem] gap-1 shadow-tag items-center rounded-[0.25rem] relative border-2 transition-all duration-300'
  if (props.image) {
    className += ' px-[0.375rem]'
  } else {
    className += ' px-[0.675rem]'
  }

  return (
    <div onClick={props.onClick} className={cn(className, props.active ? 'border-blue-500' : 'border-transparent')}>
      {props.image && (
        <div className='w-7 h-5'>
          <Image src={props.image} alt='' width={200} height={200} className='w-7 h-full object-cover' />
        </div>
      )}
      <span className='text-xs text-gray-scale-40'>{props.nature}</span>
      <Image
        className={cn(
          '-top-1.5 -right-1.5 absolute transition-all duration-300',
          props.active ? 'opacity-100' : 'opacity-0'
        )}
        src='/icons/label-checkbox.svg'
        alt=''
        width={12}
        height={12}
      />
    </div>
  )
}

export default ProductNatureTag
