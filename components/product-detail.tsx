"use client";

import Stripe from "stripe";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Mock selection
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [selectedSize, setSelectedSize] = useState("M");

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Image */}
      {product.images && product.images[0] && (
        <div className="w-full max-w-lg mx-auto">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg object-contain w-full h-auto shadow-md"
          />
        </div>
      )}

      {/* Details */}
      <div>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        {product.description && (
          <p className="text-gray-600 mb-4">{product.description}</p>
        )}
        {price?.unit_amount && (
          <p className="text-2xl font-semibold text-gray-900 mb-6">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}

        {/* Color Selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Color</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option>Blue</option>
            <option>Black</option>
            <option>Red</option>
          </select>
        </div>

        {/* Size Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Size</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={() => removeItem(product.id)}>
            –
          </Button>
          <span className="text-lg font-semibold">{quantity}</span>
          <Button onClick={onAddItem}>+</Button>
        </div>

        {/* Add to Cart Button */}
        <Button onClick={onAddItem} className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
