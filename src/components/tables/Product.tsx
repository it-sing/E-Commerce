"use client";
import LoadingComponent from "@/app/loading";
import { ProductType } from "@/types/product";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import DataTable, { TableColumn } from "react-data-table-component";
import { IoEllipsisHorizontal } from "react-icons/io5";
import Image from "next/image";
import axios from "axios";

const customStyles = {
  rows: {
    style: {
      minHeight: "100px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontWeight: "bold",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

const ProductTable = () => {
  const [getProduct, setProduct] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ProductType[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [ProductDetail, setProductDetail] = useState({} as ProductType);
  const [products, setProducts] = useState<ProductType[]>([]);

  const deleteProduct = async (productId: number) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${productId}`);
      setProducts(products.filter((product) => product.id !== productId));
      setFilter(filter.filter((product) => product.id !== productId)); // Update filtered products as well
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };

  const handleDetail = (value: ProductType) => {
    onOpen();
    setProductDetail(value);
  };

  const columnsData: TableColumn<ProductType>[] = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category ?? "",
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price || 0,
      sortable: true,
    },
    {
      name: "Thumbnail",
      cell: (row) => (
        <img src={row.image} width={80} height={80} alt="Product" />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <Dropdown>
          <DropdownTrigger>
            <button>
              <IoEllipsisHorizontal />
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="detail" onClick={() => handleDetail(row)}>
              View Detail
            </DropdownItem>
            {/* <DropdownItem
              key="edit"
              onClick={() => {
                window.location.href = `/dashboard/update-product/${row.id}`;
              }}
            >
              Edit
            </DropdownItem> */}
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              onClick={() => row.id !== undefined && deleteProduct(Number(row.id))}
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
        setFilter(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setIsLoading(false); // Stop loading after data is fetched
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilter(getProduct);
      return;
    }
    const result = getProduct.filter((item) =>
      item.title?.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(result);
  }, [getProduct, search]);

  const paginationComponentOptions = {
    rowsPerPageText: "Row of page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };

  return (
    <div className="w-full">
      <div className="justify-start flex">
        <Link
          href="/dashboard/create-product"
          className="text-sm my-5 px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 border-b-medium text-white"
        >
          Create Product
        </Link>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalHeader className="flex text-2xl flex-col gap-1">
              ProductDetail
            </ModalHeader>
            <ModalBody>
              <p className="text-lg font-bold text-gray-900">
                {ProductDetail.title}
              </p>
              <p className="text-sm text-gray-900">{ProductDetail.description}</p>
              <Image
                src={ProductDetail.image ?? ""}
                width={500}
                height={300}
                alt="Product"
              />
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
      <DataTable
        progressPending={isLoading}
        columns={columnsData}
        fixedHeader
        fixedHeaderScrollHeight="500px"
        pagination
        subHeader
        subHeaderComponent={
          <input
            className="border-[1px] px-3 py-2 w-1/2 mb-5 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        paginationComponentOptions={paginationComponentOptions}
        progressComponent={<LoadingComponent />}
        customStyles={customStyles}
        data={filter}
      />
    </div>
  );
};

export default ProductTable;
