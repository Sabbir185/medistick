import Link from 'next/link';
import React from 'react';

const Section2 = () => {

    return (
        <section className="pt-32 relative">
            <div className="mb-10 -space-y-5">
                <p className="text-center text-[#0095B6] text-[32px] font-semibold">The awesome features of</p>
                <p className="text-center text-[#0095B6] text-[32px] font-semibold">this product</p>
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-5 justify-items-center">
                <div className="space-y-6">
                    <div className="flex justify-center md:justify-end items-center gap-8">
                        <p className="font-medium text-[18px] tracking-wide whitespace-pre">Super Speeds & Stability</p>
                        <p><img src="/img/Speed.png" className='h-14 w-14' alt="" srcset="" /></p>
                    </div>
                    <div className="flex justify-center md:justify-end  items-center gap-8">
                        <p className="font-medium text-[18px] tracking-wide whitespace-pre">Easily Customization
                        </p>
                        <p><img src="/img/Solution.png" className='h-14 w-14' alt="" srcset="" /></p>
                    </div>
                    <div className="flex justify-center md:justify-end  items-center gap-8">
                        <p className="font-medium text-[18px] tracking-wide whitespace-pre">Creative Design</p>
                        <p><img src="/img/Flexible.png" className='h-14 w-14' alt="" srcset="" /></p>
                    </div>
                </div>

                <div>
                    <div className='flex justify-center items-center'>
                    <img src="/phone2.png" alt="" srcset="" className='md:relative md:-top-20' />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex justify-center md:justify-start items-center gap-8">
                        <p><img src="/img/Payment.png" className='h-14 w-14' alt="" srcset="" /></p>
                        <p className="font-medium text-[18px] tracking-wide col-span-5 whitespace-pre">Secure Payment Integration</p>
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-8">
                        <p><img src="/img/Language.png" className='h-14 w-14' alt="" srcset="" /></p>
                        <p className="font-medium text-[18px] tracking-wide col-span-5 whitespace-pre">Multi Language Support</p>
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-8">
                        <p><img src="/img/Group 1000001692.png" className='h-14 w-14' alt="" srcset="" /></p>
                        <p className="font-medium text-[18px] tracking-wide col-span-5 whitespace-pre">Invitation Link</p>
                    </div>
                </div>
            </div>

            <img src="/vec.png" alt="" srcset="" className='absolute right-0 top-20 opacity-25'/>
        </section>
    );
};

export default Section2;