import Link from 'next/link';
import React from 'react';

const Footer = () => {

    return (
        <section className="mt-24 px-5 md:px-10 border-t" style={{ background: "rgba(0, 149, 182, 0.05)" }}>
            <div className='h-2 md:h-0'></div>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-3 pb-8">
                <div className="mt-10 md:flex md:justify-end">
                    <div className=''>
                        <img src="/img/Logo (2).png" className="mx-auto mb-4" alt="" srcset="" />
                        <div>
                            <p className="text-justify">This Medistick flutter app template is for a doctor consultant app. You can find your doctors here, make appointments with them, chat, voice call or video call with them.</p>
                            <p className="text-center text-[18px] text-[#0095B6] mt-2">Doctor Consultation Solution</p>
                            <div className="flex justify-center items-center mt-1 gap-2">
                                <p>Developed by</p>
                                <p><img src="/img/Appstick-Logo-3000x3000 1.png" alt="" className='' srcset="" /></p>
                                <p>Appstick</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:flex md:justify-end">
                    <div className="">
                        <div className="flex gap-3 items-center justify-center  mt-4">
                            <p><img src="/img/play-cricle.png" className="w-7" alt="" /></p>
                            <p className='text-base'>Intro Video</p>
                        </div>
                        <div className="flex justify-center mt-3 pt-2">
                            {/* <iframe width="250" height="200" src="https://www.youtube.com/embed/5I8oC1d4lh8" title="Deno v1.28: npm compatibility is stable" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                            <iframe width="250" height="200" src="https://www.youtube.com/embed/dkhpDp23KKQ" title="Medistick Flutter App Template | Doctor Consultant App | Appstick" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                {/* contact */}
                <div className="mt-10 md:flex md:justify-end">
                    <div>
                        <div className="flex gap-3 mb-2 mt-[25px]">
                            <img src="/img/Mask group (2).png" className="w-6 h-6" alt="" />
                            <p className="text-base">Contact Us</p>
                        </div>

                        <div className="ml-10 space-y-2 mt-3">
                            <div className="flex gap-3">
                                <p><img src="/img/call.png" className="w-6 h-6" alt="" /></p>
                                <p className="text-[14px]">+8801404049797</p>
                            </div>
                            <div className="flex gap-3">
                                <p><img src="/img/sms-tracking.png" className="w-6 h-6" alt="" /></p>
                                <p className="text-[14px]"><a href="mailto:info@appstick.com.bd" className='text-gray-700' style={{ textDecoration: 'none' }}>info@appstick.com.bd</a></p>
                            </div>
                            <div className="flex gap-3">
                                <p><img src="/img/global-search.png" className="w-6 h-6" alt="" /></p>
                                <p className="text-[14px]"><a href="https://appstick.com.bd/" target='_blank' rel="noreferrer" className='text-gray-700' style={{ textDecoration: 'none' }}>https://appstick.com.bd/</a></p>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <img src="/img/24-support.png" className="w-6 h-6" alt="" />
                            <p className="text-[16px]">Help and Support</p>
                        </div>
                        <div className="flex gap-3 ml-14">
                            <a href="https://wa.me/+8801404049797" target='_blank' rel="noreferrer">
                                <img src="/img/whatsapp_line.png" className="w-8 h-8" alt="" srcset="" />
                            </a>
                            <a href="https://join.skype.com/invite/vAanTx5sbAUD" target='_blank' rel="noreferrer">
                                <img src="/img/Frame.png" className="w-7 h-7" alt="" srcset="" />
                            </a>
                        </div>

                    </div>
                </div>

                <div className="mt-10 flex items-center justify-center">
                    <Link href="https://drive.google.com/file/d/177rzkEX01U9bwAn-ZBy7M8UWU00kJlqi/view">
                        <a target='_blank'>
                            <button className="w-36 h-12 inline-block rounded-md bg-[#0095B6] hover:bg-cyan-700 text-white text-center shadow-2xl shadow-cyan-200">
                                Download Apk
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Footer;