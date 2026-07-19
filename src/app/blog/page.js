// Dummy imports
// import { getPosts } from "@/lib/posts";
// import { Post } from "@/ui/post";

export default async function Page() {
  // const posts = await getPosts();

  return (
    <ul>
      <li>Blog</li>
      {/* {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))} */}
    </ul>
  );
}
