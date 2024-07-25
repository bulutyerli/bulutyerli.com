interface SliderType {
  width: string;
  height: string;
  icon: React.ReactNode;
}

export default function IconSlider({ height, icon, width }: SliderType) {
  return (
    <li
      className="absolute bg-transparent m-1 animate-bounce"
      style={{
        top: `${height}px`,
        left: `${width}px`,
      }}
    >
      <div className="text-5xl md:text-6xl xl:text-7xl">{icon}</div>
    </li>
  );
}
