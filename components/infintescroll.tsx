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
    src: "/images/traditional.png",
  },
  {
    name: "Hand Pressed",
    src: "/images/handpressed.png",
  },
  {
    name: "Authentic Flavour",
    src: "/images/authenticflavour.png",
  },
  {
    name: "Natural",
    src: "/images/natural.png",
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
    src: "/images/traditional.png",
  },
  {
    name: "Hand Pressed",
    src: "/images/handpressed.png",
  },
  {
    name: "Authentic Flavour",
    src: "/images/authenticflavour.png",
  },
  {
    name: "Natural",
    src: "/images/natural.png",
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
    src: "/images/traditional.png",
  },
  {
    name: "Hand Pressed",
    src: "/images/handpressed.png",
  },
  {
    name: "Authentic Flavour",
    src: "/images/authenticflavour.png",
  },
  {
    name: "Natural",
    src: "/images/natural.png",
  },
];
