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
        <Wrapper style='bg-darkBg py-[25px] sm:py-[40px]'>
            <header>
                {drawer &&
                    <RxCross2 className='text-white w-[30px] h-[30px] absolute top-[2rem] left-[1rem] z-20 cursor-pointer sm:hidden' onClick={handleDrawer} />}
                <ul className='flex mx-auto items-center justify-between max-w-[522px]'>
                    <li className='text-[16px] text-white font-[500] leading-[28px] text-center hidden sm:inline cursor-pointer hover:border-b-2 hover:border-white'>Markets</li>
                    <li className='text-[16px] text-white font-[500] leading-[28px] text-center hidden sm:inline cursor-pointer hover:border-b-2 hover:border-white'>Vaults</li>
                    <Image src="/images/logo.svg" width={140} height={35} alt='logo' />
                    <li className='text-[16px] text-white font-[500] leading-[28px] text-center hidden sm:inline cursor-pointer hover:border-b-2 hover:border-white'>Tools</li>
                    <li className='text-[16px] text-white font-[500] leading-[28px] text-center hidden sm:inline cursor-pointer hover:border-b-2 hover:border-white'>Docs</li>
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
