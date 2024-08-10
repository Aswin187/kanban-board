"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Participants, Tags } from "@/data/participants";
import { getInitials } from "@/lib/utils";
import { CardType } from "@/types";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddTask: (taskData: CardType) => void;
  column: string;
  initialTaskData?: CardType;
}

const AddModal = ({
  isOpen,
  onClose,
  setOpen,
  handleAddTask,
  column,
  initialTaskData,
}: AddModalProps) => {
  const initialData = initialTaskData || {
    id: uuidv4(),
    title: "",
    description: "",
    assignee: "",
    deadline: new Date(),
    column: column,
    tag: "",
  };

  const [taskData, setTaskData] = useState(initialData);
  const [isAssigneeValid, setIsAssigneeValid] = useState(true);
  const [isTagValid, setIsTagValid] = useState(true);

  useEffect(() => {
    if (initialTaskData) {
      setTaskData(initialTaskData);
    }
  }, [initialTaskData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setTaskData((prevData) => ({ ...prevData, deadline: date }));
    }
  };

  const closeModal = () => {
    setOpen(false);
    onClose();
    setTaskData({ ...initialData, column }); // Reset taskData with column
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if assignee and tag are selected
    const isAssigneeValid = taskData.assignee !== "";
    const isTagValid = taskData.tag !== "";

    setIsAssigneeValid(isAssigneeValid);
    setIsTagValid(isTagValid);

    if (isAssigneeValid && isTagValid) {
      handleAddTask(taskData);
      closeModal();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {initialTaskData ? "Edit Task" : "Add Task"}
          </DialogTitle>
          <DialogDescription>
            Enter the details of the task below.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="name">Name</Label>
              <Input
                name="title"
                value={taskData.title}
                onChange={handleChange}
                placeholder="Name of your task"
                required
              />
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="name">Description</Label>
              <Textarea
                name="description"
                placeholder="Leave a description of this task..."
                value={taskData.description}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="framework">Assign to</Label>
              <Select
                required
                onValueChange={(value) => {
                  setTaskData((prevData) => ({ ...prevData, assignee: value }));
                  setIsAssigneeValid(true);
                }}
                value={taskData.assignee}
              >
                <SelectTrigger className=" bg-slate-100/50">
                  <SelectValue placeholder="Select assignee..." />
                </SelectTrigger>
                <SelectContent>
                  {Participants.map((participant, index) => (
                    <SelectItem
                      key={participant.name + index}
                      value={participant.name}
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-7 h-7">
                          <AvatarImage src={participant.image} />
                          <AvatarFallback>
                            {getInitials(participant.name)}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-sm">{participant.name}</p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {!isAssigneeValid && (
                <p className="text-red-500 text-sm mt-1">
                  Please select an assignee.
                </p>
              )}
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="name">Deadline</Label>
              <DatePicker
                selected={taskData.deadline}
                onChange={handleDateChange}
                className="bg-slate-100/50 w-full rounded-md border px-3 py-2.5 text-sm"
                placeholderText="Select date..."
              />
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="framework">Tag</Label>
              <Select
                required
                onValueChange={(value) => {
                  setTaskData((prevData) => ({ ...prevData, tag: value }));
                  setIsTagValid(true);
                }}
                value={taskData.tag}
              >
                <SelectTrigger className=" bg-slate-100/50">
                  <SelectValue placeholder="Select tag..." />
                </SelectTrigger>
                <SelectContent>
                  {Tags.map((tag, index) => (
                    <SelectItem key={tag.name + index} value={tag.name}>
                      <div className="flex items-center space-x-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                        <p>{tag.name}</p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {!isTagValid && (
                <p className="text-red-500 text-sm mt-1">
                  Please select a tag.
                </p>
              )}
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button onClick={closeModal} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="default">
            {initialTaskData ? "Save" : "Add"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddModal;
