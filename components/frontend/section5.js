import Link from 'next/link';
import React from 'react';

const Section5 = () => {

    return (
        <section className="pt-10">
            <div className="md:grid md:grid-cols-2 md:gap-10 h-full w-full video_section border px-5 rounded-lg pt-10">
                <div className="flex justify-center items-center py-3">
                    <div className="text-[#FFFFFF] mt-5">
                        <h1 className="text-[32px] pb-5 font-semibold text-[#FFFFFF]">How App Works?</h1>
                        <div className="md:flex md:items-center gap-10 mb-10">
                            <div className="w-16 h-16 border border-white rounded-full flex justify-center items-center text-center">
                                <span className="text-center text-[26px]">1</span>
                            </div>
                            <div className="space-y-3">
                                <p className="text-[26px]">Install the App</p>
                                <p className="text-[16px]">Download and install the App</p>
                            </div>
                        </div>

                        <div className="md:flex md:items-center gap-10 mb-10">
                            <div className="w-16 h-16 border border-white rounded-full flex justify-center items-center text-center">
                                <span className="text-center text-[26px]">2</span>
                            </div>
                            <div className="space-y-3">
                                <p className="text-[26px]">Login your account</p>
                                <p className="text-[16px]">Sign up and login into your acccount</p>
                            </div>
                        </div>

                        <div className="md:flex md:items-center gap-10 mb-10">
                            <div className="w-16 h-16 border border-white rounded-full flex justify-center items-center text-center">
                                <span className="text-[26px]">3</span>
                            </div>
                            <div className="space-y-3">
                                <p className="text-[26px]">Enjoy the awesome features!</p>
                                <p className="text-[16px]">Now enjoy the most exciting features</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="bg-white rounded-[20px] flex justify-center items-center h-full w-full md:h-[450px] md:w-[450px] border">
                        <iframe width="400" height="400" src="https://www.youtube.com/embed/5I8oC1d4lh8" title="Deno v1.28: npm compatibility is stable" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className='h-10 md:h-0'></div>
            </div>
        </section>
    );
};

export default Section5;