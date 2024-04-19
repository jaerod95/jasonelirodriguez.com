import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog post on various topics.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-svh">
      <article className="prose prose-slate dark:prose-invert md:container md:mx-auto px-6 md:px-24 lg:36 py-4l">
        {children}
      </article>
    </div>
  );
}
