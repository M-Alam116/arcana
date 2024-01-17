import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
export default function Banner() {
    return (
        <Wrapper style='bg-[#292D3F7A] py-[3rem]'>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[2rem]">
                <Image src="/images/pyth.png" width={182} height={62} alt='' />
                <Image src="/images/openbook.png" width={172} height={32} alt='' />
                <Image src="/images/phoenix.png" width={227} height={43} alt='' />
            </div>
        </Wrapper>
    )
}
