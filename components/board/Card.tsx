"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsThreeDots } from "react-icons/bs";
import { dateFormatter } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CardProps, CardType } from "@/types";
import DropIndicator from "./DropIndicator";
import AddModal from "../modals/AddCardModal";

const Card: React.FC<CardProps> = ({
  title,
  id,
  column,
  deadline,
  tag,
  assignee,
  handleDragStart,
  setCards,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleMotionDragStart = (e: MouseEvent | TouchEvent | PointerEvent) => {
    handleDragStart(e as unknown as React.DragEvent, {
      title,
      id,
      column,
      deadline,
      assignee,
      tag,
    });
  };

  const handleMouseHover = (hoverState: boolean) => {
    setIsHovered(hoverState);
  };

  const { text: formattedDate, color: dateColor } = dateFormatter(
    new Date(deadline)
  );

  const handleDelete = () => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const handleEdit = (updatedTask: CardType) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedTask.id ? updatedTask : card))
    );
    setIsEditModalOpen(false);
  };

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={handleMotionDragStart}
        onMouseEnter={() => handleMouseHover(true)}
        onMouseLeave={() => handleMouseHover(false)}
        className="flex flex-col gap-6 w-full bg-white rounded-xl border border-neutral-300 p-2 cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-start justify-between gap-3">
          <h1 className="leading-6">{title}</h1>
          <div className={isHovered ? "visible" : "invisible"}>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-500 hover:text-black border-0">
                <BsThreeDots />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setIsEditModalOpen(true)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleDelete}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className={`text-sm font-sans ${dateColor}`}>{formattedDate}</p>
          </div>
          {tag && (
            <div className="px-3 py-1 bg-slate-200/50 rounded-2xl">
              <p className="text-xs">{tag}</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* AddModal for editing the card */}
      <AddModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        setOpen={setIsEditModalOpen}
        handleAddTask={handleEdit}
        column={column}
        initialTaskData={{
          id,
          title,
          description: "",
          assignee,
          deadline,
          tag,
          column,
        }}
      />
    </>
  );
};

export default Card;
