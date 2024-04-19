import { getDoc } from "@/actions/editor";
import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";

export default async function BlogPost({ params }: { params: { _id: string } }) {
  const post = await getDoc(params._id);
  if (!post) {
    redirect("/blog");
  }

  return (
    <>
      <h1>{post.title}</h1>
      <h4>
        {new Date(post.createdAt).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h4>
      <MDXRemote source={post.content} />
    </>
  );
}
