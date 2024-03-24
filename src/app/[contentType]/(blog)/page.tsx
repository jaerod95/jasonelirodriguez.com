import dbConnect from "@/schema/db";
import Post from "@/schema/post";
import { Suspense } from "react";

const POSTS_PER_PAGE = 10;

async function getRecentPosts({ page }: { page: number }) {
  await dbConnect();

  // Wait for the playlists
  const recentPosts = await Post.find({})
    .limit(POSTS_PER_PAGE)
    .skip(page * POSTS_PER_PAGE)
    .select("title createdAt")
    .lean();

  return (
    <ul>
      {recentPosts.map((post) => (
        <li key={post._id.toString()}>{post.title}</li>
      ))}
    </ul>
  );
}

export default async function BlogPosts() {
  const posts = await getRecentPosts({ page: 0 });

  return (
    <>
      <h1>Blog Posts</h1>
      <Suspense fallback={<div>Loading...</div>}>{posts}</Suspense>
      <button>New Post</button>
    </>
  );
}
