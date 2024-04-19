import { getDoc } from "@/actions/editor";
import Editor from "@/components/mdx/editor";

export default async function NewEditor({ params }: { params: { _id: string } }) {
  let originalPost = (await getDoc(params._id)) || {
    _id: params._id,
    title: "Draft",
    content: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return <Editor originalPost={originalPost} />;
}
