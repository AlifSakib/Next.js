import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div>
      <Link href="/product/1">
        <h2>Product 1</h2>
      </Link>
      <Link href="/product/2">
        <h2>Product 2</h2>
      </Link>
      <Link href="/product/3">
        <h2>Product 3</h2>
      </Link>
    </div>
  );
};

export default ProductList;
