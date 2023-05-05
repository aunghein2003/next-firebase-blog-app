import { clsx, ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export const cn = (...className: ClassValue[]) => {
  return twMerge(clsx(className));
};
