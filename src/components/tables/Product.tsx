"use client";
import LoadingComponent from "@/app/loading";
import { ProductType } from "@/types/product";
import React from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { IoEllipsisHorizontal } from "react-icons/io5";
import Image from "next/image";
import { link } from "fs";
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

  const [getProduct, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [ProductDetail, setProductDetail] = useState({} as ProductType)

  function handleDetail(value: ProductType) {
    onOpen();
    setProductDetail(value)
  }
  const columnsData: TableColumn<ProductType>[] = [
    {
      name: "Title",
      selector: (row) => row.name,
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
      selector: (row): any => (
        <img src={row.image} width={80} height={80} alt="Product" />
      ),
    },

    {
      name: "Action",
      cell: (row) => {
        return (
          <div>
            <Dropdown>
              <DropdownTrigger>
                <button>
                  <IoEllipsisHorizontal />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="detail"
                  onClick={()=> handleDetail(row)}
                >
                  View Detail
                </DropdownItem>

                <DropdownItem  
                  key="edit" 
                  onClick={(id) =>{window.location.href = `/dashboard/update-product/${id}`}}
                >
                  Edit
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      },
    },
  ];
useEffect(() => {
  async function fetchData() {
    const data = await fetch("https://store.istad.co/api/products")
    const response = await data.json();
    setProduct(response.results);
      setFilter(response.results);
  }
  fetchData();
  setIsLoading(false);
}, []);

  useEffect(() => {
    if (!search) {
      setFilter(getProduct);
      return;
    }
    const result = getProduct.filter((item: ProductType) => {
      return item.name?.toLowerCase().includes(search.toLowerCase());
    });

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
      <div className="justify-start flex f">
        <Link href ="/dashboard/create-product" className=" text-sm my-5 px-3 py-2.5 rounded-xl bg-blue-600  hover:bg-blue-500 border-b-medium text-white" color="primary"
        >Create Product </Link>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-2xl flex-col gap-1">ProductDetail</ModalHeader>
              <ModalBody>
                <p className="text-lg font-bold text-gray-900"> 
                  {ProductDetail.name}
                </p>
                <p className="text-sm ext-gray-900">
                  {ProductDetail.desc}
                </p>
                <Image src={ProductDetail.image ?? ''} width={500} height={300} alt="Product" />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <DataTable
        progressPending={isLoading}
        columns={columnsData}
        fixedHeader={true}
        fixedHeaderScrollHeight="500px"
        // selectableRows
        pagination
        subHeader
        subHeaderComponent={
          <input
            className="border-[1px] px-3 py-2 w-1/2 mb-5 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
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