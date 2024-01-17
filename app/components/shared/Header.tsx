"use client"

import React, { useState } from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import Drawer from './Drawer'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
export default function Header() {

    const [drawer, setDrawer] = useState(false)

    const handleDrawer = () => {
        setDrawer(!drawer)
    }

    return (
        <Wrapper style='bg-darkBg py-[40px]'>
            <header>
                {drawer &&
                    <RxCross2 className='text-white w-[30px] h-[30px] absolute top-[1rem] left-[1rem] z-20 cursor-pointer sm:hidden' onClick={handleDrawer} />}
                <ul className='flex mx-auto items-center justify-between max-w-[522px]'>
                    <li className='text-[16px] text-white font-[500] leading-[28px] text-center hidden sm:inline cursor-pointer'>Markets</li>
                    <li className='text-[16px] text-white font-[500] leading-[28px] text-center hidden sm:inline cursor-pointer'>Vaults</li>
                    <Image src="/images/logo.svg" width={140} height={35} alt='logo' />
                    <li className='text-[16px] text-white font-[500] leading-[28px] text-center hidden sm:inline cursor-pointer'>Tools</li>
                    <li className='text-[16px] text-white font-[500] leading-[28px] text-center hidden sm:inline cursor-pointer'>Docs</li>
                    {
                        !drawer &&
                        <GiHamburgerMenu className='text-white w-[30px] h-[30px] cursor-pointer sm:hidden' onClick={handleDrawer} />
                    }
                </ul>
                {drawer && <Drawer />
                }
            </header>
        </Wrapper>
    )
}
