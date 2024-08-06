"use client";

import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

import { DEFAULT_CARDS } from "@/data/board";
import { CardType } from "@/types";

import { Button } from "@/components/ui/button";
import AddSectionModal from "@/components/modals/AddSectionModal";
import Column from "./Column";

const Board = () => {
  const [cards, setCards] = useState<CardType[]>(DEFAULT_CARDS);
  const [columns, setColumns] = useState<string[]>([
    "backlog",
    "todo",
    "doing",
    "done",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddColumn = (name: string) => {
    setColumns([...columns, name]);
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-full w-full gap-8 overflow-scroll py-10 px-2">
      {columns.map((column, index) => (
        <Column
          key={column}
          title={column.charAt(0).toUpperCase() + column.slice(1)}
          column={column}
          cards={cards}
          setCards={setCards}
        />
      ))}
      <div className="px-2">
        <Button
          variant="link"
          className="text-gray-400"
          onClick={() => setIsModalOpen(true)}
        >
          <IoAddOutline size={20} />
          <span className="ml-3 font-bold">Add section</span>
        </Button>
      </div>

      <AddSectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddColumn}
      />
    </div>
  );
};

export default Board;
