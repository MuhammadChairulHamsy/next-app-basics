"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter()
  return (
    <nav className="bg-slate-100 p-2">
      <div className="flex items-center  justify-between">
        <h1 className="text-slate-900 text-2xl font-bold">Navbar</h1>
        <ul className="flex  font-semibold gap-5">
          <Link href="/">
            <li
              className={`cursor-pointer ${pathname === "/" ? "text-sky-500" : "text-slate-900"}`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`cursor-pointer ${pathname === "/about" ? "text-sky-500" : " text-slate-900"}`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`cursor-pointer ${pathname === "/about/profile" ? "text-sky-500" : "text-slate-900"}`}
            >
              Profile
            </li>
          </Link>
        </ul>
        <div>
          <button onClick={() => router.push("/login")} className="border px-2 py-1 rounded-lg bg-slate-900  text-slate-100 cursor-pointer">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
