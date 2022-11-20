import Link from "next/link";
import Head from "next/head";
import HeroSection from "../components/frontend/hero_section";
import Section2 from "../components/frontend/section2";
import Section3 from "../components/frontend/section3";
import Section4 from "../components/frontend/section4";
import Section5 from "../components/frontend/section5";
import Footer from "../components/frontend/footer";
import CenterMode from "../components/frontend/section6";


export default function Home() {

    return (
        <div>
            <Head>
                <title>Medistick</title>
            </Head>

            <div className="container">
                {/* top and hero section */}
                <HeroSection />

                {/* section 2 */}
                <Section2 />

                {/* section 3 */}
                <div className="h-10 md:h-0"></div>
                <Section3 />

                {/* section 4 */}
                <Section4 />

                {/* section 7 */}
                <CenterMode />

                {/* section 5 */}
                <Section5 />
            </div>

            {/* section 6 */}
            <div className="">
                <Footer />
            </div>
        </div>
    )
}
