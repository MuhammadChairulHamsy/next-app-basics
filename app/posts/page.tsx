// "use client";

import CardList from "../components/posts/CardList";
import Button from "../components/ui/Button";

interface PagePostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const PagePosts = async () => {
  const getPost = await fetch(BASE_URL, {
    next: {revalidate: 3600}
  });
  const data: PagePostsProps[] = await getPost.json();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col">
      <p>{new Date().toLocaleTimeString()}</p>
        <h1 className="text-2xl text-slate-200">Ini halaman users</h1>
        {data.map((post, index) => {
          return (
            <CardList key={index}>
              <p>{post.id}</p>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <Button userId={post.userId}/>
            </CardList>
          );
        })}
      </div>
    </div>
  );
};
export default PagePosts;
