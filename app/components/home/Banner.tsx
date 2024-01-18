import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
export default function Banner() {
    return (
        <Wrapper style='bg-[#212939] py-[1.5rem] w-full md:w-[445px] rounded-[20px] mx-auto'>
            <div className="flex justify-center items-center gap-[2rem]">
                <Image src="/images/pyth.png" width={100} height={34} alt='' />
                <Image src="/images/openbook.png" width={140} height={27} alt='' />
                <Image src="/images/phoenix.png" width={126} height={24} alt='' />
            </div>
        </Wrapper>
    )
}
