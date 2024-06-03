"use client"
import Navbar from "@/components/Navbar";
export default function Blog() {
    return (
        <div className="overflow-hidden">
            <Navbar/>
            <div className="page2 w-full flex flex-col md:flex-row py-24 justify-between mb-[500px] md:mb-36">
                <div className="Page2LeftImg w-full md:w-1/2 relative mb-10 md:mb-0">
                    <img className="z-10 scale-75 absolute left-[40px] md:left-[80px] top-[5px] rotate-[10deg]" src="/images/Star.png" alt="Star" />
                    <img className="z-0 scale-110 absolute left-[10%] md:left-[120px] lg:left-[150px] xl:left-[190px] top-[550px] md:top-[-60px] rotate-[200deg]" src="/images/BGspot.png" alt="BGspot" />
                    <img className="z-10 scale-90 absolute left-[0%] md:left-[60px] lg:left-[90px] xl:left-[130px] top-[500px] sm:top-[400px] md:top-[-140px]" src="/images/Ellipses.png" alt="Ellipses" />
                    <img className="z-20 scale-90 absolute left-[10%] sm:left-[20%] md:left-[25%] lg:left-[250px] xl:left-[290px] top-[500px] md:top-[-40px] rotate-[15deg]" src="/images/Phone1.png" alt="Phone1" />
                </div>
                <div className="Page2RightContent w-full px-8 md:w-1/2 md:pl-14 lg:pl-28 md:pr-18 lg:pr-36 relative py-10">
                    <img className="-z-10 absolute left-[350px] md:left-[460px] top-[-80px] md:top-[-60px]" src="/images/BGspot.png" alt="BGspot" />
                    <div className="text-[#ff5455]">FEATURES</div>
                    <div className="text-3xl md:text-4xl font-bold pb-4">uifry premium</div>
                    <div>
                        <div className="flex gap-2 py-3">
                            <img src="images/BulletStar.png" alt="BulletStar" />
                            <span className="font-bold text-sm">budgeting intervals</span>
                        </div>
                        <div className="text-[#808080] text-sm pb-3">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
                    </div>
                    <div>
                        <div className="flex gap-2 py-3">
                            <img src="images/Bulletcube1.png" alt="Bulletcube1" />
                            <span className="font-bold text-sm">budgeting intervals</span>
                        </div>
                        <div className="text-[#808080] text-sm pb-3">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
                    </div>
                    <div>
                        <div className="flex gap-2 py-3">
                            <img src="images/Bulletcube2.png" alt="Bulletcube2" />
                            <span className="font-bold text-sm">budgeting intervals</span>
                        </div>
                        <div className="text-[#808080] text-sm">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
