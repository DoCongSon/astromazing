import Link from 'next/link'
import React from 'react'

type BreadcrumbProps = {
  items?: {
    name: string
    link: string
  }[]
}

const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <div className='w-full max-w-[75rem] mx-auto flex gap-1 items-center justify-start py-6'>
      <Link href='/' className={`flex gap-1 items-center text-xs ${props.items ? 'text-[#C5C5C5]' : 'text-[#262626]'}`}>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M13.3337 11.3334V7.63482C13.3337 7.27859 13.3334 7.10038 13.29 6.93462C13.2517 6.78772 13.1886 6.64871 13.1034 6.52309C13.0071 6.38134 12.8734 6.26379 12.6053 6.02922L9.40527 3.22922C8.90753 2.79369 8.65866 2.57604 8.37858 2.49321C8.13179 2.42023 7.86873 2.42023 7.62194 2.49321C7.34207 2.57598 7.09356 2.79343 6.59657 3.22829L3.39551 6.02922C3.12742 6.2638 2.99369 6.38134 2.89746 6.52309C2.81219 6.64871 2.74869 6.78772 2.71031 6.93462C2.66699 7.10038 2.66699 7.27859 2.66699 7.63482V11.3334C2.66699 11.9547 2.66699 12.2652 2.76849 12.5102C2.90381 12.8369 3.1632 13.0968 3.48991 13.2321C3.73494 13.3336 4.04556 13.3336 4.66682 13.3336C5.28808 13.3336 5.59905 13.3336 5.84408 13.2321C6.17078 13.0968 6.4301 12.837 6.56543 12.5103C6.66692 12.2653 6.66699 11.9546 6.66699 11.3334V10.6667C6.66699 9.93034 7.26395 9.33338 8.00033 9.33338C8.73671 9.33338 9.33366 9.93034 9.33366 10.6667V11.3334C9.33366 11.9546 9.33366 12.2653 9.43515 12.5103C9.57048 12.837 9.82987 13.0968 10.1566 13.2321C10.4016 13.3336 10.7122 13.3336 11.3335 13.3336C11.9547 13.3336 12.2657 13.3336 12.5107 13.2321C12.8374 13.0968 13.0968 12.8369 13.2321 12.5102C13.3336 12.2652 13.3337 11.9547 13.3337 11.3334Z'
            fill={props.items ? '#C5C5C5' : '#262626'}
          />
        </svg>
        Trang chủ
      </Link>
      {props.items &&
        props.items.map((item, index) => {
          if (props.items && index === props.items.length - 1)
            return (
              <Link key={index} href={item.link} className={`flex gap-1 items-center text-xs 'text-[#262626]`}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M6.66699 5.33398L9.33366 8.00065L6.66699 10.6673'
                    stroke='#262626'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                {item.name}
              </Link>
            )
          else
            return (
              <Link key={index} href={item.link} className={`flex gap-1 items-center text-xs text-[#C5C5C5]`}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M6.66699 5.33398L9.33366 8.00065L6.66699 10.6673'
                    stroke='#A9A9A9'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                {item.name}
              </Link>
            )
        })}
    </div>
  )
}

export default Breadcrumb
