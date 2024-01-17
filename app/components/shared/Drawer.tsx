import React from 'react'

export default function Drawer() {
    return (
        <div className='absolute top-0 right-0 bg-red-500 z-10 h-screen w-full flex items-center justify-center sm:hidden'>
            <ul className='flex flex-col gap-[2rem]'>
                <li className='text-[20px] font-[500] leading-[28px]'>Markets</li>
                <li className='text-[20px] font-[500] leading-[28px]'>Vaults</li>
                <li className='text-[20px] font-[500] leading-[28px]'>Tools</li>
                <li className='text-[20px] font-[500] leading-[28px]'>Docs</li>
            </ul>
        </div>
    )
}
