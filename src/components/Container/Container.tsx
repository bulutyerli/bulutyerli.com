import clsx from 'clsx';

interface ContainerType extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  className,
  children,
  ...props
}: ContainerType) {
  return (
    <section
      {...props}
      className={clsx('mx-auto max-w-7xl w-full px-5', className)}
    >
      {children}
    </section>
  );
}
