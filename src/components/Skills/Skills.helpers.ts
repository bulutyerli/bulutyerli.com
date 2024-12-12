import { Icons } from 'types/types';

export const generatePositions = ({
  width,
  height,
  iconSize,
  skills,
}: {
  width: number;
  height: number;
  iconSize: number;
  skills: Icons[];
}) => {
  const positions: Array<{ x: number; y: number; icon: Icons }> = [];

  // Number of positions should match the number of skill icons
  for (let i = 0; i < skills.length; i++) {
    let isUnique = false;
    let x: number = 0;
    let y: number = 0;

    while (!isUnique) {
      // Positions are within bounds and not outside the container, leaving space for the icon
      const newWidth = width < 400 ? width * 1.5 : width;

      x = Math.round(Math.random() * (newWidth - iconSize));
      y = Math.round(Math.random() * (height - iconSize));

      // Ensure the icon fits inside the container
      if (x + iconSize > newWidth) x = newWidth - iconSize;
      if (y + iconSize > height) y = height - iconSize;

      // Check uniqueness based on previous positions
      isUnique = positions.every((pos) => {
        const dx = Math.abs(pos.x - x);
        const dy = Math.abs(pos.y - y);
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Ensure there's a sufficient distance between the icons (center-to-center distance)
        return distance > iconSize * 1.8;
      });
    }

    positions.push({ x, y, icon: skills[i] });
  }

  return positions;
};
