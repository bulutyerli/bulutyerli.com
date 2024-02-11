export default function IconSlider({ height, icon, width }) {
  return (
    <div
      className="absolute bg-transparent m-1 min-w-full min-h-full"
      style={{
        top: `${height}px`,
        left: `${width}px`,
      }}
    >
      {icon}
    </div>
  );
}
