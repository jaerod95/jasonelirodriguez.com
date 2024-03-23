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
    <div className="w-full">
      <div className="md:container md:mx-auto md:px-4">{children}</div>
    </div>
  );
}
