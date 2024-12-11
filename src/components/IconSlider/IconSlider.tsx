import clsx from 'clsx';

interface SliderType {
  width: string;
  height: string;
  icon: React.ReactNode;
  animated: boolean;
}

export default function IconSlider({
  height,
  icon,
  width,
  animated = false,
}: SliderType) {
  return (
    <li
      aria-hidden
      className="absolute bg-transparent m-1 animate-bounce "
      style={{
        top: `${height}px`,
        left: `${width}px`,
      }}
    >
      <div
        className={clsx(
          'text-5xl md:text-6xl xl:text-7xl transform transition-all duration-500',
          animated && 'animate-pulse scale-150'
        )}
      >
        {icon}
      </div>
    </li>
  );
}
