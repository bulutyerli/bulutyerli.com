export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-5 w-full max-w-7xl px-2 md:mt-10">
      <article className="prose prose-sm md:prose-base dark:prose-invert prose-h1:font-spartan prose-p:max-w-prose prose-ul:max-w-prose max-w-none">
        {children}
      </article>
    </div>
  );
}
