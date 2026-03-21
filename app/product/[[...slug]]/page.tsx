
const getDataProduct = async () => {
  try {
    // const res = await fetch("https://fakestoreapi.com/products", {
    //   next: { revalidate: 3600 },
    // });
    const res = await fetch("http://localhost:3000/api/product", {
         next: { 
          tags: ["products"]
          // revalidate: 3600 
        }
    });
    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const { slug } = await params;
  const products = await getDataProduct();
  console.log(products);
  
  return (
    <div className="grid grid-cols-4 mt-5 gap-5 place-items-center">
      {/* <h1 className="text-slate-100">
        {slug ? "Detail product page" : "Product page"}
      </h1> */}
      {Array.isArray(products) &&
        products.length > 0 &&
        products.map((product: any) => (
          <div key={product.id} className="w-full max-w-sm bg-neutral-500 p-6 border rounded-lg shadow-xs">
            <a href="#">
              <img
                className="rounded-base mb-6 object-cover h-96 w-full"
                src={product.image}
                alt="product image"
              />
            </a>
            <div>
              <div className="flex items-center space-x-3 mb-6">
              </div>
              <a href="#">
                <h5 className="text-xl text-heading font-semibold tracking-tight truncate">
                  {product.title}
                </h5>
              </a>
              <div className="flex items-center justify-between mt-6">
                <span className="text-3xl font-extrabold text-heading">
                  $ {product.price}
                </span>
              </div>
            </div>
          </div>
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
