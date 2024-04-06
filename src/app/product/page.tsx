"use client"
import { Suspense } from "react";
import LoadingComponent from "@/app/loading";
import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import Link from "next/link";
import { Pagination } from "flowbite-react";
import { useState, useEffect } from "react";

async function fetchProducts(page: number) {
  const products = await fetch(`https://store.istad.co/api/products/?limit=1&page=${page}`, {
    cache: "no-store"
  });
  const res = await products.json();
  return res.results;
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

  const onPageChange = async (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1 className="mt-10 text-3xl font-bold text-center">Product</h1>
      <div className="mt-10 flex justify-center flex-wrap ">
          <div className=" mt-10 grid grid-cols-4  gap-6  max-md:grid-cols-1  max-xl:grid-cols-2 max-2xl:grid-cols-3 ">
          <Suspense fallback={<LoadingComponent />}>
            {products && products.map((product: ProductType) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <CardComponent
                  image={product.image}
                  name={product.name}
                  desc={product.desc}
                  price={product.price}
                />
              </Link>
            ))}
          </Suspense>
          </div>
         
      </div>
      <div className=" flex justify-stard ml-28 mt-20 max-md:ml-11">
          <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
      </div>
    </>
  );
}
