"use client";
import React from "react";
import Image from "next/image";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Button } from "./ui/button";

const Product = () => {
  return (
    <div className="min-h-screen font-out flex flex-col items-center justify-center bg-mbackg">
      <div className="lg:hidden  flex flex-col md:flex-row mt-4 gap-10 border-2 p-2   rounded-2xl border-mgreen">
        <div className="w-[325px]">
          <Image
            src={"/images/coconutoil2lit.jpeg"}
            width={250}
            height={1}
            alt="coconutoil1lit"
            className="aspect-square w-full rounded-2xl"
          />
        </div>

        <div className="w-[325px] ">
          <p className="w-full  text-black text-xl font-semibold">
            {/* {product.name} */}
            Coconut Oil( pack of two)
          </p>
          <p className="text-lg font-[520]">
            Quantity:&nbsp;
            <span className=" font-normal">2.0 Liters</span>
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-[520]">
              ₹599&nbsp;
              <span className="text-base font-[520] text-black/70 line-through">
                699
              </span>
            </p>
            <Button
              className="rounded-xl text-base  px-3 font-[500]"
              variant="cart"
            >
              <TbShoppingCartPlus size={15} />
              &nbsp;Add to Cart
            </Button>
          </div>
          <p className="text-lg font-[520]">Description:</p>
          <p className="text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <div className="max-lg:hidden flex border-2 p-5 rounded-2xl gap-20 border-mgreen">
        <div className="w-[450px]">
          <Image
            src={"/images/coconutoil2lit.jpeg"}
            width={250}
            height={1}
            alt="coconutoil1lit"
            className="aspect-square w-full rounded-2xl"
          />
        </div>
        <div className="w-[450px] mt-1">
          <p className="w-full  text-black text-xl  font-semibold">
            {/* {product.name} */}
            Coconut Oil( pack of two)
          </p>
          <p className="text-lg font-[520]">
            Quantity:&nbsp;
            <span className=" font-normal">2.0 Liters</span>
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-[520]">
              ₹599&nbsp;
              <span className="text-base font-[520] text-black/70 line-through">
                699
              </span>
            </p>
            <Button
              className="rounded-xl text-base  px-3 font-[500]"
              variant="cart"
            >
              <TbShoppingCartPlus size={15} />
              &nbsp;Add to Cart
            </Button>
          </div>
          <p className="text-lg font-[520]">Description:</p>
          <p className="text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
