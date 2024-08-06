import { Dispatch, SetStateAction } from "react";

export interface CardType {
  id: string;
  title: string;
  description?: string;
  deadline: Date;
  assignee: string;
  column: string;
  tag: string;
  color?: string;
}

export interface ColumnProps {
  title: string;
  cards: CardType[];
  column: string;
  setCards: Dispatch<SetStateAction<CardType[]>>;
}

export interface CardProps extends CardType {
  handleDragStart: (e: React.DragEvent, card: CardType) => void;
  setCards: Dispatch<SetStateAction<CardType[]>>;
}

export interface DropIndicatorProps {
  beforeId: string | null;
  column: string;
}

export interface BurnBarrelProps {
  setCards: Dispatch<SetStateAction<CardType[]>>;
}

export interface AddCardProps {
  column: string;
  setCards: Dispatch<SetStateAction<CardType[]>>;
}
