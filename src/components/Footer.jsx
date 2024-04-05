import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Link } from 'react-router-dom'
import { items1, items2,items3 } from '@/utils/utils'

const links1 = items1.map((item, index) => {
    return (
        <li key={index} className='mr-6 '>
            <Link to={item.link} className=' text-sm text-blue-900 font-bold hover:underline '>{item.text}</Link>
        </li>
    )
})
const links2 = items2.map((item, index) => {
    return (
        <li key={index} className='mr-6'>
            <Link to={item.link} className=' text-sm text-blue-900 font-bold hover:underline '>{item.text}</Link>
        </li>
    )
})
const links3 = items3.map((item, index) => {
    return (
        <li key={index} className='mr-6'>
            <Link to={item.link} className=' text-sm text-blue-900 font-bold hover:underline '>{item.text}</Link>
        </li>
    )
})
export default function Footer() {
    return (
        <MaxWidthWrapper className='mt-48 mb-20 px-5'>
            <footer>
                <img src="\paypal-color.svg" alt="logo" className=' w-36 h-auto' />
                <div className='mt-8 flex justify-between gap-4 flex-col md:flex-row'>
                    <ul className='flex flex-wrap first: no-underline'>
                        {links1}
                    </ul>
                    <img src="\Flag_of_the_United_States.svg" alt="USA"  className='w-8 h-auto'/>
                </div>
                <hr className='mt-5' />
                <div className='flex flex-col justify-between lg:flex-row'>
                    <div className='mt-4'>
                        <ul className='flex flex-wrap'>
                            {links2}
                        </ul>
                    </div>
                    <div className='mt-4'>
                        <ul className='flex flex-wrap'>
                            {links3}
                        </ul>
                    </div>
                </div>
            </footer>
        </MaxWidthWrapper>
    )
}
