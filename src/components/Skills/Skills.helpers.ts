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
  const maxAttempts = 1000;

  const newWidth = width < 768 ? width * 1.5 : width;
  const minDistance = width < 768 ? iconSize * 1.5 : iconSize * 1.8;

  for (let i = 0; i < skills.length; i++) {
    let isUnique = false;
    let x: number = 0;
    let y: number = 0;
    let attempts = 0;

    while (!isUnique && attempts < maxAttempts) {
      attempts++;

      // Adjust width for very small screens

      console.log(newWidth);

      x = Math.round(Math.random() * (newWidth - iconSize));
      y = Math.round(Math.random() * (height - iconSize));

      // Ensure the icon fits inside the container
      if (x + iconSize > newWidth) x = newWidth - iconSize;
      if (y + iconSize > height) y = height - iconSize;

      // Adjust distance requirement based on screen size

      isUnique = positions.every((pos) => {
        const dx = Math.abs(pos.x - x);
        const dy = Math.abs(pos.y - y);
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance > minDistance;
      });
    }

    if (attempts >= maxAttempts) {
      console.warn(`Unable to place icon ${i} after ${maxAttempts} attempts.`);
      break;
    }

    positions.push({ x, y, icon: skills[i] });
  }

  console.log(positions);

  return positions;
};
