"use client"
export default function Bookings() {
    return (
      <div>
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
