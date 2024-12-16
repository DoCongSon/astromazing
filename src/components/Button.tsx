import { cn } from '@/utils'
import Image from 'next/image'
import React from 'react'

type ButtonProps = {
  status: 'default' | 'line' | 'line-black' | 'white' | 'gray'
  size: 'L' | 'M' | 'S' | 'XS' | '2XS'
  iconLeft?: string
  iconRight?: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const Button = (props: ButtonProps) => {
  let className = 'inline-flex gap-2 items-center justify-center font-semibold'
  switch (props.status) {
    case 'default':
      className += ' bg-blue-700 text-white'
      break
    case 'line':
      className += ' border border-blue-800 bg-white text-blue-800'
      break
    case 'line-black':
      className += ' bg-gradient-to-r from-[#E78C03] to-[#FFB84F] text-white'
      break
    case 'white':
      className += ' bg-white text-blue-800'
      break
    case 'gray':
      className += '  bg-bg-elevation-30 text-blue-800'
      break
  }

  switch (props.size) {
    case 'L':
      className += ' px-8 py-4 rounded-lg text-[0.875rem]'
      break
    case 'M':
      className += ' px-6 py-3 rounded-lg text-[0.875rem]'
      break
    case 'S':
      className += ' px-5 py-[0.525rem] rounded-lg text-[0.875rem]'
      break
    case 'XS':
      className += ' px-4 py-[0.525rem] rounded-lg text-xs'
      break
    case '2XS':
      className += ' p-[0.525rem] rounded-md text-xs'
      break
  }

  return (
    <button className={cn(className, props.className)} onClick={props.onClick}>
      {props.iconLeft && <Image src={props.iconLeft} alt='' width={16} height={16} />}
      {props.children}
      {props.iconRight && <Image src={props.iconRight} alt='' width={16} height={16} />}
    </button>
  )
}

export default Button
