import { Icons } from '../types/types';

export const generatePositions = ({
  width,
  height,
  iconSize,
  icons,
}: {
  width: number;
  height: number;
  iconSize: number;
  icons: Icons[];
}) => {
  const positions: Array<{ x: number; y: number; icon: Icons }> = [];

  // Number of positions should match the number of icons
  for (let i = 0; i < icons.length; i++) {
    let isUnique = false;
    let x: number = 0;
    let y: number = 0;

    while (!isUnique) {
      // Ensure positions are within bounds and not outside the container
      x = Math.round(Math.random() * (width - iconSize));
      y = Math.round(Math.random() * (height - iconSize));

      // Check uniqueness based on previous positions
      isUnique = positions.every((pos) => {
        return (
          Math.abs(pos.x - x) > iconSize ||
          (Math.abs(pos.x - x) < iconSize && Math.abs(pos.y - y) > iconSize)
        );
      });
    }

    positions.push({ x, y, icon: icons[i] });
  }

  return positions;
};
