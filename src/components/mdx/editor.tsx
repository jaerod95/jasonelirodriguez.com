"use client";

import { ForwardRefEditor } from "@/components/mdx/forwardRefEditor";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { useRef } from "react";
import clsx from "clsx";
import style from "./editor.module.css";

export default function Editor({ className }: { className?: string }) {
  const editorRef = useRef<MDXEditorMethods>(null);

  const usingDarkTheme =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <ForwardRefEditor
      className={clsx(
        { [style.darkEditor]: usingDarkTheme, "dark-theme": usingDarkTheme },
        className
      )}
      ref={editorRef}
      markdown=""
    />
  );
}
