import Link from 'next/link';
import React from 'react';

const Section4 = () => {

    return (
        <section className="pt-10">
            <div className="md:grid md:grid-cols-2">
                <div className="md:flex md:items-center md:justify-center">
                    <div>
                        <p className="text-[32px] font-semibold text-[#3A416F]">Simple app code structure</p>
                        <p className="text-[16px] mb-7">Can be easily integrated with any backend solution.</p>
                        <hr />
                        <div className="flex gap-3 mt-7">
                            <img src="/startGolden.png" className='h-6 w-6' alt="" srcset="" />
                            <p className="text-[15px]">Clean Code</p>
                        </div>
                        <div className="flex gap-3">
                            <img src="/startGolden.png" className='h-6 w-6' alt="" srcset="" />
                            <p className="text-[15px]">Well Documented Code</p>
                        </div>
                        <div className="flex gap-3">
                            <img src="/startGolden.png" className='h-6 w-6' alt="" srcset="" />
                            <p className="text-[15px]">Easily Integrate with Any Backend Solution</p>
                        </div>
                        <div className="flex gap-3">
                            <img src="/startGolden.png" className='h-6 w-6' alt="" srcset="" />
                            <p className="text-[15px]">Able to Use Any State Management Solution</p>
                        </div>
                        <div className="flex gap-3">
                            <img src="/startGolden.png" className='h-6 w-6' alt="" srcset="" />
                            <p className="text-[15px]">Flutter 3.3.8</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img src="/img/phone45.png" className="h-96 md:h-[80%]" alt="" srcset="" />
                </div>
            </div>
        </section>
    );
};

export default Section4;