import { Button } from "flowbite-react";
import Image  from "next/image";
import React from "react";
import { BiSolidCartAdd } from "react-icons/bi";
interface Product {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}
interface ParamProps {
  params: {
    id: number;
  };
}
async function getDetail(id: number): Promise<Product> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
}

export async function generateMetadata({ params }: ParamProps): Promise<any> {
  const id = params.id;
  try {
    const product = await getDetail(id);
    return {
      title: product?.title,
      price: product?.price,
      description: product.description,
      category: product?.category,
      images: [product.image], 

    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    throw error;
  }
}

async function ProductPage({ params }: ParamProps) {
  const id = params.id;
  try {
    const productDetail = await getDetail(id);
    return (
      <div className="flex justify-evenly mt-16 ">
        <div className="w-[600px] h-full">
          <p className="font-bold  text-sm uppercase ">{productDetail.category}</p>
          <h1 className="font-extrabold text-2xl">{productDetail.title}</h1>
          
          <p className="text-sm text-gray-900 font-bold leading-loose my-5">{productDetail.description}</p>
          <div className=" flex items-center space-x-4">
            <p className=" font-bold text-xl">${productDetail.price}</p>
            <div className="flex items-center mt-5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
                  <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
            </div>
          </div>
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
              AddCart
              <BiSolidCartAdd className="w-5 h-5 ml-1" />
            </Button>   
        </div>
        <div>
        <Image
            src={productDetail.image}
            alt={productDetail.title}
            width={300}
            height={400}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering product page:', error);
    return <div>Error fetching product details</div>;
  }
}

export default ProductPage;
