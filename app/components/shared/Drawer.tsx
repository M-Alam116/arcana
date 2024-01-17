import React from 'react'

export default function Drawer() {
    return (
        <div className='absolute top-0 right-0 z-10 darkBg h-screen w-full flex items-center justify-center sm:hidden'>
            <ul className='flex flex-col gap-[2rem]'>
                <li className='text-[20px] font-[500] leading-[28px] text-white cursor-pointer'>Markets</li>
                <li className='text-[20px] font-[500] leading-[28px] text-white cursor-pointer'>Vaults</li>
                <li className='text-[20px] font-[500] leading-[28px] text-white cursor-pointer'>Tools</li>
                <li className='text-[20px] font-[500] leading-[28px] text-white cursor-pointer'>Docs</li>
            </ul>
        </div>
    )
}
