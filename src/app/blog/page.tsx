import dbConnect from "@/schema/db";
import Post from "@/schema/Post";
import Link from "next/link";
import { Suspense } from "react";

const POSTS_PER_PAGE = 10;

async function getRecentPosts({ page }: { page: number }) {
  await dbConnect();

  // Wait for the playlists
  const recentPosts = await Post.find({})
    .limit(POSTS_PER_PAGE)
    .skip(page * POSTS_PER_PAGE)
    .select("_id title createdAt updatedAt")
    .lean();

  return (
    <ul>
      {recentPosts.map((post) => (
        <li key={post._id.toString()}>
          <Link href={`/blog/${post._id.toString()}`}>{post.title || "Untitled Post"}</Link>{" "}
        </li>
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
    </>
  );
}
