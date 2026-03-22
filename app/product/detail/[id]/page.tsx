import { getDataProduct } from "@/app/services/products";
import Image from "next/image";

const DetailProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const product = await getDataProduct(
    `http://localhost:3000/api/product?id=${id}`,
  );

  if (!product)
    return (
      <div className="text-red-500 text-center font-bold">
        Produk tidak ditemukan.
      </div>
    );

  return (
    <div className="container mx-auto my-10">
      <div className="w-[50%] mx-auto border">
        <Image
          src={product.image}
          alt={product.name}
          height={800}
          width={800}
          className="object-cover aspect-square"
        />
        <div className="bg-slate-100 p-4 px-6">
          <h3 className="text-slate-900 text-2xl">{product.name}</h3>
          <p className="text-slate-900 text-2xl">Price: {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
