"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function PriceSelector() {
  const sizes = [
    { label: '8x10"', price: "$10" },
    { label: "11x14", price: "$15" },
    { label: "16x20", price: "$20" },
  ];

  const [selected, setSelected] = useState(0); // default selected index

  return (
    <div className="w-full text-center max-w-md mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-4">Sizes</h2>
      <div className="relative flex justify-between bg-gray-100 h-[80px] rounded-lg p-1">
        {/* Animated indicator */}
        <motion.div
          layout
          className="absolute top-1 bottom-1 bg-[#ee2b4b] rounded-lg"
          style={{
            width: `calc(100% / ${sizes.length})`,
            left: `${(100 / sizes.length) * selected}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Options */}
        {sizes.map((size, index) => (
          <button
            key={size.label}
            className="relative z-10 flex-1 text-center py-2 w-20 font-medium transition-colors duration-200"
            onClick={() => setSelected(index)} // replace with your click logic later
          >
            <span
              className={`${
                selected === index ? "text-white" : "text-gray-800"
              }`}
            >
              {size.label} <br />
              <span className="text-sm font-normal">{size.price}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
