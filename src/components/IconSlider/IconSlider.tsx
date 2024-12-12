interface SliderType {
  width: string;
  height: string;
  children: React.ReactNode;
}

export default function IconSlider({ height, children, width }: SliderType) {
  return (
    <li
      aria-hidden
      className="absolute bg-transparent m-1 animate-bounce"
      style={{
        top: `${height}px`,
        left: `${width}px`,
      }}
    >
      {children}
    </li>
  );
}
