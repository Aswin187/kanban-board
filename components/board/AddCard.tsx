"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

import { AddCardProps, CardType } from "@/types";

import AddModal from "@/components/modals/AddCardModal";

const AddCard: React.FC<AddCardProps> = ({ column, setCards }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (taskData: CardType) => {
    setCards((prevCards) => [...prevCards, taskData]);
  };

  return (
    <>
      <motion.button
        layout
        onClick={() => setIsModalOpen(true)}
        className="flex w-full items-center justify-center gap-1.5 px-3 py-4 text-[16px] font-medium transition text-[#A2AABC] hover:text-black"
      >
        <FiPlus />
        <span>Add task</span>
      </motion.button>

      <AddModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setOpen={setIsModalOpen}
        handleAddTask={handleAddTask}
        column={column}
      />
    </>
  );
};

export default AddCard;
