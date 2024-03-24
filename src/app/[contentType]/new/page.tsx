import Editor from "@/components/mdx/editor";

export default function NewEditor({
  params,
}: {
  params: { contentType: string };
}) {
  return (
    <div className="w-full min-h-svh py-8">
      <article className="prose prose-slate dark:prose-invert md:container md:mx-auto px-6 md:px-24 lg:36 py-4l">
        <h1>New {params.contentType}</h1>
        <Editor className="bg-white" />
      </article>
    </div>
  );
}
