"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";

// Define the Card type
interface CardType {
  title: string;
  src: string;
  link: string;
}

// Define props for the Card component
interface CardProps {
  card: CardType;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

// Card Component
const Card: React.FC<CardProps> = ({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    onClick={() => window.location.href = card.link}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-10 md:h-14 md:w-14 w-10 transition-all duration-300 ease-out cursor-pointer",
      hovered === index ? "scale-105" : "scale-100",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0 w-full h-full"
    />
  </div>
);

Card.displayName = "Card";

// FocusCards Component
interface FocusCardsProps {
  cards: CardType[];
}

export const FocusCards: React.FC<FocusCardsProps> = ({ cards }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  if (!cards || cards.length === 0) {
    return null; // or return a placeholder component
  }

  return (
    <div className="grid pl-2 grid-cols-5 pt-3 sm:grid-cols-6 pb-10 gap-10 justify-center z-40 mt-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};
