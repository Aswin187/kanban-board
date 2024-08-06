import { type ClassValue, clsx } from "clsx";
import { format, isToday, isTomorrow, isYesterday } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string => {
  const names = name.split(" ");
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }
  const initials = names[0].charAt(0) + names[names.length - 1].charAt(0);
  return initials.toUpperCase();
};

// Function to format the date
export const dateFormatter = (date: Date) => {
  const day = format(date, "dd");
  const month = format(date, "MMM");

  if (isToday(date)) return { text: "Today", color: "text-black" };
  if (isTomorrow(date)) return { text: "Tomorrow", color: "text-sky-600" };
  if (isYesterday(date)) return { text: "Yesterday", color: "text-red-500" };
  return { text: `${day} ${month}`, color: "text-gray-400" };
};
