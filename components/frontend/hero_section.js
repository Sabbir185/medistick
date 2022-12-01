import Link from 'next/link';
import React from 'react';

const HeroSection = () => {

    return (
        <div className='pt-4'>
            {/* top header */}
            <div className="top_header md:flex md:justify-between md:items-center">
                <div>
                    <img src="/img/Logo (2).png" alt="" srcset="" />
                </div>
                <div className="md:flex md:items-center md:gap-5 pt-3 md:pt-0">
                    <Link href="https://drive.google.com/file/d/1NURtJjkJP-VwRLljwQ88ttOJ5KyQqeb3/view">
                        <a style={{ textDecoration: "none" }} target='_blank' className="text-gray-700 hover:text-blue-500 whitespace-pre">Documentation</a>
                    </Link>
                    <Link href="https://codecanyon.net/item/medistick-doctor-consultation-flutter-template/41826879">
                        <a target='_blank'>
                            <img src="/img/Purchase.png" alt="" srcset="" />
                        </a>
                    </Link>
                </div>
            </div>

            {/* top header */}
            <div className="md:grid md:grid-cols-3 mt-16 md:gap-2 bg_abstract">
                <div className="col-span-2">
                    <p className="text-[48px] text-[#3A416F] font-semibold">Start your doctor consultation with <span
                        className="text-[#0095B6] font-semibold">Medistick</span></p>
                    <p className="">Being Healthy & Fit Isn&apos;t a Fad or a Trend, It&apos;s a Lifestyle.</p>

                    <div className="my-10 flex gap-8">
                        <Link href="https://drive.google.com/file/d/177rzkEX01U9bwAn-ZBy7M8UWU00kJlqi/view">
                            <a target='_blank'>
                                <button className="w-36 h-12 inline-block rounded-md bg-[#0095B6] hover:bg-cyan-700 text-white text-center shadow-2xl shadow-cyan-200">Download Apk</button>
                            </a>
                        </Link>
                        <Link href="https://codecanyon.net/item/medistick-doctor-consultation-flutter-template/41826879">
                            <a target='_blank'>
                                <button className="w-36 h-12 inline-block rounded-md bg-[#43BEC6] hover:bg-cyan-500 text-white text-center shadow-2xl shadow-cyan-200">Buy Now</button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/img/Mobile.png" alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;