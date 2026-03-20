import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Vapor Pro 3",
    image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/94bc94de-8072-4279-8d34-25395f6e0962/M+ZOOM+VAPOR+PRO+3+HC.png",
    price: 1909000,
  },
  {
    id: 2,
    title: "Nike Winflo 12",
    image: "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24cedc1c-1891-4400-a43c-6a1b9379cd6e/NIKE+AIR+WINFLO+12.png",
    price: 1599000,
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
