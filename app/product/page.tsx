

import Image from "next/image";
import { getDataProduct } from "../services/products";
import Link from "next/link";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const { slug } = await params;
  const products = await getDataProduct("http://localhost:3000/api/product");

  return (
    <div className="grid grid-cols-4 mt-5 gap-5 place-items-center">
      {Array.isArray(products) &&
        products.length > 0 &&
        products.map((product: any) => (
          <Link href={`/product/detail/${product.id}`} key={product.id} className="w-full max-w-sm bg-neutral-500 p-6 border rounded-lg shadow-xs">
              <Image
                className="rounded-base mb-6 object-cover h-96 w-full"
                src={product.image}
                width={200}
                height={200}
                alt="product image"
              />
            <div>
              <div className="flex items-center space-x-3 mb-6">
              </div>
                <h5 className="text-xl text-heading font-semibold tracking-tight truncate">
                  {product.name}
                </h5>
              <div className="flex items-center justify-between mt-6">
                <span className="text-3xl font-extrabold text-heading">
                  $ {product.price}
                </span>
                <button type="button" className="px-2 py-1 text-slate-100 bg-sky-500 rounded-lg">Add to cart</button>
              </div>
            </div>
          </Link>
        ))}
      {slug && (
        <>
          <p className="text-slate-100">Category : {slug[0]}</p>
          <p className="text-slate-100">Gender : {slug[1]}</p>
          <p className="text-slate-100">Id : {slug[2]}</p>
        </>
      )}
    </div>
  );
};

export default ProductPage;
