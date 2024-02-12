export default function IconSlider({ height, icon, width }) {
  return (
    <li
      className="absolute bg-transparent m-1"
      style={{
        top: `${height}px`,
        left: `${width}px`,
      }}
    >
      {icon}
    </li>
  );
}
