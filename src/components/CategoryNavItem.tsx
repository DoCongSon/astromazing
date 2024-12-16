import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CategoryNavItemProps = {
  name: string
  link: string
  icon: string
}

const CategoryNavItem = (props: CategoryNavItemProps) => {
  return (
    <Link href={props.link} className='inline-flex items-center gap-2'>
      <Image src={props.icon} alt={props.name} width={16} height={16} />
      <span className='text-xs text-gray-scale-80 flex'>
        {props.name}
        <Image src='/icons/icon-arrow-down.svg' alt={props.name} width={16} height={16} />
      </span>
    </Link>
  )
}

export default CategoryNavItem
