"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Productdetials } from "@/lib/types";
import Image from "next/image";
const Cart = () => {
  const products_: Productdetials[] = [
    {
      source: "/images/mustardoil1lit.jpeg",
      name: "Mustard Oil",
      price: 89,
      mrp: 100,
      bundle: 1,
      liter: 1,
      stock: 10,
      quantity: 1,
    },
    {
      source: "/images/coconutoil1lit.jpeg",
      name: "Coconut Oil",
      price: 200,
      mrp: 240,
      bundle: 2,
      liter: 1,
      stock: 1,
      quantity: 2,
    },
    {
      source: "/images/coconutoil2lit.jpeg",
      name: "Coconut Oil",
      price: 2700,
      mrp: 3900,
      bundle: 1,
      liter: 2,
      stock: 0,
      quantity: 5,
    },

    {
      source: "/images/groundnutoil2lit.jpeg",
      name: "Groundnut Oil",
      price: 2700,
      mrp: 3900,
      bundle: 1,
      liter: 15.5,
      stock: 1,
      quantity: 1,
    },
  ];

  //   const minus = (ind: number) => {
  //     const updatedProducts_ = [...products_];
  //     if (updatedProducts_[ind - 1].quantity > 1) {
  //       updatedProducts_[ind - 1].quantity = products_[ind - 1].quantity - 1;
  //       setProducts_(updatedProducts_);
  //     }
  //   };

  //   const plus = (ind: number) => {
  //     const updatedProducts_ = [...products_];
  //     if (updatedProducts_[ind-1].stock>updatedProducts_[ind - 1].quantity) {
  //       updatedProducts_[ind - 1].quantity = products_[ind - 1].quantity + 1;
  //       setProducts_(updatedProducts_);
  //     }
  //   }
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Table className="bg-[#BA9977] font-out">
        {/* <TableCaption>Your Cart Items</TableCaption> */}
        <TableHeader>
          <TableRow className="text-black text-lg ">
            <TableHead className="text-left">S.no</TableHead>
            <TableHead className="text-left px-4">Product</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="">Quantity</TableHead>
            <TableHead className="text-center">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products_.map((item, ind) => (
            <TableRow key={ind}>
              <TableCell className="font-medium text-center">{ind + 1}</TableCell>
              <TableCell className="text-left">
                <div className=" w-[340px] h-[76px] flex items-center  bg-[#D9D9D9] rounded-xl">
                  <div className="w-[300px] flex gap-2 m-2 ">
                    <Image
                      src={item.source}
                      width={250}
                      height={1}
                      alt={item.name}
                      className="aspect-square w-[60px] rounded-lg"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-base">{item.name}</p>
                      <p className="left-1 my-1 rounded-md text-white bg-mgreen w-[80px] px-2">
                        {item.liter.toFixed(1)}Liter
                      </p>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">₹{item.price}</TableCell>
              <TableCell className="text-center ">
                <div className="flex justify-center items-center">
                  <Button variant="outline">
                    {/*Need to add the functionality */}-
                  </Button>
                  <p className="p-3 bg">{item.quantity}</p>
                  <Button variant="outline">+</Button>
                  {/*Need to add the functionality */}
                </div>
              </TableCell>
              <TableCell className="text-center">
                ₹{item.price * item.quantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};

export default Cart;
