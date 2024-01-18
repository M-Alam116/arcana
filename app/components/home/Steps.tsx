import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
export default function Steps() {
    return (
        <Wrapper style='py-[3rem] md:py-[5rem]'>
            <div className="flex flex-col gap-[4rem]">
                <div className="flex items-center justify-center gap-[3rem]">
                    <h2 className="text-[16px] font-[700] text-white">ARCANA</h2>
                    <div className="">
                    <Image src="/images/logo1.svg" width={220} height={223} alt='' />
                    </div>
                    <h2 className="text-[16px] font-[700] text-white">AWARDS</h2>
                </div>
                <div className="flex justify-center">
                    <Image src="/images/steps.svg" width={1000} height={272} alt='' />
                </div>
            </div>
        </Wrapper>
    )
}
