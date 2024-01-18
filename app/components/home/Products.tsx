import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import Banner from './Banner';
export default function Products() {
    return (
        <Wrapper style='relative'>
            <div className="w-[90%] absolute top-[-2.3rem] lg:bottom-[-14.4rem] left-1/2 transform -translate-x-1/2">
                <Banner />
            </div>
            <div className="absolute inset-0 z-[-1]" style={{ backgroundImage: `url("/images/productbg.svg")`, opacity: 0.4, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
            <div className="py-[5rem] md:py-[7rem]">
                <h2 className="text-[30px] sm:text-[34px] text-white font-[500] leading-[42px] sm:leading-[48px] text-center max-w-[400px] mx-auto mb-[2rem] md:mb-[3rem]">Unparalleled liquidity. Rock solid products.</h2>
                <div className="flex flex-col gap-[1rem]">
                    <div className="w-full rounded-[32px] flex flex-col md:flex-row justify-between" style={{ backgroundImage: 'linear-gradient(255.71deg, #5099CC 0.96%, rgba(44, 85, 114, 0) 78.36%)' }}>
                        <div className="lg:w-[40%] flex flex-col gap-[10px] justify-center p-[2rem]">
                            <h2 className="text-[28px] sm:text-[34px] font-[600] text-white leading-[40px] sm:leading-[48px]">Token Vaults</h2>
                            <p className="text-[14px] font-[500] leading-[26px] text-white opacity-70">Lorem ipsum dolor sit amet consectetur. In magnis viverra nec mauris tempus feugiat platea et porttitor. In ultrices sem nulla massa. Mauris aliquet dis sit pulvinar proin facilisi.</p>
                            <div className="flex items-center gap-[1rem] mt-[1rem]">
                                <p className="text-[16px] font-[500] text-[#5099CC]">Explore Vaults</p>
                                <FaArrowRightLong className='text-[#5099CC]' />
                            </div>
                        </div>
                        <div className="relative hidden lg:flex justify-end">
                            <Image src="/images/tokenbottom.svg" width={4000} height={400} alt='' className='w-full h-full rounded-br-[32px]' />
                            <Image src="/images/tokenupper.png" width={400} height={380} alt='' className='absolute right-0 top-0 w-full h-full' />
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row gap-[1rem]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem] bg-[#000] rounded-[32px] lg:w-[58%]">
                            <div className="hidden lg:flex">
                                <Image src="/images/analytics.svg" width={270} height={400} alt='' className='rounded-l-[32px] h-full' />
                            </div>
                            <div className="flex flex-col gap-[10px] justify-center p-[2rem]">
                                <h2 className="text-[28px] sm:text-[34px] font-[600] text-white leading-[40px] sm:leading-[48px]">Data Analytics</h2>
                                <p className="text-[14px] font-[500] leading-[26px] text-white opacity-70">Lorem ipsum dolor sit amet consectetur. In magnis viverra nec mauris tempus feugiat platea et porttitor. In ultrices sem nulla massa. Mauris aliquet dis sit pulvinar proin facilisi.</p>
                                <div className="flex items-center gap-[1rem] mt-[1rem]">
                                    <p className="text-[16px] font-[500] text-white">See Markets</p>
                                    <FaArrowRightLong className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#091620] lg:w-[42%] grid lg:grid-cols-3 rounded-[32px] relative">
                            <div className="p-[2rem] lg:col-span-2 flex flex-col gap-[1rem]">
                                <h2 className="text-[28px] sm:text-[34px] font-[600] text-white leading-[40px] sm:leading-[48px]">Trading Bot</h2>
                                <p className="text-[14px] font-[500] leading-[26px] text-white opacity-70">Lorem ipsum dolor sit amet consectetur. In magnis viverra nec mauris tempus feugiat platea et porttitor. In ultrices sem nulla massa. Mauris aliquet dis sit pulvinar proin.</p>
                                <button className='mt-[1rem] w-fit py-[10px] px-[14px] rounded-[12px] bg-[#5099CC14] text-[#5099CC]'>Start your own</button>
                            </div>
                            <div className="hidden lg:flex">
                                <Image src="/images/bot.svg" width={150} height={285} alt='' className='absolute right-0 bottom-0 rounded-br-[32px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
