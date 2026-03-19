import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 p-2">
      <div className="flex items-center  justify-between">
        <h1 className="text-slate-900 text-2xl font-bold">Navbar</h1>
        <ul className="flex text-slate-900 font-semibold gap-5 mr-72">
          <Link href="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer">About</li>
          </Link>
          <Link href="/about/profile">
            <li className="cursor-pointer">Profile</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
