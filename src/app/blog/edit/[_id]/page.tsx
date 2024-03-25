import { saveDoc } from "@/actions/editor";
import Editor from "@/components/mdx/editor";
import { IPost } from "@/schema/post.types";
import { useState } from "react";
import { getDoc } from "@/actions/editor";
import Post from "@/schema/Post";

export default async function NewEditor({
  params,
}: {
  params: { _id: string };
}) {
  let originalPost = (await getDoc(params._id)) || {
    _id: params._id,
    title: "",
    content: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return <Editor originalPost={originalPost} />;
}
