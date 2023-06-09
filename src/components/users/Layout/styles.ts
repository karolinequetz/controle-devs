import { cva } from "class-variance-authority";

export const container = cva("flex flex-1 flex-col gap-4 p-16");

export const backContent = cva(
  "w-24 flex items-center gap-1 text-xl leading-relaxed text-gray-800 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 "
);

export const arrowIcon = cva("h-6 w-6");
