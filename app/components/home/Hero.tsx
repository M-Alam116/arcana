import React from 'react'
import Image from 'next/image'
export default function Hero() {
    return (
        <div className='bg-darkBg h-[calc(100vh-85px)] sm:h-[calc(100vh-110px)] flex flex-col justify-center items-center'>
            <div className="max-w-[1300px] m-auto px-4 md:px-8">
                <div className="absolute top-0 left-0 z-10 hidden lg:block">
                    <Image src="/images/heroleft.png" width={210} height={450} alt='' className='' />
                </div>
                <div className="text-white flex flex-col justify-center items-center gap-[1rem] lg:w-[70%] mx-auto">
                    <h1 className="text-center text-[40px] md:text-[64px] font-[600] leading-[50px] md:leading-[80px] bg-gradient-to-r from-white via-white to-[#99BEE5] bg-clip-text text-transparent">Intelligent DeFi Liqudity. Tailored for Solana.</h1>
                    <p className="text-[18px] md:text-[24px] font-[500] leading-[28px] md:leading-[36px] text-center lg:w-[60%]">Grow, manage, and sustain your crypto assets using our tools.</p>
                    <div className="mt-[1rem] flex items-center gap-[1rem]">
                        <button className='w-fit py-[10px] px-[16px] rounded-[12px] text-[16px] font-[500] bg-[#5099CC] text-white'>Launch App</button>
                        <button className='w-fit py-[10px] px-[16px] rounded-[12px] text-[16px] font-[500] bg-[#012A36] text-white'>Read Docs</button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 z-10 hidden lg:block">
                    <Image src="/images/heroright.png" width={230} height={500} alt='' className='' />
                </div>
            </div>
        </div>
    )
}
