import React from 'react'
import ProductNatureTag from './ProductNatureTag'

type ProductNatureProps = {
  title: string
  onActive: ({ title, nature }: { title: string; nature: string }) => void
  items: {
    nature: string
    image?: string
    active?: boolean
  }[]
}

const ProductNature = (props: ProductNatureProps) => {
  return (
    <div>
      <h3 className='text-xs font-medium text-gray-scale-30'>{props.title}:</h3>
      <div className='mt-2 flex gap-[0.375rem]'>
        {props.items.map((item, index) => (
          <ProductNatureTag
            onClick={() => props.onActive({ title: props.title, nature: item.nature })}
            key={index}
            nature={item.nature}
            image={item.image}
            active={item.active}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductNature
