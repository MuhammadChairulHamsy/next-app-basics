import Modal from "@/app/components/core/modal/modal";
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
    <Modal>
      <Image
        src={product.image}
        alt={product.title}
        height={800}
        width={800}
        className="object-cover aspect-square"
      />
      <div className="bg-slate-100 p-4 px-6">
        <h3 className="text-slate-900 text-2xl">{product.title}</h3>
        <p className="text-slate-900 text-2xl">Price: {product.price}</p>
      </div>
    </Modal>
  );
};

export default DetailProductPage;
