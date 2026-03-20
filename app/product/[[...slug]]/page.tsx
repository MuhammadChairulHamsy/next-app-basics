import { use } from "react";


const DetailProductPage = ({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const { slug } = use(params);
  return (
    <div>
      <h1 className="text-slate-100">{slug ? "Detail product page" : "Product page"}</h1>
      {slug && (
        <>
          <p className="text-slate-100">Category : {slug[0]}</p>
          <p className="text-slate-100">Gender : {slug[1]}</p>
          <p className="text-slate-100">Id : {slug[2]}</p>
        </>
      ) }
    </div>
  );
};

export default DetailProductPage;
