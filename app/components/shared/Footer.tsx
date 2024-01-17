import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import { MdOutlineEmail } from "react-icons/md";
export default function Footer() {
    return (
        <Wrapper style='bg-[#071118] text-white py-[70px]'>
            <footer className='flex flex-col gap-[3rem]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
                    <div className="flex flex-col gap-[1.5rem]">
                        <Image src="/images/logo.svg" width={140} height={35} alt='logo' />
                        <div className="flex items-center gap-[2rem] ml-[10px]">
                            <MdOutlineEmail className='text-white w-[20px] h-[20px]' />
                            <MdOutlineEmail className='text-white w-[20px] h-[20px]' />
                            <MdOutlineEmail className='text-white w-[20px] h-[20px]' />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-[1rem]">
                        <div className="">
                            <h3 className='text-[16px] font-[500] leading-[28px] text-white mb-[1rem] opacity-50'>Company</h3>
                            <ul className='flex flex-col gap-[8px]'>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">About us</li>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">Blog</li>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">Media Kit</li>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">Careers</li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className='text-[16px] font-[500] leading-[28px] text-white mb-[1rem] opacity-50'>Products</h3>
                            <ul className='flex flex-col gap-[8px]'>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">Vaults</li>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">Markets</li>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">Trading Bot</li>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">API</li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className='text-[16px] font-[500] leading-[28px] text-white mb-[1rem] opacity-50'>Legal</h3>
                            <ul className='flex flex-col gap-[8px]'>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">Privacy Policy</li>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">Terms & Conditions</li>
                                <li className="text-[16px] font-[500] leading-[28px] text-white">Disclaimer</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[1rem]">
                    <div className="w-full h-[2px] bg-white opacity-20"></div>
                    <p className="text-[14px] text-white font-[500] leading-[24px] opacity-50">Arcana Labs LLC © All Rights Reserved {new Date().getFullYear()}</p>
                </div>
            </footer>
        </Wrapper>
    )
}
