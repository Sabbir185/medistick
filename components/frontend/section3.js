import Link from 'next/link';
import React from 'react';

const Section3 = () => {

    return (
        <section className="pt-10 relative">
            <div className="md:grid md:grid-cols-2">
                <div className="flex justify-center items-center">
                    <img src="/img/phon12.png" className="h-96 md:h-[80%] pb-10 md:pb-0" alt="" srcset="" />
                </div>
                <div className="md:flex md:items-center md:justify-center">
                    <div>
                        <p className="text-[32px] text-[#3A416F] font-semibold">Manage your business properly</p>
                        <p className="text-[16px] mb-7">It is very convenient for customers to use. </p>
                        <hr />
                        <div className="mt-7 flex gap-3">
                            <img src="img/Group 52.png" className='h-6 w-6' alt="" srcset="" />
                            <p className="text-[15px]">Easy Installation Process </p>
                        </div>
                        <div className="flex gap-3">
                            <img src="img/Group 52.png" className='h-6 w-6' alt="" srcset="" />
                            <p className="text-[15px]">Easy Appointment System</p>
                        </div>
                        <div className="flex gap-3">
                            <img src="img/Group 52.png" className='h-6 w-6' alt="" srcset="" />
                            <p className="text-[15px]">Easy Payment System</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/heart.png" alt="" srcset="" className='absolute right-0 top-20 opacity-20'/>
        </section>
    );
};

export default Section3;