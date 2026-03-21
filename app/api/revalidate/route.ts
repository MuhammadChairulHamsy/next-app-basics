import { NextResponse, type NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json(
      { status: 401, message: "Invalid secret" },
      { status: 401 },
    );
  }

  if (tag) {
    revalidateTag(tag, "max");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json(
    {
      revalidated: false,
      now: Date.now(),
      message: "Missing tag to revalidate",
    },
    { status: 400 },
  );
}
