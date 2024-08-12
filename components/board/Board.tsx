"use client";

import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

import { DEFAULT_CARDS } from "@/data/board";
import { CardType } from "@/types";

import { Button } from "@/components/ui/button";
import AddSectionModal from "@/components/modals/AddSectionModal";
import Column from "./Column";

const Board = () => {
  const [cards, setCards] = useState<CardType[]>([...DEFAULT_CARDS]);
  const [columns, setColumns] = useState<string[]>([
    "To Do",
    "In Progress",
    "Review",
    "Review",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddColumn = (name: string) => {
    setColumns([...columns, name]);
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-full gap-[30px] py-[22px] px-[30px] overflow-x-scroll !pb-5">
      {columns.map((column, index) => (
        <Column
          key={column}
          title={column.charAt(0).toUpperCase() + column.slice(1)}
          column={column}
          cards={cards}
          setCards={setCards}
        />
      ))}
      <div className="">
        <Button
          variant="link"
          className="text-gray-400 h-auto py-1 px-2.5"
          onClick={() => setIsModalOpen(true)}
        >
          <IoAddOutline size={20} />
          <span className="ml-2 font-semibold text-[16px]">Add section</span>
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
