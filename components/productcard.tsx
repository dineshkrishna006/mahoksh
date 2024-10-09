"use client";
import React from "react";
import Image from "next/image";
import { TbShoppingCartPlus } from "react-icons/tb";

import { Button } from "./ui/button";
interface Product {
  source: string;
  name: string;
  price: number;
  mrp: number;
  bundle: number;
  liter: number;
  stock: number;
}

const Productcard = () => {
  const products_: Product[] = [
    {
      source: "/images/mustardoil1lit.jpeg",
      name: "Mustard Oil",
      price: 89,
      mrp: 100,
      bundle: 1,
      liter: 1,
      stock: 10,
    },
    {
      source: "/images/coconutoil1lit.jpeg",
      name: "Coconut Oil",
      price: 200,
      mrp: 240,
      bundle: 2,
      liter: 1,
      stock: 1,
    },
    {
      source: "/images/coconutoil2lit.jpeg",
      name: "Coconut Oil",
      price: 2700,
      mrp: 3900,
      bundle: 1,
      liter: 2,
      stock: 0,
    },
    {
      source: "/images/groundnutoil2lit.jpeg",
      name: "Groundnut Oil",
      price: 2700,
      mrp: 3900,
      bundle: 1,
      liter: 15.5,
      stock: 1,
    },
    // {
    //   source: "/images/sesameoil2lit.jpeg",
    //   name: "Sesame Oil",
    //   price: 100,
    //   mrp: 120,
    //   bundle: 1,
    //   liter: 2,
    // stock: 1,
    // },
  ];
  return (
    <div className="flex min-h-screen bg-mbackg justify-center items-center flex-wrap gap-5">
      {products_.map((product: Product, index: number) => (
        <div
          key={index}
          className="w-[250px] bg-mgreen p-1 font-out text-lg shadow-xl rounded-2xl overflow-hidden"
        >
          <div className="relative">
            <Image
              src={product.source}
              width={250}
              height={1}
              alt="coconutoil1lit"
              className="aspect-square  w-full rounded-xl"
            />
            <p className="absolute bottom-0 left-1 my-1 text-sm flex justify-center items-center rounded-xl text-mgreen bg-white/80 px-2 py-0.5 font-medium">
              {product.liter.toFixed(1)}Liter
            </p>
            {/* <p className="absolute bottom-0 right-1 p-1 my-1  flex justify-center items-center  rounded-xl text-mgreen bg-gray-600/60 w-[100px]">
          Sesame
        </p> */}
          </div>

          <div className="mt-3 ml-3 ">
            <p className="w-full overflow-hidden text-mbackg text-ellipsis whitespace-nowrap">
              {product.name}
            </p>
            <div className="w-full flex justify-between items-center mt-3">
              <p className="text-mbackg">
                ₹{product.price}{" "}
                <span className="line-through text-sm">
                  &nbsp;{product.mrp}
                </span>
              </p>
              {product.stock > 0 ? (
                <Button
                  className="rounded-xl font-[500] px-2 py-1 h-auto text-sm"
                  variant="cart"
                >
                  <TbShoppingCartPlus size={15} />
                  &nbsp;Add
                </Button>
              ) : (
                <Button
                  className="rounded-xl px-3 font-[500] line-through"
                  disabled
                  variant="cart"
                >
                  <TbShoppingCartPlus size={15} />
                  &nbsp;Add
                  {/* Out of Stock */}
                </Button>
              )}
              {/* <Button className="rounded-xl  px-3 font-[500]" variant="cart">
                <TbShoppingCartPlus size={15} />
                &nbsp;Add
              </Button> */}
            </div>
          </div>

          {/* <div className="absolute top-0 left-0">
        <div className=" bg-mblue min-w-[300px] h-[30px] -rotate-90 translate-x-[135px] translate-y-[135px] flex items-center justify-center rounded-full">
          <p className="  p-3 text-xl  text-clip ">Sesame Oil</p>
          <p className=" bg-yellow-400 rounded-full text- p-2 py-3 rotate-90">
            5.0L
          </p>
        </div>
      </div> */}
        </div>
      ))}
    </div>
  );
};

export default Productcard;
