import Navbar from '/components/Navbar';
export default function Home() {
  return (
    <div className="capitalize w-screen overflow-x-hidden">
      <div className="page1 w-full">
        <Navbar />
        <div className="Page1Body flex flex-col md:flex-row justify-between mb-[500px] md:mb-0">
          <div className="Page1LeftContent capitalize w-full md:w-1/2 px-8 md:px-16 lg:px-20 md:pl-16 lg:pl-36 py-8 md:py-16 relative">
            <img className="z-10 scale-75 absolute left-[30px] md:left-[60px] top-[-10px] rotate-[-30deg]" src="/images/Star.png" alt="Star" />
            <img className="z-10 scale-75 absolute left-[237.5px] md:left-[400px] xl:left-[175px] top-[275px] md:top-[400px] xl:top-[350px] rotate-[-30deg]" src="/images/Star.png" alt="Star" />
            <img className="-z-10 absolute left-[185px] md:left-[10px] top-[-80px] md:top-[-80px]" src="/images/BGspot.png" alt="BGspot" />
            <div className="text-3xl md:text-4xl lg:text-5xl my-2">Make The Best Financial Decisions</div>
            <div className="text-[#808080]">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</div>
            <div className="flex flex-row items-center gap-4 md:gap-8 my-6">
              <button className="bg-black text-white px-4 md:px-6 py-3 md:py-4 flex gap-3 items-center rounded" type="button">
                <span>Get Started</span>
                <img src="/images/rightarrow.png" alt="Right Arrow" />
              </button>
              <div className="flex items-center gap-4">
                <img src="/images/Play.png" alt="Play" />
                <div>Watch Video</div>
              </div>
            </div>
            <div>
              <img src="/images/stripe.png" alt="Stripe" />
            </div>
          </div>
          <div className="Page1RightImg w-full md:w-1/2 relative mt-8 md:mt-0">
            <img className="z-10 absolute left-[620px] top-[-30px] md:top-[-60px]" src="/images/Star.png" alt="Star" />
            <img className="z-10 scale-75 absolute left-[60px] md:left-[100px] lg:left-[200px] top-[250px] md:top-[500px] rotate-[10deg]" src="/images/Star.png" alt="Star" />
            <img className="z-0 absolute left-[95px] md:left-[90px] lg:left-[190px] top-[80px] md:top-[160px]" src="/images/BGspot.png" alt="BGspot" />
            <img className="z-0 scale-75 absolute left-[15px] md:left-[10px] lg:left-[110px] top-[175px] md:top-[290px] rotate-[180deg]" src="/images/BGspot.png" alt="BGspot" />
            <img className="z-10 lg:scale-90 absolute left-[0px] md:left-[0px] lg:left-[40px] top-[-120px] sm:top-[-155px] md:top-[-55px] lg:top-[-90px]" src="/images/Ellipses.png" alt="Ellipses" />
            <img className="z-20 scale-75 lg:scale-90 absolute left-[20%] sm:left-[35%] md:left-[190px] lg:left-[290px] top-[-55px] md:top-[90px]" src="/images/Phone1.png" alt="Phone1" />
            <img className="z-30 scale-75 lg:scale-90 absolute left-[5%] sm:left-[20%] md:left-[70px] lg:left-[170px] top-[-85px] md:top-[30px]" src="/images/Phone2.png" alt="Phone2" />
            <img className="z-40 scale-75 lg:scale-90 absolute left-[-10%] sm:left-[5%] md:left-[-50px] lg:left-[50px] top-[-105px] md:top-[-30px]" src="/images/Phone1.png" alt="Phone1" />
          </div>
        </div>

      </div>

      <div className="page2 w-full flex flex-col md:flex-row justify-between mb-[500px] md:mb-36">
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
              <img src="images/Bulletstar.png" alt="Bulletstar" />
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


      <div className="page3 w-full flex flex-col md:flex-row justify-between mb-[500px] md:mb-48">
        <div className="Page3LeftContent w-full px-8 md:w-1/2 md:pl-14 lg:pl-28 md:pr-10 lg:pr-36 relative py-10">
          <div className="text-[#ff5455]">ADVANTAGE</div>
          <div className="text-3xl md:text-4xl font-bold pb-4">why choose Uifry?</div>
          <div>
            <div className="flex gap-2 py-3 items-center">
              <img className="scale-90" src="images/Bell.png" alt="Bell" />
              <span className="text-lg font-bold">clever notifications</span>
            </div>
            <div className="text-[#808080] text-sm pb-3">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
          </div>
        </div>
        <div className="Page3RightImg w-full md:w-1/2 relative mt-8 md:mt-0">
          <img className="z-10 scale-90 absolute right-[25px] md:right-[50px] top-[5px]" src="/images/Star.png" alt="Star" />
          <img className="z-0 absolute left-[45px] md:left-[90px] top-[15px] md:top-[30px] rotate-[200deg]" src="/images/BGspot.png" alt="BGspot" />
          <img className="z-10 scale-90 absolute left-[0%] md:left-[0%] top-[-10%] sm:top-[-100px] md:top-[-60px] xl:top-[-140px]" src="/images/Ellipses.png" alt="Ellipses" />
          <img className="z-20 scale-90 absolute left-[5%] sm:left-[20%] md:left-[10%] lg:left-[190px] top-[-25px] md:top-[-50px] rotate-[15deg]" src="/images/Phone2.png" alt="Phone2" />
        </div>
      </div>


      <div className="page4 w-full flex flex-col md:flex-row justify-between mb-[600px] md:mb-36">
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
              <span className="text-lg font-bold">fully customizable</span>
            </div>
            <div className="text-[#808080] text-sm pb-3">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
          </div>
        </div>
      </div>


      <div className="page5 w-full flex flex-col justify-center items-center">
        <div className="text-center w-[325px]">
          <div>TESTIMONIAL</div>
          <div className="text-3xl font-extrabold">what our users say about us?</div>
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
              <div className="text-lg font-bold py-3" >the best financial accounting app ever!</div>
              <div className="text-[#808080] text-sm pb-3"> “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</div>
            </div>
            <img className="py-2" src="/images/MiniImgs.png"></img>
            <div className="font-bold py-2">Nick Jonas</div>
          </div>
        </div>
      </div>

      <div className="page-6 w-4/5 m-auto mb-40 relative">
        <div className="text-[#ff5455]">FAQ</div>
        <div className="text-2xl md:text-4xl font-bold w-4/5 lg:w-2/5 pb-8">Frequently asked questions</div>
        <img src="images/star.png" className="absolute top-[30px] right-[20px] sm:right-[100px] xl:right-[480px]"></img>
        <div className="grid grid-rows-6 md:grid-rows-3 grid-flow-col gap-2">
          <div className="bg-[#ff5455] text-white rounded-md py-6 px-4">
            <div className="text-xl font-bold">the best financial accounting app ever!</div>
            <div>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div className="rounded-md py-6 px-4">
            <div className="text-xl font-bold">the best financial accounting app ever!</div>
            <div>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div className="bg-[#ff5455] text-white rounded-md py-6 px-4">
            <div className="text-xl font-bold">the best financial accounting app ever!</div>
            <div>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div className="rounded-md py-6 px-4">
            <div className="text-xl font-bold">the best financial accounting app ever!</div>
            <div>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div className="bg-[#ff5455] text-white rounded-md py-6 px-4">
            <div className="text-xl font-bold">the best financial accounting app ever!</div>
            <div>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
          <div className="rounded-md py-6 px-4">
            <div className="text-xl font-bold">the best financial accounting app ever!</div>
            <div>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</div>
          </div>
        </div>
      </div>

      <div className="page-7 w-full mb-40 relative">
        <img src="/images/star.png" className="absolute z-10 top-[120px] left-[60px] rotate-[-20deg]"></img>
        <img src="/images/star.png" className="absolute right-[90px] top-[-90px]"></img>
        <img src="/images/BGspot.png" className="absolute top-[-160px]"></img>
        <div className="w-full md:py-32 pt-96 pb-32 xl:w-2/3 bg-black m-auto relative rounded-md overflow-hidden">
          <div className="text-white px-4 lg:px-28 w-full md:w-[300px] lg:w-[550px]">
            <div className="text-3xl font-extrabold">ready to get started?</div>
            <div className="text-sm my-3">Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</div>
            <button type="button" className="bg-white text-black flex gap-4 items-center py-3 px-4 rounded">
              <span>Download App</span>
              <img src="/images/apple.png"></img>
            </button>
          </div>
          <img className="absolute scale-75 top-[-20px] right-[-63px] z-20" src="/images/phones.png"></img>
          <img src="/images/Ellipses2.png" className="absolute bottom-[0px]"></img>
          <img src="/images/Ellipses3.png" className="scale-75 z-10 absolute top-[-58px] right-[-30px]"></img>
          <img src="/images/BGspot.png" className="scale-75 absolute top-[30px] right-[-150px] rotate-[210deg]"></img>
          <img src="/images/star.png" className="invert scale-90 absolute top-[30px] right-[290px]"></img>
          <img src="/images/star.png" className="invert scale-75 absolute bottom-[90px] left-[390px] rotate-[-20deg]"></img>
        </div>
      </div>

      <div className="page8 w-full">
        <div className="flex justify-between md:justify-around flex-wrap gap-6 w-4/5 m-auto mb-20">
          <ul className="flex flex-col gap-3 md:items-start">
            <li><img src="/images/logo.png" /></li>
            <li className="flex items-center gap-2"><img src="/images/mail.png"></img>help@frybix.com</li>
            <li className="flex items-center gap-2"><img src="/images/call.png"></img>+1 234 456 678 89</li>
          </ul>
          <ul className="flex flex-col gap-3 text-center lg:items-start">
            <li className="text-3xl">Links</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Bookings</li>
            <li>Blog</li>
          </ul>
          <ul className="flex flex-col gap-3 text-center lg:items-start">
            <li className="text-3xl">Legal</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
          <ul className="flex flex-col gap-3 text-center lg:items-start">
            <li className="text-3xl">Product</li>
            <li>Take Tour</li>
            <li>Live Chat</li>
            <li>Reviews</li>
          </ul>
          <ul className="flex flex-col gap-3 text-center lg:items-start">
            <li className="text-3xl">Newsletter</li>
            <li>Stay Up To Date</li>
            <li>
              <input type="email" id="email" placeholder="Your email" className="px-5 py-3 border-[0.5px]"></input>
              <input type="submit" value="Subscribe" className="bg-black px-5 py-3 my-2 text-white rounded" />
            </li>
          </ul>
        </div>
        <hr />
        <div className="text-center my-10">Copyright 2022 uifry.com all rights reserved</div>
      </div>
    </div>
  );
}
