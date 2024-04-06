import React from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import {Card ,Image , CardHeader , CardBody , CardFooter} from "@nextui-org/react";
import { ProductType } from "@/types/product";
import { Button } from "@nextui-org/react";
export default function CardComponent({name, image , price , desc}: ProductType) {
  return (
    <Card  className="py-4 w-[310px] ">
      <CardBody  className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-[300px] h-[200px]"
          src={image}
          width={300 }
          height={200 }
        /> 
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large line-clamp-1">{name}</h4>       
        </CardHeader>
        <CardFooter className=" h-[50px] flex justify-between px-4 ">
        <h6 className="line-clamp-2 ">{desc}</h6>
        </CardFooter>       
        <div className="mt-2 flex justify-between items-center mx-5">
          <small className=" text-xl font-bold text-gray-900 dark:text-white">${price}</small>
          <Button className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800" >
            AddCard
            <BiSolidCartAdd className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

