"use client"
import Navbar from "@/components/Navbar";
export default function Bookings() {
    return (
        <div>
            <Navbar />
            <div className="page5 w-full flex flex-col justify-center items-center">
                <div className="text-center w-[325px]">
                    <div>Pricing</div>
                    <div className="text-3xl font-extrabold">Monthly plans are shown!</div>
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-36">
                    <div className="Page4LeftImg w-1/2 relative">
                        <img className="z-10 scale-75 absolute left-[50px] top-[450px] rotate-[-20deg]" src="/images/Star.png"></img>
                        <div className="h-96 w-96 relative left-[280px] top-[40px]">
                            <img className="z-0  scale-100 md:scale-125 absolute left-[-370px] sm:left-[-230px] md:left-[-260px] lg:left-[-160px] xl:left-[-90px] top-[40px] sm:top-[40px] md:top-[40px]" src="/images/BGspot.png"></img>
                            <img className="z-10 scale-100 md:scale-150 absolute left-[-390px] sm:left-[-270px] md:left-[-240px] lg:left-[-140px] xl:left-[-70px] top-[0px] sm:top-[0px] md:top-[-20px]" src="/images/Ellipses.png"></img>
                            <img className="z-20 scale-75 md:scale-90 absolute left-[-335px] sm:left-[-215px] md:left-[-195px] lg:left-[-95px] xl:left-[-25px] top-[50px] sm:top-[50px] md:top-[30px]" src="/images/Img6.png"></img>
                            <img className="z-20 scale-50 md:scale-75 absolute left-[-200px] sm:left-[-80px] md:left-[-20px] lg:left-[80px] xl:left-[150px] top-[-20px] sm:top-[-20px] md:top-[-85px]" src="/images/Img7.png"></img>
                            <img className="z-20 scale-75 md:scale-110 absolute left-[-165px] sm:left-[-45px] md:left-[15px] lg:left-[115px] xl:left-[185px] top-[205px] sm:top-[205px] md:top-[245px]" src="/images/Img8.png"></img>
                            <img className="z-20 scale-75 md:scale-100 absolute left-[-415px] sm:left-[-295px] md:left-[-285px] lg:left-[-185px] xl:left-[-115px] top-[10px] sm:top-[10px] md:top-[-55px]" src="/images/Img9.png"></img>
                            <img className="z-20 scale-75 md:scale-90 absolute left-[-415px] sm:left-[-295px] md:left-[-315px] lg:left-[-215px] xl:left-[-125px] top-[205px] sm:top-[205px] md:top-[225px]" src="/images/Img10.png"></img>
                            <div className="z-30 h-14 w-14 bg-red-500 scale-75 md:scale-100 rounded-full absolute left-[-130px] sm:left-[-10px] md:left-[10px] lg:left-[110px] xl:left-[180px] top-[180px] sm:top-[180px] md:top-[160px]" ></div>
                            <img className="z-40 scale-50 md:scale-75 absolute left-[-120px] sm:left-[0px] md:left-[20px] lg:left-[120px] xl:left-[190px] top-[192px] sm:top-[192px] md:top-[172px]" src="/images/colons.png"></img>

                        </div>
                    </div>
                    <div className="Page4RightContent w-full sm:w-2/5 px-4 sm:pl-12 xl:pl-28 sm:pr-8 xl:pr-36 py-28">
                        <div>
                            <div className="text-lg font-bold py-3" >Pricing: Very Reasonable</div>
                            <div className="text-[#808080] text-sm pb-3"> “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</div>
                        </div>
                        <img className="py-2" src="/images/MiniImgs.png"></img>
                        <div className="font-bold py-2">Nick Jonas</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
