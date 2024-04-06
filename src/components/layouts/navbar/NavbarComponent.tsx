"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navbarItem } from "./menu";

export default function App() {
  const pathname = usePathname();
  if(pathname === "/login" || pathname === "/register") {
    return null;
  }
  return (
    <Navbar className=" bg-white shadow-sm " disableAnimation>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Image
            width={40}
            className="mr-4 rounded-full"
            height={40}
            src={"/assets/logo.png"}
            alt={""}
          />
          <p className="font-bold text-inherit">LY STORE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 lg: " justify="start">
        <NavbarBrand>
          <Image
            width={50}
            className="mr-4 rounded-full"
            height={50}
            src={"/assets/logo.png"}
            alt={""}
          />
          <p className="font-bold text-inherit">LY STORE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 font-bold" justify="center">
        {navbarItem.map((item, index: any) => (
          <NavbarItem className=" p-3" key={index}> 
            <Link
              color="foreground"
              href={item.path}
              className={`${
                pathname === item.path && "font-bold text-blue-600"
              }`}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

     {/* desktop */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} className="font-medium font-roboto  px-5 py-2 border-2 border-blue-600 rounded-full text-black bg-white transition duration-500 hover:text-blue-600 hover:bg-white " href="/dashboard" variant="flat">
            Dashboard
          </Button>
        </NavbarItem>
        <NavbarItem  className="hidden lg:flex">
          <Button as={Link} className="font-medium font-roboto  px-5 py-2 border-2 border-blue-600 rounded-full text-white bg-blue-600 transition duration-500 hover:text-blue-600 hover:bg-white" href="/login" variant="flat">
          Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navbarItem.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === navbarItem.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.path}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem className="w-full text-[18px]">
          <Link href="/dashboard">Dashboard</Link>
        </NavbarItem>
        <NavbarItem className="w-full text-[18px]">
          <Link href="/dashboard">Get Started</Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
