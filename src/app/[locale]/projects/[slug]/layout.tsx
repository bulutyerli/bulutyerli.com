export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <article className="prose prose-zinc dark:prose-invert lg:prose-lg prose-h1:font-spartan mx-auto mt-5 w-full max-w-7xl px-2 md:mt-10">
      {children}
    </article>
  );
}
