import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <h1>Test</h1>
     <Link href="/posts">Ke halaman posts</Link>
    </main>
  );
}
