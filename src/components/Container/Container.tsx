import clsx from 'clsx';

interface ContainerType {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: ContainerType) {
  return (
    <div className={clsx('mx-auto max-w-7xl w-full px-5', className)}>
      {children}
    </div>
  );
}
