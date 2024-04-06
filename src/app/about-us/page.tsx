import { NextPage } from "next";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "This is about LY STORE",
  keywords: ['store', 'ecommerce', 'sell']
};
const AboutPage: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Content for desktop and laptop */}
        <div className="hidden md:block col-span-1">
          <h1 className="text-2xl font-bold mb-4 text-center">About Us</h1>
          <div className="text-gray-950 font-medium bg-slate-50 p-10 rounded">
            <p className="mb-4">
              Welcome to LY STORE, your premier online marketplace for discovering and purchasing top-quality products. We are committed to providing you with a seamless shopping experience, offering an extensive selection of products to meet your diverse needs.
            </p>
            <p className="mb-4">
              At LY STORE, we are passionate about connecting customers with high-quality products that enhance their lives. Whether you are in search of stylish fashion items, innovative gadgets, or practical home essentials, we have everything you need to elevate your lifestyle.
            </p>
            <p className="mb-4">
              Our dedicated team strives to ensure your satisfaction by providing exceptional customer service and reliable product information. We are here to assist you every step of the way, from browsing our extensive collection to making secure transactions.
            </p>
            <p className="mb-4">
              Thank you for choosing LY STORE as your trusted online shopping destination. We are excited to serve you and look forward to being a part of your shopping journey. Start exploring our curated selection today and experience the convenience and quality that LY STORE has to offer!
            </p>
          </div>
        </div>
        {/* Content for phone */}
        <div className="md:hidden col-span-1">
          <h1 className="text-2xl font-bold mb-4 text-center">About Us</h1>
          <div>
            <p className="mb-4">
              Welcome to LY STORE, your premier online marketplace for discovering and purchasing top-quality products. We are committed to providing you with a seamless shopping experience, offering an extensive selection of products to meet your diverse needs.
            </p>
            <p className="mb-4">
              At LY STORE, we are passionate about connecting customers with high-quality products that enhance their lives. Whether you are in search of stylish fashion items, innovative gadgets, or practical home essentials, we have everything you need to elevate your lifestyle.
            </p>
          </div>
        </div>
        {/* Image section */}
        <div className="col-span-1 flex justify-center">
          <Image unoptimized width={600} height={400} src="/assets/logo.png" alt="About Us Photo" style={{ maxWidth: "100%" }} />
        </div>
      </div>
      </section>
      {/* <section className="text-center mt-16 lg:text-left lg:w-1/2 mb-8 lg:mb-0 lg:order-2">
        <h2 className="text-3xl text-center lg:text-4xl font-semibold mb-4 lg:mb-6">Subscribe to Our Newsletter</h2>
        <hr className="border-b-2 bg-gradient-to-r from-red-600 to-purple-600 mb-4 lg:mb-6" />
        <p className="text-lg lg:text-xl font-openSans mb-4 lg:mb-6">Stay updated with our latest news and updates. Enter your email to subscribe.</p>
        <form className="flex flex-col lg:flex-row justify-center items-center" action="#" method="post">
          <input className="newsletter-input border-gray-100 border-2 px-8 lg:px-16 py-3 lg:py-4 m-1 bg-gradient-to-r text-gray-300 font-semibold rounded-md  focus:outline-none  cursor-pointer transition-opacity duration-300" type="email" name="email" placeholder="Enter Your Email" />
          <button className="newsletter-btn px-6 lg:px-8 py-3 lg:py-4 m-1 bg-gradient-to-r from-red-600 to-purple-600 text-white font-semibold rounded-md outline-none focus:outline-none border-none cursor-pointer transition-opacity duration-300 hover:opacity-70" type="submit">Submit</button>
        </form>
    </section> */}
    </main>
  );
};

export default AboutPage;
