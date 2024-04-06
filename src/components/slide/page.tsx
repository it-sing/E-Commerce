import { Button } from "@nextui-org/react";
import Image from "next/image";

const SlideSection = () => {
  return (
    <section
      data-aos="zoom-in-up"
      className="bg-white max-sm:justify-center mt-5 lg:mt-10 flex flex-col lg:flex-row justify-between items-center py-8 px-4 md:px-12 lg:px-24"
    >

      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-2xl lg:text-4xl font-semibold leading-normal text-gray-800">
          Welcome to Our E-commerce Store
        </h1>
        <h5 className="text-base lg:text-xl mt-4 lg:mt-5 font-normal text-gray-600">
          Shopping online with us is more than just a transaction. It is a journey of discovery,
          where you can acquire not only products, but also knowledge, inspiration, and
          satisfaction. Our store offers a wide range of products carefully curated to cater to
          your needs and desires. Whether you are looking for fashion, electronics, home goods, or
          more, we are here to facilitate your learning and provide you with the best shopping
          experience possible.
        </h5>
      </div>

      {/* Slide Image */}
      <div className=" lg:w-1/2 lg:pl-8">
        <Image
          className="object-cover w-full h-96"
          src="/assets/Ecommerceslide.svg"
          alt="svg"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default SlideSection;
