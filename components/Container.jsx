import clsx from "clsx";

export default function Container({ className, children }) {
  return (
    <section className={clsx("mx-auto max-w-7xl w-full px-2", className)}>
      {children}
    </section>
  );
}
