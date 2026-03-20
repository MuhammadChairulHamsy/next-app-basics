import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Jam tangan",
    prize: 10000,
  },
  {
    id: 2,
    name: "Sepatu",
    prize: 20000,
  },
];

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Get product success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not found",
      data: {},
    });
  }
  return NextResponse.json({
    status: 200,
    message: "Get product success",
    data,
  });
};
