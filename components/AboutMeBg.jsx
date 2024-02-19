export default function AboutMeBg(props) {
  return (
    <svg {...props} aria-hidden="true">
      <defs>
        <pattern
          id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 0 L200 200 M200 0 L0 200" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
      />
    </svg>
  );
}
