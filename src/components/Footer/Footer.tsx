import type { FC } from "react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="current-year">
      <p>{currentYear}</p>
    </footer>
  );
};
