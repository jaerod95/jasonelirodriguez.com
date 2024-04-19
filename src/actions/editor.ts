"use server";

import Post from "@/schema/Post";
import dbConnect from "@/schema/db";
import { IPost } from "@/schema/post.types";

export async function getDoc(_id: string): Promise<IPost | null> {
  await dbConnect();
  return JSON.parse(JSON.stringify(await Post.findById(_id).lean()));
}

export async function saveDoc(doc: IPost, formData: FormData) {
  await dbConnect();
  console.log("saveDoc", doc, formData);
  return await Post.findOneAndUpdate({ _id: doc._id }, doc, {
    upsert: true,
    new: true,
  });
}
