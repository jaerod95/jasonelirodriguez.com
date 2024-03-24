"use client";

import { ForwardRefEditor } from "@/components/mdx/forwardRefEditor";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { useRef } from "react";

export default function Editor({ className }: { className?: string }) {
  const editorRef = useRef<MDXEditorMethods>(null);

  return <ForwardRefEditor className={className} ref={editorRef} markdown="" />;
}
