import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Kombiniert Klassen mit tailwind-merge für kollisionsfreie Utility-Klassen. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
