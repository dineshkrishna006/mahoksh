"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function InfiniteScroll() {
  return (
    <div className="bg-mgreen overflow-x-hidden z-20">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
        className="overflow-hidden w-[100vw] font-out"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Pure Oils",
    src: "/images/pureoil.png",
  },
  {
    name: "Chemical Free",
    src: "/images/nochemicals.png",
  },
  {
    name: "Traditional Methods",
    src: "/images/nochemicals.png",
  },
  {
    name: "Bull Powered",
    src: "/images/nochemicals.png",
  },
  {
    name: "Authentic Flavour",
    src: "/images/nochemicals.png",
  },
  {
    name: "Natural",
    src: "/images/nochemicals.png",
  },
  {
    name: "Pure Oils",
    src: "/images/pureoil.png",
  },
  {
    name: "Chemical Free",
    src: "/images/nochemicals.png",
  },
  {
    name: "Traditional Methods",
    src: "/images/nochemicals.png",
  },
  {
    name: "Bull Powered",
    src: "/images/nochemicals.png",
  },
  {
    name: "Authentic Flavour",
    src: "/images/nochemicals.png",
  },
  {
    name: "Natural",
    src: "/images/nochemicals.png",
  },
  {
    name: "Pure Oils",
    src: "/images/pureoil.png",
  },
  {
    name: "Chemical Free",
    src: "/images/nochemicals.png",
  },
  {
    name: "Traditional Methods",
    src: "/images/nochemicals.png",
  },
  {
    name: "Bull Powered",
    src: "/images/nochemicals.png",
  },
  {
    name: "Authentic Flavour",
    src: "/images/nochemicals.png",
  },
  {
    name: "Natural",
    src: "/images/nochemicals.png",
  },
];
