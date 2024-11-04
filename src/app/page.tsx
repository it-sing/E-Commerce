"use client"
import { Suspense } from "react";
import LoadingComponent from "@/app/loading";
import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import Link from "next/link";
import { useState, useEffect } from "react";
import SlideSection from "@/components/slide/page";

async function fetchProducts(page: number) {
  const products = await fetch(`https://fakestoreapi.com/products?limit=4`, {
    cache: "no-store"
  });
  const res = await products.json();
  return res;
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const initialProducts = await fetchProducts(currentPage);
      setProducts(initialProducts);
    }
    fetchData();
  }, [currentPage]);

  return (
    <>
      <SlideSection/>
      <h2 className="mt-10 text-3xl font-bold text-center">Products</h2>
      <div className="mt-10 flex justify-center flex-wrap ">
          <div className=" mt-10 grid grid-cols-4 gap-6 max-md:grid-cols-1 max-md:ml-11  max-xl:grid-cols-2 max-2xl:grid-cols-3 ">
          <Suspense fallback={<LoadingComponent />}>
            {products && products.map((product: ProductType) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <CardComponent
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              </Link>
            ))}
          </Suspense>
          </div>
         
      </div>
    </>
  );
}
