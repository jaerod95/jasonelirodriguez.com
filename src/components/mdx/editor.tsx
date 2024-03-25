"use client";

import { ForwardRefEditor } from "@/components/mdx/forwardRefEditor";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { useRef, useState } from "react";
import clsx from "clsx";
import style from "./editor.module.css";
import { IPost } from "@/schema/post.types";
import { saveDoc } from "@/actions/editor";

export default function Editor({ originalPost }: { originalPost: IPost }) {
  const editorRef = useRef<MDXEditorMethods>(null);

  const [title, setTitle] = useState<string>(originalPost.title);
  const [content, setContent] = useState<string>(originalPost.content);

  const savePost = saveDoc.bind(null, { ...originalPost, title, content });

  return (
    <form className="w-full min-h-svh flex flex-col">
      <div className="flex justify-between items-center p-8">
        <h1>New Page</h1>
        <div className="flex space-x-4">
          <button className="btn" type="submit" formAction={savePost}>
            Save
          </button>
        </div>
      </div>
      <article className="prose prose-slate dark:prose-invert md:container md:mx-auto px-6 md:px-24 lg:36 py-4l">
        <ForwardRefEditor
          onChange={(content) => setContent(content)}
          className={clsx(style.darkEditor, "dark-theme")}
          ref={editorRef}
          markdown={content}
          diffMarkdown={originalPost.content}
        />
      </article>
    </form>
  );
}
