"use client";

import {
  BoldItalicUnderlineToggles,
  DiffSourceToggleWrapper,
  MDXEditor,
  UndoRedo,
  diffSourcePlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import type { ForwardedRef } from "react";

export interface IInitMDXEditorProps {
  diffMarkdown?: string;
}

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps & IInitMDXEditorProps) {
  return (
    <MDXEditor
      plugins={[
        toolbarPlugin({
          toolbarContents: () => {
            return (
              <DiffSourceToggleWrapper>
                <BoldItalicUnderlineToggles />
                <UndoRedo />
              </DiffSourceToggleWrapper>
            );
          },
        }),
        listsPlugin(),
        quotePlugin(),
        headingsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin(),
        tablePlugin(),
        thematicBreakPlugin(),
        frontmatterPlugin(),
        diffSourcePlugin({
          viewMode: "source",
          diffMarkdown: props.diffMarkdown || "",
        }),
        markdownShortcutPlugin(),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
