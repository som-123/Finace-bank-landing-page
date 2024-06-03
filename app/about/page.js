"use client"
import Navbar from "@/components/Navbar";
export default function About() {
    return (
        <div>
            <Navbar />
            <div className="page4 w-full flex flex-col md:flex-row justify-between py-24 mb-[600px] md:mb-36">
                <div className="Page4LeftImg w-full md:w-1/2 relative mb-10 md:mb-0">
                    <img className="z-10 scale-75 absolute right-[-20px] md:right-[-40px] top-[-20px] md:top-[-50px] rotate-[-20deg]" src="/images/Star.png" alt="Star" />
                    <img className="z-0 scale-110 absolute left-[5%] md:left-[100px] xl:left-[250px] top-[350px] md:top-[60px] rotate-[200deg]" src="/images/BGspot.png" alt="BGspot" />
                    <img className="z-10 scale-90 absolute left-[0%] md:left-[60px] xl:left-[130px] top-[350px] sm:top-[200px] md:top-[-30px] xl:top-[-140px]" src="/images/Ellipses.png" alt="Ellipses" />
                    <img className="z-20 scale-90 absolute left-[5%] sm:left-[20%] md:left-[100px] xl:left-[290px] top-[300px] md:top-[-40px] rotate-[15deg]" src="/images/Phone1.png" alt="Phone1" />
                </div>
                <div className="Page4RightContent w-full px-8 md:w-1/2 md:pl-14 lg:pl-28 md:pr-10 lg:pr-36 relative py-10 md:py-28">
                    <div>
                        <div className="flex gap-2 py-3 items-center">
                            <img className="scale-90" src="images/Pg4Star.png" alt="Pg4Star" />
                            <span className="text-lg font-bold">About Us</span>
                        </div>
                        <div className="text-[#808080] text-sm pb-3">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}